// Playwright end-to-end self-check for the Studio TranslationEditor fix.
//
// Verifies that selecting a component on the canvas (via the Puck Outline)
// makes the right-side TranslationEditor show that section's translation
// fields. The fix replaced `usePuck().selectedItem` (always null) with
// `useGetPuck()` + the `itemSelector` prop Puck passes to `overrides.fields`.
//
// Run (after `npm run dev` is up on :3000 and Playwright is installed):
//   node scripts/e2e-studio-check.mjs
//
// Exit code 0 = fix verified, 1 = not verified (see /tmp/e2e/result.json).

import { chromium } from "playwright";
import fs from "node:fs";

const BASE = "http://localhost:3000/studio/home";
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
  const t = msg.text();
  result.consoleLogs.push(`[${msg.type()}] ${t}`);
  if (t.includes("[TranslationEditor]")) console.log("CONSOLE:", t);
});
page.on("pageerror", (err) => {
  result.pageErrors.push(String(err));
  console.log("PAGEERROR:", String(err));
});

// Click an item in the Puck Outline panel (NOT the Components palette).
// We scope to the sidebar section that contains the "Outline" heading, then
// click the entry with the given component name. This is the canonical way to
// select an already-placed component in Puck.
async function clickOutlineItem(sectionName) {
  try {
    const outlineSection = page
      .locator('[class*="_SidebarSection_"]')
      .filter({ has: page.getByText("Outline") });
    await outlineSection.getByText(sectionName).first().click({ timeout: 5000 });
    return true;
  } catch {
    return false;
  }
}

try {
  log("goto", { url: BASE });
  await page.goto(BASE, { waitUntil: "domcontentloaded", timeout: 60000 });

  // Wait until the editor has mounted (empty state OR seed error visible).
  await page.waitForFunction(
    () =>
      document.body.innerText.includes("在画布上点击任意组件以编辑其文本内容。") ||
      (document.body.innerText.includes("seed") && document.body.innerText.includes("npm run seed")),
    { timeout: 30000 }
  );

  const initialText = await page.evaluate(() => document.body.innerText);
  const hasEmptyState = initialText.includes("在画布上点击任意组件以编辑其文本内容。");
  const hasSeedError = initialText.includes("npm run seed");
  log("initial-load", { hasEmptyState, hasSeedError });
  if (hasSeedError) {
    result.pageErrors.push("Studio shows seed error — API/document not available.");
  }

  await page.screenshot({ path: `${OUT_DIR}/01-initial.png` });

  // ── Select Hero ───────────────────────────────────────────────
  const heroClicked = await clickOutlineItem("Hero");
  const heroIdx = heroClicked ? 0 : -2;
  await page.waitForTimeout(1200);
  const afterHero = await page.evaluate(() => document.body.innerText);
  const heroSelected = result.consoleLogs.some((l) => l.includes("[TranslationEditor] selected: hero"));
  const showsHeroKey = afterHero.includes("hero.title");
  const emptyStateGone = !afterHero.includes("在画布上点击任意组件以编辑其文本内容。");
  log("after-hero", { heroIdx, heroSelected, showsHeroKey, emptyStateGone });
  await page.screenshot({ path: `${OUT_DIR}/02-after-hero.png` });

  // ── Select Services (verify switching) ────────────────────────
  const svcClicked = await clickOutlineItem("Services");
  const svcIdx = svcClicked ? 0 : -2;
  await page.waitForTimeout(1200);
  const afterSvc = await page.evaluate(() => document.body.innerText);
  const svcSelected = result.consoleLogs.some((l) => l.includes("[TranslationEditor] selected: services"));
  const heroKeyGone = !afterSvc.includes("hero.title");
  log("after-services", { svcIdx, svcSelected, heroKeyGone });
  await page.screenshot({ path: `${OUT_DIR}/03-after-services.png` });

  const a = result.details.assertions;
  a.heroSelected = heroSelected;
  a.showsHeroKey = showsHeroKey;
  a.emptyStateGone = emptyStateGone;
  a.svcSelected = svcSelected;
  a.heroKeyGone = heroKeyGone;
  result.success = heroSelected && showsHeroKey && emptyStateGone && svcSelected;
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
