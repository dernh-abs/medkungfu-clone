"use client";

// EditorCanvas — the center area with drag-and-drop section reordering.
//
// Uses @dnd-kit/sortable for accessible, React 19-compatible drag reordering.
// On drag end, the new order is computed via arrayMove and passed to the
// parent, which updates the draft. The diff generator then produces the
// corresponding replace operation on /pages/{page}/order.
//
// Each section renders as a card showing the section id, type, and a brief
// summary of its content. Clicking a card selects it for the PropertyPanel.
//
// Enhanced (batch 1): hover toolbar with move up/down/top/bottom + delete.

import {
  DndContext,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  closestCenter,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import type { HomePageData } from "@/lib/content/content-schema";

interface EditorCanvasProps {
  page: string;
  draft: HomePageData;
  selectedSection: string | null;
  onSelectSection: (id: string | null) => void;
  onReorder: (newOrder: string[]) => void;
  onDeleteSection: (id: string) => void;
}

/** Produce a short text summary of a section for the card display. */
function summarizeSection(id: string, data: unknown): string {
  if (!data || typeof data !== "object") return "";
  const obj = data as Record<string, unknown>;
  if (id === "hero") return `${(obj.image as string)?.slice(-30) ?? ""}`;
  if (id === "cityStrip") {
    const cities = obj.cities as { name: string }[] | undefined;
    return cities ? `${cities.length} cities` : "";
  }
  if (id === "services" || id === "trustStats" || id === "ourPromise" || id === "medicalProjects" || id === "serviceProcess" || id === "patientStories" || id === "featuredFaq") {
    const items = obj.items as unknown[] | undefined;
    return items ? `${items.length} items` : "";
  }
  if (id === "cta") return "Contact form";
  return "";
}

function SortableSection({
  id,
  index,
  total,
  isSelected,
  onSelect,
  summary,
  onMoveUp,
  onMoveDown,
  onMoveTop,
  onMoveBottom,
  onDelete,
}: {
  id: string;
  index: number;
  total: number;
  isSelected: boolean;
  onSelect: () => void;
  summary: string;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onMoveTop: () => void;
  onMoveBottom: () => void;
  onDelete: () => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`group flex items-center gap-3 p-3 mb-2 rounded-lg border cursor-pointer transition-all ${
        isSelected
          ? "border-[#1B4D3E] bg-[#1B4D3E]/5 shadow-sm"
          : "border-gray-200 bg-white hover:border-gray-300"
      } ${isDragging ? "opacity-60 shadow-lg" : ""}`}
      onClick={onSelect}
    >
      <button
        type="button"
        {...attributes}
        {...listeners}
        onClick={(e) => e.stopPropagation()}
        className="text-gray-400 hover:text-gray-600 cursor-grab active:cursor-grabbing touch-none"
        aria-label={`Drag ${id} to reorder`}
      >
        ⠿
      </button>
      <span className="text-xs text-gray-400 w-6 text-center">{index + 1}</span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900">{id}</p>
        {summary && (
          <p className="text-xs text-gray-500 truncate">{summary}</p>
        )}
      </div>

      {/* Hover toolbar — always visible on selected, visible on hover otherwise */}
      <div
        className={`flex items-center gap-0.5 transition-opacity ${
          isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onMoveTop}
          disabled={index === 0}
          className="px-1.5 py-1 text-xs text-gray-500 rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
          title="Move to top"
        >
          ⤒
        </button>
        <button
          type="button"
          onClick={onMoveUp}
          disabled={index === 0}
          className="px-1.5 py-1 text-xs text-gray-500 rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
          title="Move up"
        >
          ↑
        </button>
        <button
          type="button"
          onClick={onMoveDown}
          disabled={index === total - 1}
          className="px-1.5 py-1 text-xs text-gray-500 rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
          title="Move down"
        >
          ↓
        </button>
        <button
          type="button"
          onClick={onMoveBottom}
          disabled={index === total - 1}
          className="px-1.5 py-1 text-xs text-gray-500 rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
          title="Move to bottom"
        >
          ⤓
        </button>
        <span className="w-px h-4 bg-gray-200 mx-0.5" />
        <button
          type="button"
          onClick={onDelete}
          className="px-1.5 py-1 text-xs text-red-500 rounded hover:bg-red-50"
          title="Delete section"
        >
          ✕
        </button>
      </div>

      {isSelected && (
        <span className="text-xs text-[#1B4D3E] font-medium ml-1">editing</span>
      )}
    </div>
  );
}

export function EditorCanvas({
  page,
  draft,
  selectedSection,
  onSelectSection,
  onReorder,
  onDeleteSection,
}: EditorCanvasProps) {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const order = draft.order as string[];
  const sections = draft.sections;

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = order.indexOf(active.id as string);
    const newIndex = order.indexOf(over.id as string);
    if (oldIndex < 0 || newIndex < 0) return;
    onReorder(arrayMove(order, oldIndex, newIndex));
  }

  return (
    <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-gray-700">
            Page: <span className="capitalize">{page}</span>
          </h2>
          <span className="text-xs text-gray-500">{order.length} sections</span>
        </div>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={order} strategy={verticalListSortingStrategy}>
            {order.map((id, index) => (
              <SortableSection
                key={id}
                id={id}
                index={index}
                total={order.length}
                isSelected={selectedSection === id}
                onSelect={() =>
                  onSelectSection(selectedSection === id ? null : id)
                }
                summary={summarizeSection(id, sections[id as keyof typeof sections])}
                onMoveUp={() => index > 0 && onReorder(arrayMove(order, index, index - 1))}
                onMoveDown={() => index < order.length - 1 && onReorder(arrayMove(order, index, index + 1))}
                onMoveTop={() => index > 0 && onReorder(arrayMove(order, index, 0))}
                onMoveBottom={() => index < order.length - 1 && onReorder(arrayMove(order, index, order.length - 1))}
                onDelete={() => onDeleteSection(id)}
              />
            ))}
          </SortableContext>
        </DndContext>
        {order.length === 0 && (
          <p className="text-center text-gray-400 py-8">No sections found.</p>
        )}
      </div>
    </main>
  );
}
