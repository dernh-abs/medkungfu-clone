// Asset downloader for MedKungFu homepage (site-key: www-medkungfu-com-363c9bc1, page-key: root-8a5edab2)
// Downloads images, favicons, and site assets into the planned namespaces.
import { mkdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PAGE_IMG = "public/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/images";
const SHARED = "public/sites/www-medkungfu-com-363c9bc1/shared";

const assets = [
  // Hero doctor photo
  { url: "https://www.medkungfu.com/assets/medkungfu-doctor-hero.a2d17594bfad.jpg", dest: join(PAGE_IMG, "medkungfu-doctor-hero.jpg") },
  // Patient story portraits
  { url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200", dest: join(PAGE_IMG, "patient-se-asia-lymphoma.jpg") },
  { url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200", dest: join(PAGE_IMG, "patient-middle-east.jpg") },
  { url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200", dest: join(PAGE_IMG, "patient-se-asia-osteoarthritis.jpg") },
  // Favicons & SEO (shared namespace)
  { url: "https://www.medkungfu.com/favicon-32x32.png", dest: join(SHARED, "favicon-32x32.png") },
  { url: "https://www.medkungfu.com/favicon-16x16.png", dest: join(SHARED, "favicon-16x16.png") },
  { url: "https://www.medkungfu.com/apple-touch-icon.png", dest: join(SHARED, "apple-touch-icon.png") },
  { url: "https://www.medkungfu.com/site.webmanifest", dest: join(SHARED, "site.webmanifest") },
  { url: "https://www.medkungfu.com/og-image.jpg", dest: join(SHARED, "og-image.jpg") },
  { url: "https://www.medkungfu.com/twitter-card.jpg", dest: join(SHARED, "twitter-card.jpg") },
];

async function download(url, dest) {
  try {
    const res = await fetch(url, { redirect: "follow" });
    if (!res.ok) {
      console.log(`  SKIP ${url} -> HTTP ${res.status}`);
      return false;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    mkdirSync(dirname(join(ROOT, dest)), { recursive: true });
    writeFileSync(join(ROOT, dest), buf);
    console.log(`  OK   ${dest} (${(buf.length / 1024).toFixed(1)} KB)`);
    return true;
  } catch (err) {
    console.log(`  ERR  ${url} -> ${err.message}`);
    return false;
  }
}

// Batched parallel downloads (4 at a time)
async function main() {
  console.log("Downloading MedKungFu assets...");
  let i = 0;
  let ok = 0;
  while (i < assets.length) {
    const batch = assets.slice(i, i + 4);
    const results = await Promise.all(batch.map((a) => download(a.url, a.dest)));
    ok += results.filter(Boolean).length;
    i += 4;
  }
  console.log(`Done. ${ok}/${assets.length} assets downloaded.`);
}

main();
