![六角 2026 30 天軟體工程師體驗營作品縮圖](./public/thumbnail.webp)

# 六角 2026 30 天軟體工程師體驗營 - 個人作品網站版型

六角學院 2026 軟體工程師體驗營任務作品，使用 Nuxt 4、Vue 3、TypeScript 與 Tailwind CSS 4，包含首頁、服務項目、專案作品及部落格。

- [設計稿](https://www.figma.com/design/p9J0EAASQNwGpiz7NuJaxi/2026ver.-%E9%AB%94%E9%A9%97%E7%87%9F%E8%A8%AD%E8%A8%88%E7%A8%BF--%E8%A8%AD%E8%A8%88%E5%B8%AB%E7%B7%A8%E8%BC%AF%E6%AA%94-?node-id=11107-13669&p=f&t=m9EDgVEp1OwvunCL-0)
- [作品展示](https://hex2026-mission2.pages.dev/)

## 開始開發

使用 Node.js 26.13.0 LTS（見 [.nvmrc](./.nvmrc)）：

```sh
git clone https://github.com/happyloa/Hex2026-mission2.git
cd Hex2026-mission2
npm ci
npm run dev
```

開啟 <http://localhost:3000/>。VS Code 擴充套件建議見 [.vscode/extensions.json](./.vscode/extensions.json)。

| 指令                   | 用途                               |
| ---------------------- | ---------------------------------- |
| `npm run format`       | 以 Prettier 格式化並排序 class     |
| `npm run format:check` | 檢查格式                           |
| `npm run typecheck`    | 型別檢查                           |
| `npm run build`        | 建立 Nuxt 伺服器版本               |
| `npm run preview`      | 預覽建置結果                       |
| `npm run generate`     | 產生靜態網站至 `.output/public`    |
| `npm run test:static`  | 檢查靜態輸出的文章資料、網址與圖片 |
| `npm audit`            | 掃描相依套件漏洞                   |

`test:static` 需要先執行 `generate`。[CI](./.github/workflows/ci.yml) 會在推送至 `main` 與 PR 時依序執行格式、型別、靜態產生、整合測試與漏洞掃描（moderate 以上即失敗）。

字型由 Nuxt Fonts 自託管。首次安裝或建置需連線下載 Noto Sans TC，並依 `app`、`content` 的文字裁切成單一可變字型。來源與流程見 [build/fonts.ts](./build/fonts.ts)，授權見 [OFL.txt](./public/fonts/OFL.txt)。

TypeScript 維持 6.x：TypeScript 7 已移除 `vue-tsc` 依賴的 JavaScript API，Vue 工具鏈改經由 [typescript-native-bridge](https://github.com/vuejs/language-tools/issues/5381) 支援，待 `vue-tsc` 正式支援後再升級。`overrides` 將 Nuxt Content 的 Zod、minimatch 及建置工具的 glob 固定在已修補版本，待上游依賴更新後可移除。`npm audit` 仍會列出建置工具間接依賴的 [deepmerge 漏洞](https://github.com/advisories/GHSA-gcqx-w48m-w2h4)，目前沒有官方修補版；勿使用 `npm audit fix --force` 降版框架。

## 路由與資料

| 頁面     | 路徑           | 資料來源                                       |
| -------- | -------------- | ---------------------------------------------- |
| 首頁     | `/`            | 服務、前三個專案與最新三篇文章                 |
| 服務項目 | `/service`     | [app/data/services.ts](./app/data/services.ts) |
| 專案作品 | `/project`     | [app/data/projects.ts](./app/data/projects.ts) |
| 文章列表 | `/blog`        | [content/blog](./content/blog)                 |
| 單篇文章 | `/blog/:blog/` | 對應檔名的 Markdown                            |

- `/service?service=frontend`：選取服務流程。
- `/project?tag=網頁設計`：篩選專案。
- `/blog?tag=UIUX+設計`：篩選文章。

文章使用 Nuxt Content。在 `content/blog` 新增 Markdown，檔名即網址 slug；必要欄位見 [content.config.ts](./content.config.ts)，圖文區塊使用 [BlogFigure.vue](./app/components/content/BlogFigure.vue)。建置會產生文章路由及 `/api/blog/*.json`，供瀏覽器導覽與篩選。

服務與專案直接修改對應資料檔，欄位見 [app/types/index.ts](./app/types/index.ts)。圖片放在 `public/img`；[modules/site-images.ts](./modules/site-images.ts) 會產生尺寸資料與響應式 WebP，不覆寫原始圖片。文章內文圖片以原始尺寸為顯示上限。

全域配色、字級與樣式位於 [app/assets/css/main.css](./app/assets/css/main.css)，SEO 工具位於 [app/utils/seo.ts](./app/utils/seo.ts)。文章 Markdown 已排除於 Prettier，避免 MDC 區塊被改寫。

## 部署

Cloudflare Pages 使用：

- Node.js：`26.13.0`，與 `.nvmrc` 一致
- 建置指令：`npm run generate`
- 發佈目錄：`.output/public`

部署至其他網域時，設定 `NUXT_PUBLIC_SITE_URL=https://your-domain.com`，供 OG 與分享網址使用。預設部署於網域根目錄；部署至子路徑時設定 `NUXT_APP_BASE_URL=/your-repo-name/`，圖片、CSS 背景圖與 favicon 都會自動加上前綴。

[public/_headers](./public/_headers) 設定 CSP 等安全標頭與資源快取；CSP 僅允許同源資源，新增外部服務（分析、嵌入內容等）時需同步調整。Nuxt Content 建置時使用 Node.js 內建 SQLite，部署只需靜態 HTML、JSON 與資源檔。Nuxt DevTools 僅在開發環境啟用。

## 展示功能限制

- 聯絡與訂閱表單使用 `@submit.prevent`，尚未串接後端。
- Instagram、LINE、LinkedIn 等部分社群連結仍是 `#` 佔位。
- 部落格的換頁按鈕是展示用，尚未實作分頁。
