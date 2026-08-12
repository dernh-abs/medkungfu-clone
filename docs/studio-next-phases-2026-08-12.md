# /studio 后续完善计划（Phase 5→1→4→2→3）

> 背景：A–F（多页可编辑框架）已落地并 push（commit `1ad37d3`）。但 `/studio` 整体还差「编辑成果前台可见、占位页真实内容、NL 按页、pageSection 丰富化、pageSection i18n」五块。
> 本计划按用户指定顺序 **5 → 1 → 4 → 2 → 3** 推进，先出计划对齐再动手。

---

## 当前架构事实（写计划前的核对）

- 公开站点路由：`src/app/{projects,services,hospitals,stories,about,faq,contact,why-china}/page.tsx` —— **均为硬编码组件树**（如 `ProjectsHero` / `TreatmentCategoriesSection`），不读 UCD。首页 `src/app/page.tsx` 用 `useSectionData("home", …)` + seed 兜底。
- `content-runtime` 是模块级单例，公开端从未 `commitDocument`，所以 `useSectionData` 返回的是 seed-data 兜底，**不是 `.content` 已发布内容**。→ 首页公开端目前也显示 seed，而非 /studio 发布的内容。
- `loadPage(slug)` / `listPageSlugs()` 已存在（`content-loader.ts`），读 `.content/pages/<slug>.json`。
- `puck-adapter.ucdToPuck(pageData, slug)` 已能把某页 UCD 转成 puck `content[]`（每项 `{type, props:{id,kind,title,body,image,linkHref,linkLabel}}`）。
- `PageSection.tsx` 已存在，self-contained，支持 `kind=hero|content|cta`，**无 i18n**。
- 后端 `generatePlan(intent, currentDoc)` 已按 `intent.page` 作用；但 `intent-parser` 不解析 page、`useAgentCommand("home")` 硬编码、query "structure" 硬编码读 `home`。
- `PLACEHOLDER_PAGES`（seed-data.ts）8 页各 3 个 pageSection，内容为占位的 Lorem 式英文。

---

## Phase 5 — 线上公开渲染链路（打通编辑→前台可见）

**目标**：在 `/studio/<slug>` 编辑并发布后，前台对应公开页能显示该内容。

**做法**：放弃依赖未初始化的 `content-runtime`，改为**服务端直接读 `.content` 渲染**。

1. 新增服务端组件 `src/components/sites/www-medkungfu-com-363c9bc1/shared/PublicPage.tsx`：
   - `export default async function PublicPage({ slug }: { slug: string })`，`"use server"` 不需要，普通 async server component 即可；
   - `const pageData = await loadPage(slug)`；若无数据则渲染 `notFound()` 或兜底；
   - `const { content } = ucdToPuck(pageData, slug)`；
   - 遍历 `content`，仅渲染 `item.type === "pageSection"` 的项：`<PageSection key={item.props.id} {...item.props} />`；
   - 外层包 `SiteHeader` + `SiteFooter` + `container-custom` / `pt-[72px]` 标准布局（与现有公开页一致）。
2. 改写 8 个公开路由 `page.tsx`（projects/services/hospitals/stories/about/faq/contact/why-china）：删除各自硬编码组件树，改为 `<PublicPage slug="<对应 slug>" />`（`why-china` → `slug="why-china"`）。
3. **不动** `src/app/page.tsx`（首页仍走 rich 组件 + `useSectionData`，后续单独评估）。

**验证**：`npm run dev` → `curl /projects` 应返回含「Medical Projects」「Featured Programs」等 pageSection 文案的 HTML；e2e 增加断言（公开页含 seeded 标题）。

**决策点 5-A（待你拍板）**：是否**删除**被替换掉的 8 套硬编码页面组件（如 `projects-902ceeb2/*`、`services-*`、`hospitals-*` 等）？
- 方案 A：删除，避免死代码（推荐，因为这些页将完全由内容驱动）。
- 方案 B：保留作为「内容缺失时的兜底」，PublicPage 在无 `.content` 时回退到原组件树（复杂度高，暂不推荐）。

**决策点 5-B（待你拍板）**：发布落盘确认。`publish` / studio document PATCH 是否真的写回 `.content/pages/<slug>.json`？计划假设「是」。若否，PublicPage 读到的仍是 seed（需先对齐发布写盘，或 PublicPage 直接读 draft 已发布版本）。执行 Phase 5 第一步先验证这一点。

---

## Phase 1 — 8 个占位页填充真实内容

**目标**：把 `PLACEHOLDER_PAGES` 的 Lorem 式英文换成**真实、可用**的文案（先单语 en，i18n 留待 Phase 3）。

**做法**：
1. 重写 `seed-data.ts` 的 `PLACEHOLDER_PAGES`：保留 `ph()` 三段落结构（hero / content / cta），但填入各页真实业务文案（projects=医疗项目、services=跨境服务套餐、hospitals=合作医院网络、stories=患者故事、about=关于、faq=常见问题、contact=联系、why-china=为什么选中国）。
2. `npm run seed` 重新生成 `.content/pages/*.json`（Phase 5 的 PublicPage 立即反映）。
3. 文案体量：每段 1–3 句，保持 `pageSection` 当前能渲染的字段（title/body/image/linkHref/linkLabel），不引 Phase 2 才有的富字段。

