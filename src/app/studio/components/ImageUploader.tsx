"use client";

// ImageUploader — reusable image field component for Studio.
//
// Features:
//   1. Preview current image (or placeholder if empty)
//   2. Upload new image via file picker → client-side compression → POST /api/studio/upload
//   3. Choose from asset library (modal grid of previously uploaded images)
//   4. Progress bar during upload
//   5. Error display
//
// Used by:
//   - Stage H custom field types (ImageField) in puck-config
//   - Stage I semantic editors (HeroFields, etc.)
//
// Compression: uses browser-image-compression to shrink images > 500KB
// before upload. SVGs are not compressed (vector format).

import { useRef, useState, useCallback, useEffect, type ChangeEvent } from "react";
import imageCompression from "browser-image-compression";

interface AssetEntry {
  url: string;
  originalName: string;
  size: number;
  mimeType: string;
  uploadedAt: string;
}

interface ImageUploaderProps {
  /** Current image URL (controlled). */
  value: string;
  /** Called when a new image is selected (URL string). */
  onChange: (url: string) => void;
  /** Optional label shown above the uploader. */
  label?: string;
}

type Status = "idle" | "compressing" | "uploading" | "done" | "error";

export function ImageUploader({ value, onChange, label }: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [showLibrary, setShowLibrary] = useState(false);

  const handleFile = useCallback(
    async (file: File) => {
      setError(null);
      setStatus("idle");
      setProgress(0);

      try {
        let uploadFile: File = file;

        // Compress raster images > 500KB. SVGs are skipped (vector).
        if (file.type !== "image/svg+xml" && file.size > 500 * 1024) {
          setStatus("compressing");
          uploadFile = await imageCompression(file, {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
            onProgress: (pct) => setProgress(pct),
          });
        }

        // Upload
        setStatus("uploading");
        setProgress(0);
        const formData = new FormData();
        formData.append("file", uploadFile);

        const res = await fetch("/api/studio/upload", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();

        if (!res.ok || !data.success) {
          throw new Error(data.error ?? `Upload failed (HTTP ${res.status})`);
        }

        onChange(data.url);
        setStatus("done");
        setProgress(100);
        // Reset to idle after a brief "done" flash.
        setTimeout(() => {
          setStatus("idle");
          setProgress(0);
        }, 800);
      } catch (err) {
        const message = err instanceof Error ? err.message : "Upload failed";
        setError(message);
        setStatus("error");
      }
    },
    [onChange]
  );

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) handleFile(file);
      // Reset input so selecting the same file again re-triggers.
      e.target.value = "";
    },
    [handleFile]
  );

  // Drag-and-drop support
  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer.files?.[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const busy = status === "compressing" || status === "uploading";
  const statusLabel =
    status === "compressing"
      ? `压缩中… ${progress}%`
      : status === "uploading"
        ? "上传中…"
        : status === "done"
          ? "✓ 完成"
          : status === "error"
            ? "失败"
            : "";

  return (
    <div className="w-full">
      {label && (
        <span className="block text-xs text-gray-500 mb-1">{label}</span>
      )}

      {/* Preview area + drag-drop */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="relative w-full h-32 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center overflow-hidden hover:border-[#1B4D3E] transition-colors"
      >
        {value ? (
          // eslint-disable-next-line @next/next/no-img-element -- studio asset preview
          <img
            src={value}
            alt="preview"
            className="w-full h-full object-contain"
          />
        ) : (
          <span className="text-xs text-gray-400">拖放图片到此处或点击上传</span>
        )}

        {/* Busy overlay */}
        {busy && (
          <div className="absolute inset-0 bg-white/70 flex flex-col items-center justify-center gap-1">
            <span className="text-xs text-gray-700">{statusLabel}</span>
            {status === "compressing" && (
              <div className="w-3/4 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#1B4D3E] transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
            {status === "uploading" && (
              <div className="w-3/4 h-1.5 bg-gray-200 rounded-full overflow-hidden animate-pulse">
                <div className="h-full bg-[#1B4D3E] w-1/2" />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-2 mt-2">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/svg+xml"
          onChange={handleInputChange}
          className="hidden"
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={busy}
          className="px-3 py-1.5 text-xs font-medium text-white bg-[#1B4D3E] rounded-md hover:bg-[#143D30] disabled:opacity-40 disabled:cursor-not-allowed"
        >
          📤 上传
        </button>
        <button
          type="button"
          onClick={() => setShowLibrary(true)}
          disabled={busy}
          className="px-3 py-1.5 text-xs text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          📁 素材库
        </button>
        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            disabled={busy}
            className="px-3 py-1.5 text-xs text-red-600 hover:bg-red-50 rounded-md disabled:opacity-40"
          >
            移除
          </button>
        )}
        {statusLabel && !busy && (
          <span
            className={`text-xs ml-auto ${
              status === "done" ? "text-green-600" : "text-red-600"
            }`}
          >
            {statusLabel}
          </span>
        )}
      </div>

      {error && (
        <p className="mt-1 text-xs text-red-600">{error}</p>
      )}

      {/* URL display (read-only, for debugging/advanced use) */}
      {value && (
        <p className="mt-1 text-[10px] text-gray-400 truncate" title={value}>
          {value}
        </p>
      )}

      {/* Asset library modal */}
      {showLibrary && (
        <AssetLibraryModal
          onSelect={(url) => {
            onChange(url);
            setShowLibrary(false);
          }}
          onClose={() => setShowLibrary(false)}
        />
      )}
    </div>
  );
}

// ─── Asset Library Modal ─────────────────────────────────────────────

function AssetLibraryModal({
  onSelect,
  onClose,
}: {
  onSelect: (url: string) => void;
  onClose: () => void;
}) {
  const [assets, setAssets] = useState<AssetEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load assets on mount
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/studio/assets");
        const data = await res.json();
        if (cancelled) return;
        if (data.success) {
          setAssets(data.assets);
        } else {
          setError(data.error ?? "Failed to load assets");
        }
      } catch (err) {
        if (!cancelled)
          setError(err instanceof Error ? err.message : "Network error");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[70vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <h2 className="text-sm font-semibold text-gray-900">素材库</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {loading && (
            <p className="text-center text-sm text-gray-400 py-8">加载中…</p>
          )}
          {error && (
            <p className="text-center text-sm text-red-600 py-8">{error}</p>
          )}
          {!loading && !error && assets.length === 0 && (
            <p className="text-center text-sm text-gray-400 py-8">
              素材库为空，先上传一些图片吧。
            </p>
          )}
          {!loading && !error && assets.length > 0 && (
            <div className="grid grid-cols-4 gap-3">
              {assets.map((asset) => (
                <button
                  key={asset.url}
                  type="button"
                  onClick={() => onSelect(asset.url)}
                  className="group relative aspect-square rounded-lg overflow-hidden border border-gray-200 hover:border-[#1B4D3E] hover:ring-2 hover:ring-[#1B4D3E]/30 transition-all"
                  title={asset.originalName}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- asset library thumb */}
                  <img
                    src={asset.url}
                    alt={asset.originalName}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-black/50 text-white text-[10px] px-1 py-0.5 truncate opacity-0 group-hover:opacity-100 transition-opacity">
                    {asset.originalName}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
