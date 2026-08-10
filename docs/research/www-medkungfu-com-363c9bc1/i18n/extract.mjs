import fs from "node:fs";

const bundle = fs.readFileSync(
  "docs/research/www-medkungfu-com-363c9bc1/i18n/bundle.js",
  "utf8"
);

function extractObject(src, startIdx) {
  let depth = 0,
    i = startIdx,
    inStr = false,
    strChar = "";
  for (; i < src.length; i++) {
    const ch = src[i];
    if (inStr) {
      if (ch === "\\") {
        i++;
        continue;
      }
      if (ch === strChar) inStr = false;
      continue;
    }
    if (ch === '"' || ch === "'") {
      inStr = true;
      strChar = ch;
      continue;
    }
    if (ch === "{") depth++;
    else if (ch === "}") {
      depth--;
      if (depth === 0) {
        i++;
        break;
      }
    }
  }
  return src.slice(startIdx, i);
}

const resStart = bundle.indexOf("resources:{");
const resSrc = extractObject(bundle, resStart + "resources:".length);
console.log("resources object length:", resSrc.length);

const toJson = (s) => s.replace(/!0/g, "true").replace(/!1/g, "false");
let resources;
try {
  resources = eval("(" + toJson(resSrc) + ")");
} catch (e) {
  console.log("eval fail:", e.message);
}
const keys = Object.keys(resources);
console.log("languages:", keys);
for (const lang of keys) {
  const t = resources[lang].translation || {};
  console.log(lang + " top keys:", Object.keys(t).slice(0, 30).join(", "));
}
fs.writeFileSync(
  "docs/research/www-medkungfu-com-363c9bc1/i18n/translations.json",
  JSON.stringify(resources, null, 1)
);
console.log("saved translations.json");