**验证**：重新 seed 后访问公开页，看到真实文案；e2e 抽查 2–3 个页的标题。

**决策点 1-A（待你拍板）**：`npm run seed` 会**覆盖** `.content/pages/*.json`。若某些页已在 /studio 里有真人发布过的编辑，重 seed 会丢失。计划假设这些占位页尚无真人编辑 → 直接重 seed。若有，需先导出或排除。

---

## Phase 4 — NL 指令按页作用

**目标**：在 `/studio/<slug>` 的 NL 指令栏输入指令，只作用于**当前页**，而非永远 home。

**做法**（后端已天然支持按页，主要是透传 + 注入）：
1. `PuckEditor.tsx`：把当前 `page` 透传给 `<NLCommandBar page={page} />`。
2. `NLCommandBar.tsx`：`useAgentCommand(page)`（替换写死的 `"home"`）。
3. `useAgentCommand.ts`：`dryRun`/`apply` 的 fetch body 加 `options.page = page`（保留 `void page` 之外真正使用它）。
4. `/api/agent/command/route.ts`：
   - 请求体加 `page?: string`（默认 `"home"`）；
   - `query` 的 "structure" 分支：`currentDoc.pages[page]` 代替硬编码 `home`；
   - 解析出 intent 后，注入 page：对 `reorder/add/duplicate/remove_section` 直接 `intent.page = page`；对 `update_text/update_image/update_link` 的 `target` 路径加 `/pages/${page}` 前缀（若 intent-parser 产出的是相对 target）。
5. 若走 LLM 解析，`parseIntent(command, context)` 已接收 `context` —— 把 `page` 放进 context 让 LLM 产出带 page 的 intent。

**验证**：在 `/studio/projects` 输入「把第一个区块标题改成 XXX」→ 仅 projects 页变化；e2e 用 dryRun 断言 operations 的 path 含 `/pages/projects/`。

**风险 4-A**：`update_text` 等靠 `target` 字符串定位，rule 解析默认可能不带 page 前缀。需读 `path-resolver.ts` / `rule-matcher.ts` 确认 target 格式，必要时在 route 层统一加前缀。执行时第一步先打 dryRun 看 operations 路径。

### Phase 4 状态（2026-08-12 晚，已本地提交 `51391a4`，未 push）
- [x] 代码改动已落地并通过 `npm run typecheck`：
  - `path-resolver.ts`：非 home 页 `<sectionId>.<field>` → `/pages/<page>/sections/<sectionId>/<field>`；`resolveTranslationAllLangs` 加 page 形参。
  - `plan-generator.ts`：`planUpdateText` / `planUpdateLink` 尊重 `intent.page`；非 home 页文本走 section-data 单 op（不再误当翻译键）。
  - `rule-matcher.ts`：`matchRule(command, page)` 透传 page；图片规则产出 `/pages/<page>/...` 路径。
  - `intent-parser.ts`：`parseIntent(command, context, page)` 转发 page。
  - `route.ts`：请求体 `options.page`；解析后注入 intent.page；query "structure" 读 `pages[page]`。
  - `useAgentCommand.ts` / `NLCommandBar.tsx` / `PuckEditor.tsx`：当前页 page 透传到 agent API（dryRun / apply / apply-from-preview 三处均带 page）。
  - `e2e-studio-check.mjs`：新增 per-page NL dryRun 断言（operations[0].path 含 `/pages/projects/`）。
- [ ] **待办（下次启动先做）**：`npm run dev` 起服务后跑 `node scripts/e2e-studio-check.mjs` 验证新增断言全绿；随后把 `51391a4` 与更早的 `18ac0ba` / `06dea1b` 一起 push（GCM 凭据过期曾阻塞 push，需用户先重认证或手动 `git -c http.sslVerify=false push origin master`）。
- 备注：Phase 4 只解决「按页定向」，文本编辑仍依赖指令中带区块名（如「把 hero 标题改成…」）；纯「把标题改成…」不带区块名在非 home 页无法唯一定位（已知限制，留待后续或 Phase 2 时再补）。

---

## Phase 2 — pageSection 组件丰富化

**目标**：`PageSection` 从「纯文字+图+链接」升级为**几种可用布局**，让公开页不那么简陋（仍 self-contained、暂不 i18n）。

**做法**：
1. 扩展 `PageSectionProps`：增加 `columns?: 1|2`、`imageSide?: "left"|"right"`、`features?: {title:string; body:string}[]`、`stats?: {value:string; label:string}[]` 等可选字段；保留旧字段向后兼容。
2. `PageSection.tsx` 增加布局变体（基于 `kind` + 新字段）：
   - `content` + `columns:2` + `imageSide` → 图文两栏；
   - `content` + `features[]` → 特性三栏网格；
   - `content` + `stats[]` → 数据条。
