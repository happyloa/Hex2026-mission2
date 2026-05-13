![六角 2026 30 天軟體工程師體驗營作品縮圖](./public/thumbnail.webp)

# 六角 2026 30 天軟體工程師體驗營 - 個人作品網站版型

此專案為六角學院 2026 軟體工程師體驗營任務作品。網站以個人作品集為主軸，包含首頁、服務項目、專案作品、部落格列表與單篇文章頁，可作為個人品牌網站或作品展示版型使用。

## 使用技術

- [Nuxt 4](https://nuxt.com/)
- [Vue 3](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Nuxt Content](https://content.nuxt.com/)
- [Nuxt Fonts](https://fonts.nuxt.com/)
- [Nuxt Icon](https://nuxt.com/modules/icon)
- [Swiper](https://swiperjs.com/)

## 開發環境建議

建議使用 [VS Code](https://code.visualstudio.com/) 搭配以下擴充套件：

- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [Nuxtr](https://marketplace.visualstudio.com/items?itemName=Nuxtr.nuxtr-vscode)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## 快速開始

複製專案並安裝套件：

```sh
git clone https://github.com/happyloa/Hex2026-mission2.git
cd Hex2026-mission2
npm install
```

啟動開發伺服器：

```sh
npm run dev
```

在瀏覽器開啟：

```txt
http://localhost:3000/
```

建立正式版本：

```sh
npm run build
```

產生靜態網站：

```sh
npm run generate
```

## 頁面路徑

```txt
app/pages
├── index.vue                 首頁（/）
├── service.vue               服務項目（/service）
├── project.vue               專案作品（/project）
└── blog
    ├── index.vue             部落格列表（/blog）
    └── [blog].vue            單篇文章（/blog/:blog）
```

常用網址參數：

- `/service?service=graphic`：切換服務流程項目
- `/project?tag=網頁設計`：篩選專案作品標籤
- `/blog?tag=UIUX+設計`：篩選部落格文章標籤

## 專案結構

```txt
app
├── components
│   ├── Atom                  基礎元件，例如按鈕
│   ├── Common                可跨頁共用的卡片與 fallback
│   ├── Layout                版面區塊，例如 Banner、Modal、Subscription
│   └── content               Nuxt Content 文章用元件
├── data                      服務與專案共用資料
├── pages                     頁面路由
└── utils                     SEO 與共用工具
```

```txt
content
└── blog                      Nuxt Content 文章 Markdown
```

```txt
public
├── favicon.ico
├── thumbnail.webp
└── img                       網站圖片與 OG 圖片
```

## 發布新文章

所有文章放在 `content/blog`，檔名會成為文章網址。例如：

```txt
content/blog/my-new-article.md
```

對應網址會是：

```txt
/blog/my-new-article
```

文章 frontmatter 需要包含以下欄位：

```md
---
title: 新文章標題
description: 文章摘要，會用於 SEO description 與文章列表
date: 2026-01-01
tags:
  - UIUX 設計
  - 前端技術
image: /img/blog/blog_1.webp
views: 110
shares: 2
---
```

文章圖片建議放在 `public/img/blog`，並用絕對路徑引用：

```md
![圖片替代文字](/img/blog/blog_content_1.webp)
```

如果要使用客製化圖文區塊，可使用 `app/components/content/BlogFigure.vue`：

```txt
::blog-figure
---
src: /img/blog/blog_content_1.webp
alt: 圖片替代文字
caption: 圖片說明文字
---
::
```

新增 Markdown 後不需要手動修改 `nuxt.config.ts`。專案會自動讀取 `content/blog/*.md` 並產生對應的部落格預渲染路由。

## 新增服務項目

服務資料集中在 `app/data/services.js`。新增服務時請補上：

- `key`：網址參數使用，例如 `graphic`
- `eyebrow`：英文小標
- `title`：服務名稱
- `summary`：首頁服務卡片摘要
- `iconPath`：SVG path
- `steps`：服務流程四個步驟

首頁服務卡片與服務頁流程都會從這份資料取用；如果要從其他頁面連到特定服務，只要帶上 `service` 參數即可：

```txt
/service?service=frontend
```

## 新增專案作品

專案資料集中在 `app/data/projects.js`。新增專案時請補上：

- `id`
- `images.mobile`
- `images.desktop`
- `datetime`
- `date`
- `tags`
- `title`
- `description`

圖片建議放在：

```txt
public/img/project/mobile
public/img/project/desktop
```

首頁目前會取前三筆專案資料，專案列表頁會顯示全部專案並依 `tags` 篩選。

## 表單與社群連結

頁尾聯絡表單與訂閱表單目前是前端展示用，使用 `@submit.prevent` 阻止預設送出，尚未串接後端或第三方表單服務。若要正式使用，可選擇：

- 建立 Nuxt server route 串接 Email 或資料庫
- 串接 Formspree、Netlify Forms 等表單服務
- 串接自有 API

頁尾社群連結中部分網址目前是 `#` 佔位，公開使用前請替換成自己的 Instagram、LINE、LinkedIn 或 GitHub 連結。

## 部署

若部署到 Vercel、Cloudflare Pages 等平台，可以依平台需求選擇：

```sh
npm run build
```

或：

```sh
npm run generate
```

此專案預設部署在網域根目錄。如果部署到 GitHub Pages 子路徑，可透過環境變數設定 base URL：

```sh
NUXT_APP_BASE_URL=/your-repo-name/
```

## 備註

- `nuxt.config.ts` 的 Nuxt DevTools 僅在開發環境啟用。
- Markdown 文章已加入 `.prettierignore`，避免 MDC 區塊被格式化後無法正確渲染。
- 網站已設定 `zh-Hant-TW` 語系、頁面 title、description 與 OG image。
