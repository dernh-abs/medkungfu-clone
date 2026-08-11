// Playwright end-to-end self-check for the Studio multi-page editing work:
//   - /studio lists every editable page (home + placeholder pages), grouped.
//   - /studio/<page> loads the page's pageSection blocks.
//   - The custom outline (overrides.outline) lists blocks by resolved title,
//     and clicking one selects it and drives the right-side panel header.
//   - Home still shows its translation keys in the right panel.
//
// Run (after `npm run dev` is up on :3000 and Playwright is installed):
//   node scripts/e2e-studio-check.mjs
//
// Exit code 0 = verified, 1 = not verified (see /tmp/e2e/result.json).

import { chromium } from "playwright";
import fs from "node:fs";

const BASE = "http://localhost:3000";
const OUT_DIR = "/tmp/e2e";
fs.mkdirSync(OUT_DIR, { recursive: true });

const result = {
  steps: [],
  consoleLogs: [],
  pageErrors: [],
  success: false,
  details: { assertions: {} },
};

const log = (name, info) => {
  result.steps.push({ name, ...(info || {}) });
  console.log(`[step] ${name}`, info && Object.keys(info).length ? JSON.stringify(info) : "");
};

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });

page.on("console", (msg) => {
  result.consoleLogs.push(`[${msg.type()}] ${msg.text()}`);
});
page.on("pageerror", (err) => {
  result.pageErrors.push(String(err));
  console.log("PAGEERROR:", String(err));
});

try {
  // ── /studio: multi-page listing ─────────────────────────────
  log("goto-studio", { url: `${BASE}/studio` });
  await page.goto(`${BASE}/studio`, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForSelector("[data-studio-page-card]", { timeout: 30000 });
  const cardCount = await page.locator("[data-studio-page-card]").count();
  const hasProjects = await page.locator('[data-studio-page-card="projects"]').count();
  const hasHome = await page.locator('[data-studio-page-card="home"]').count();
  log("studio-listing", { cardCount, hasProjects, hasHome });
  if (cardCount < 9) result.pageErrors.push(`Expected >=9 page cards, got ${cardCount}`);
  if (!hasProjects) result.pageErrors.push("projects page card missing");
  await page.screenshot({ path: `${OUT_DIR}/01-studio.png` });

  // ── /studio/projects: placeholder page loads 3 pageSections ─
  log("goto-projects", { url: `${BASE}/studio/projects` });
  await page.goto(`${BASE}/studio/projects`, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForSelector("[data-studio-outline-item]", { timeout: 30000 });
  await page.waitForTimeout(800);
  const outlineCount = await page.locator("[data-studio-outline-item]").count();
  log("projects-outline", { outlineCount });
  if (outlineCount !== 3)
    result.pageErrors.push(`Expected 3 outline items for projects, got ${outlineCount}`);

  // Click the first outline item (hero pageSection) and verify the right-panel
  // header reflects its resolved title.
  await page.locator("[data-studio-outline-item]").first().click();
  await page.waitForTimeout(1000);
  await page.waitForSelector("[data-studio-block-header]", { timeout: 5000 });
  const headerText = await page.locator("[data-studio-block-header]").innerText();
  log("projects-header", { headerText });
  const headerShowsTitle = headerText.includes("Medical Programs in China");
  if (!headerShowsTitle)
    result.pageErrors.push(`Right-panel header should show 'Medical Projects', got: ${headerText}`);
  await page.screenshot({ path: `${OUT_DIR}/02-projects.png` });

  // ── /studio/home: home component selection still drives the panel ──
  log("goto-home", { url: `${BASE}/studio/home` });
  await page.goto(`${BASE}/studio/home`, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForSelector("[data-studio-outline-item]", { timeout: 30000 });
  await page.waitForTimeout(800);
  await page.locator("[data-studio-outline-item]").first().click();
  await page.waitForTimeout(1000);
  await page.waitForSelector("[data-studio-block-header]", { timeout: 5000 });
  const homeHeader = await page.locator("[data-studio-block-header]").innerText();
  // Home hero should resolve to a real translation value, not the bare "Hero".
  const homeHeaderResolved = homeHeader.trim().length > 0 && !homeHeader.startsWith("Hero");
  const bodyText = await page.evaluate(() => document.body.innerText);
  const showsHeroKey = bodyText.includes("hero.title");
  log("home-selection", { homeHeader, homeHeaderResolved, showsHeroKey });
  if (!showsHeroKey) result.pageErrors.push("Home hero translation key 'hero.title' not shown");
  if (!homeHeaderResolved)
    result.pageErrors.push(`Home header should resolve a real title, got: ${homeHeader}`);
  await page.screenshot({ path: `${OUT_DIR}/03-home.png` });

  // ── public /projects: content-driven render via PublicPage ──
  log("goto-public-projects", { url: `${BASE}/projects` });
  await page.goto(`${BASE}/projects`, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(500);
  const pubText = await page.evaluate(() => document.body.innerText);
  const pubHtml = await page.content();
  const pubOk =
    pubText.includes("Medical Programs in China") &&
    pubText.includes("Start Your Assessment") &&
    pubHtml.includes("bg-[#1B4D3E]");
  log("public-projects", {
    includesTitle: pubText.includes("Medical Programs in China"),
    includesCta: pubText.includes("Start Your Assessment"),
    includesHeroBg: pubHtml.includes("bg-[#1B4D3E]"),
  });
  if (!pubOk)
    result.pageErrors.push("Public /projects did not render pageSection content via PublicPage");
  await page.screenshot({ path: `${OUT_DIR}/04-public-projects.png` });

  const a = result.details.assertions;
  a.cardCount = cardCount;
  a.hasProjects = hasProjects === 1;
  a.hasHome = hasHome === 1;
  a.projectsOutlineCount = outlineCount;
  a.projectsHeaderShowsTitle = headerShowsTitle;
  a.homeHeaderResolved = homeHeaderResolved;
  a.homeShowsHeroKey = showsHeroKey;
  a.publicProjectsRenders = pubOk;

  result.success = result.pageErrors.length === 0;
} catch (err) {
  result.pageErrors.push("SCRIPT_ERROR: " + (err && err.stack ? err.stack : String(err)));
  console.log("SCRIPT ERROR:", err);
  try {
    await page.screenshot({ path: `${OUT_DIR}/99-error.png` });
  } catch {
    /* ignore */
  }
} finally {
  fs.writeFileSync(`${OUT_DIR}/result.json`, JSON.stringify(result, null, 2));
  await browser.close();
  console.log(
    "RESULT:",
    JSON.stringify(
      { success: result.success, assertions: result.details.assertions, pageErrors: result.pageErrors },
      null,
      2
    )
  );
  process.exit(result.success ? 0 : 1);
}