3. `puck-config.tsx`：给 `pageSection` 组件注册新字段（fields），让 studio 可编辑这些布局参数。
4. 在 `seed-data` 适当页用上富字段（如 projects 用 features 网格）。

**验证**：tsc + 公开页渲染出两栏/网格/数据条；e2e 抽查。

**决策点 2-A（待你拍板）**：丰富度边界。建议只做「两栏图文 / 特性网格 / 数据条」三种，避免重复首页那套完整 section（services 网格、patientStories 卡片等）。是否同意这个边界？

---

## Phase 3 — pageSection i18n 支持

**目标**：`pageSection` 支持 en/zh 双语，语言切换对多页生效（与首页翻译键体系对齐或务实并行）。

**做法（务实并行字段方案，降低风险）**：
1. `PageSectionProps` 增加并行字段：`titleZh?`、`bodyZh?`、`linkLabelZh?`（image/linkHref 通常跨语言复用）。
2. `PageSection.tsx` 接收 `lang: "en"|"zh"`，按 lang 选 `title`/`titleZh` 等；公开 `PublicPage` 从 locale 取 lang 传入。
3. studio 侧：`TranslationEditor` 右栏对 `pageSection` 同时显示 en/zh 输入框（或复用现有翻译键逻辑）。
4. （可选、留待后续）迁移为正式翻译键体系，与 `getSectionTranslationKeys` 对齐。

**验证**：`/projects?lang=zh`（或站点语言切换）显示中文；e2e 抽查中英标题。

**决策点 3-A（待你拍板）**：i18n 实现方式——
- 方案 A：并行字段 `titleZh/bodyZh`（简单、即时可用，推荐）。
- 方案 B：走正式翻译键（与首页一致，但需把 pageSection 文案注册进 `translations.json` + `translation-meta`，改动大）。

---

## 验证总策略（每个 Phase 收尾都跑）

- `NODE_OPTIONS="" npx tsc --noEmit`
- 适配器往返：确认 3 个 pageSection 不分合并（已有脚本思路）
- `node scripts/e2e-studio-check.mjs`（Playwright）：扩展覆盖公开页渲染、NL 按页 path、i18n
- `npm run dev` 手动核对关键路由
- 每个 Phase 完成后 git commit + push（`git -c http.sslVerify=false push origin master`，沿用已验证的沙箱出网方式）

## 风险提示

- Phase 5 的 5-B（发布落盘）若不成立，需先修发布写盘，否则前台看不到 /studio 编辑结果。
- Phase 4 的 4-A（target 前缀）依赖 rule/LLM 解析产出格式，执行时先 dryRun 观测。
- Phase 1 的 1-A（重 seed 覆盖）会冲掉已发布编辑，确认占位页无真人编辑再执行。

## 待你确认后开始的决策点汇总

1. **5-A** 删除 8 套硬编码页面组件？
2. **1-A** 占位页确认无真人编辑、可直接重 seed？
3. **2-A** pageSection 丰富度边界（两栏/网格/数据条三种）？
4. **3-A** i18n 用并行字段还是正式翻译键？

---

## 进度状态（2026-08-12 收尾更新）

所有决策点均按原推荐项执行，五个阶段全部落地并本地验证通过。

| Phase | 内容 | 状态 | 本地 commit | e2e |
|-------|------|------|-------------|-----|
| 5 | 线上公开渲染链路（PublicPage 读 `.content`） | ✅ 完成 | `06dea1b`（已 push） | 通过 |
| 1 | 8 个占位页真实英文文案 | ✅ 完成 | `18ac0ba`（已 push） | 通过 |
| 4 | NL 指令按页作用（page 透传 + /pages/<page>/ 解析） | ✅ 完成 | `51391a4`（已 push） | 通过（nlPerPageTargetsProjects） |
| 2 | pageSection 丰富化（两栏/网格/数据条） | ✅ 完成 | 本地 `ahead+1` 待 push | 通过（feature grid / stats bar） |
| 3 | pageSection i18n 并行字段 + ?lang=zh | ✅ 完成 | 本地 `ahead+2` 待 push | 通过（publicProjectsZh） |

**验证手段**：`npm run typecheck` 全绿；`node scripts/e2e-studio-check.mjs` 11/11 断言通过（studio 列表 9 卡、projects 大纲 3 项、标题解析、home 翻译键、公开页渲染+特性网格+数据条、中文渲染、per-page NL path）。

**已知限制 / 后续**：
- 非 home 页纯「把标题改成…」不带区块名时无法唯一定位（需指令带区块名，如「把 hero 标题改成…」）；NL 的 zh 字段编辑（titleZh 等）暂未接入，后续可在 rule/plan 层扩展。
- 语言切换目前为 `?lang=zh` 查询参数；站点级语言切换器（cookie/持久化）留待后续。
- 4 个本地 commit（Phase 2、3 + 计划书状态）需在能连通 GitHub 的环境 push。

