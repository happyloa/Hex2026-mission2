<template>
  <!-- 麵包屑 -->
  <nav class="bg-primary px-3 py-2 md:py-3">
    <div
      class="mx-auto flex max-w-[1296px] flex-wrap items-center gap-1 text-label-small text-neutral-0 md:gap-2 md:text-label-medium"
    >
      <NuxtLink to="/">首頁</NuxtLink>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="currentColor"
        class="size-5 md:size-6"
      >
        <path d="m549.69-480-189-189L384-692.31 596.31-480 384-267.69 360.69-291z" />
      </svg>
      <NuxtLink to="/blog">部落格</NuxtLink>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="currentColor"
        class="size-5 md:size-6"
      >
        <path d="m549.69-480-189-189L384-692.31 596.31-480 384-267.69 360.69-291z" />
      </svg>
      <span>部落格標題</span>
    </div>
  </nav>
  <!-- 單篇文章正文區塊 -->
  <main class="px-3 py-10 md:py-20">
    <article class="mx-auto max-w-[1076px] text-paragraph-small md:text-paragraph-medium">
      <!-- 文章 meta，標籤與日期 -->
      <div class="mb-2 flex flex-wrap justify-between gap-2 lg:mb-4">
        <ul
          class="flex flex-wrap [&>li:not(:last-child)::after]:mx-0.5 [&>li:not(:last-child)::after]:content-['·'] md:[&>li:not(:last-child)::after]:mx-1"
        >
          <li>UIUX 設計</li>
          <li>前端技術</li>
          <li>AI 趨勢應用</li>
        </ul>
        <time datetime="2022-10-16">Oct 16, 2022</time>
      </div>
      <!-- 標題 -->
      <h1 class="mb-2 text-heading-medium lg:mb-4 lg:text-heading-xx-large">
        當 AI 遇上介面設計：資深設計師如何利用生成式工具重塑前端開發工作流與視覺想像力
      </h1>
      <!-- 摘要 -->
      <h2 class="mb-2 text-heading-xx-small lg:mb-4 lg:text-heading-small">
        從像素到程式碼，探討 AI 如何成為數位職人的最強外掛，在美學與邏輯的交界處創造全新價值。
      </h2>
      <p class="mb-7 lg:mb-10">
        在跨入 UI/UX 與前端領域的第十年，我見證了無數技術更迭，但 AI
        的出現無疑是最具衝擊性的一場革命。本文將深度解析資深設計師如何將生成式 AI
        整合進現有工作流，透過 AI
        釋放視覺想像力，並利用智慧化工具優化前端開發效率，實踐美學與技術的完美共生。
      </p>
      <!-- 正文 -->
      <h2 class="mb-2 text-heading-small lg:mb-4 lg:text-heading-large">
        視覺想像力的無限延伸：從 Moodboard 到驚艷視覺
      </h2>
      <p class="mb-7 lg:mb-10">
        以往在發想專案視覺風格時，往往受限於素材搜尋的耗時或手繪草圖的限制。現在，透過 Midjourney 或
        DALL-E
        等工具，我能在幾分鐘內產出數十種具備極致美感的配色方案與佈局可能性。這並非取代設計師的審美，而是將我們從繁瑣的執行工作中解放，轉而擔任「視覺策展人」的角色，從龐大的
        AI 提案中精煉出最契合品牌魂魄的視覺語言。
      </p>
      <figure class="mb-5 lg:mb-6">
        <img
          src="/img/blog/blog_content_1.webp"
          alt="利用 AI 快速生成的品牌視覺概念圖，能有效縮短與客戶在初期的溝通成本。"
          class="mb-2 block lg:mb-4"
        />
        <figcaption>
          利用 AI 快速生成的品牌視覺概念圖，能有效縮短與客戶在初期的溝通成本。
        </figcaption>
      </figure>
      <blockquote class="mb-7 space-y-2 bg-primary-50 p-4 text-center lg:mb-10 lg:p-6">
        <span>我認為</span>
        <p class="text-heading-xxx-small lg:text-heading-x-small">
          AI 不會取代設計師，但那些懂得與 AI 協作的人，將會定義下一個世代的設計標準
        </p>
      </blockquote>
      <h2 class="mb-2 text-heading-small lg:mb-4 lg:text-heading-large">
        工作流的重塑：當設計稿與程式碼無縫銜接
      </h2>
      <p class="mb-7 lg:mb-10">
        身為前端工程師，最挑戰的環節往往是將精美的設計稿「精準轉譯」為流暢的程式碼。AI
        的介入讓這個轉譯過程變得前所未有的流暢。無論是自動產生複雜的 CSS 佈局、建構 React
        元件邏輯，還是優化響應式斷點，AI
        就像是一位全天候待命的技術助理，讓我們能將精力集中在更高維度的互動體驗設計與產品效能優化。
      </p>
      <figure class="mb-5 lg:mb-6">
        <img
          src="/img/blog/blog_content_2.webp"
          alt="AI 輔助生成的 Clean Code 結構，顯著提升開發整潔度。"
          class="mb-2 block lg:mb-4"
        />
        <figcaption>AI 輔助生成的 Clean Code 結構，顯著提升開發整潔度。</figcaption>
      </figure>
      <h2 class="mb-2 text-heading-small lg:mb-4 lg:text-heading-large">
        跨領域利器：精選 AI 工具的實戰應用對比
      </h2>
      <p class="mb-7 lg:mb-10">
        在數位職人的工具箱中，選擇正確的武器至關重要。為了讓大家在開發與設計的混合戰場中更具效率，我整理了一份實戰應用對比表。這份表格不僅是基於工具的功能，更是從我這十年的實務經驗出發，評估各項工具在實際專案中的落地價值與學習門檻，協助你快速找到最適合自己的
        AI 隊友。
      </p>
      <h2 class="mb-2 text-heading-xx-small lg:mb-4 lg:text-heading-small">
        2026 數位職人必備 AI 工具效能對比表
      </h2>
      <table class="mb-5 w-full table-fixed border-collapse lg:mb-6">
        <thead class="bg-primary text-heading-xxxx-small text-neutral-0 lg:text-heading-xxx-small">
          <tr>
            <th class="border border-neutral-500 px-3 py-2 text-left lg:px-6 lg:py-3">工具名稱</th>
            <th class="border border-neutral-500 px-3 py-2 text-left lg:px-6 lg:py-3">應用範疇</th>
            <th class="border border-neutral-500 px-3 py-2 text-left lg:px-6 lg:py-3">核心優勢</th>
            <th class="border border-neutral-500 px-3 py-2 text-left lg:px-6 lg:py-3">學習曲線</th>
          </tr>
        </thead>
        <tbody class="break-all bg-primary-50 text-primary">
          <tr>
            <td class="border border-neutral-500 px-3 py-2 align-middle lg:px-6 lg:py-3">
              Midjourney
            </td>
            <td class="border border-neutral-500 px-3 py-2 align-middle lg:px-6 lg:py-3">
              視覺構思
            </td>
            <td class="border border-neutral-500 px-3 py-2 align-middle lg:px-6 lg:py-3">
              創意發想極致，適合風格探索與氛圍圖生成
            </td>
            <td class="border border-neutral-500 px-3 py-2 align-middle lg:px-6 lg:py-3">中高</td>
          </tr>
          <tr>
            <td class="border border-neutral-500 px-3 py-2 align-middle lg:px-6 lg:py-3">
              Figma AI
            </td>
            <td class="border border-neutral-500 px-3 py-2 align-middle lg:px-6 lg:py-3">
              UI 設計
            </td>
            <td class="border border-neutral-500 px-3 py-2 align-middle lg:px-6 lg:py-3">
              直接整合於設計稿，快速生成組件與圖表
            </td>
            <td class="border border-neutral-500 px-3 py-2 align-middle lg:px-6 lg:py-3">低</td>
          </tr>
          <tr>
            <td class="border border-neutral-500 px-3 py-2 align-middle lg:px-6 lg:py-3">
              GitHub Copilot
            </td>
            <td class="border border-neutral-500 px-3 py-2 align-middle lg:px-6 lg:py-3">
              程式開發
            </td>
            <td class="border border-neutral-500 px-3 py-2 align-middle lg:px-6 lg:py-3">
              邏輯代碼預測準確，減少重複性標籤撰寫
            </td>
            <td class="border border-neutral-500 px-3 py-2 align-middle lg:px-6 lg:py-3">中</td>
          </tr>
          <tr>
            <td class="border border-neutral-500 px-3 py-2 align-middle lg:px-6 lg:py-3">Claude</td>
            <td class="border border-neutral-500 px-3 py-2 align-middle lg:px-6 lg:py-3">
              程式邏輯
            </td>
            <td class="border border-neutral-500 px-3 py-2 align-middle lg:px-6 lg:py-3">
              具備強大文脈理解力，能優化複雜的用戶流程
            </td>
            <td class="border border-neutral-500 px-3 py-2 align-middle lg:px-6 lg:py-3">中</td>
          </tr>
        </tbody>
      </table>
      <hr class="mb-2 border-neutral-500 lg:mb-4" />
      <p class="mb-5 lg:mb-6">
        AI
        的崛起並非數位職涯的終點，而是另一個高峰的起點。對於喜歡把美學與程式結合的我們來說，這是一個最好的時代。AI
        給了我們更強大的雙翼，讓我們能飛得更高、看見更遠的設計地平線。保持好奇心，持續優化你的
        Prompt，讓技術為藝術服務，創造出更多令人驚艷的作品。
      </p>
      <!-- 觀看數、分享數、社群分享 -->
      <div class="flex flex-col items-end gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div class="flex flex-wrap gap-3">
          <span class="flex items-center gap-1 lg:gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="#404040"
              class="size-5 lg:size-6"
            >
              <path
                d="M587.08-373.01q44-44.09 44-107.08 0-62.99-44.09-106.99-44.09-44-107.08-44-62.99 0-106.99 44.09-44 44.09-44 107.08 0 62.99 44.09 106.99 44.09 44 107.08 44 62.99 0 106.99-44.09ZM412-412q-28-28-28-68t28-68q28-28 68-28t68 28q28 28 28 68t-28 68q-28 28-68 28t-68-28ZM234.62-285.12Q124.16-358.23 69.54-480q54.62-121.77 165.02-194.88Q344.97-748 479.95-748q134.97 0 245.43 73.12Q835.84-601.77 890.46-480q-54.62 121.77-165.02 194.88Q615.03-212 480.05-212q-134.97 0-245.43-73.12ZM480-480Zm207 158q95-58 146-158-51-100-146-158t-207-58q-112 0-207 58T127-480q51 100 146 158t207 58q112 0 207-58Z"
              />
            </svg>
            110 views</span
          >
          <span class="flex items-center gap-1 lg:gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="#404040"
              class="size-5 lg:size-6"
            >
              <path
                d="M640.22-116q-44.91 0-76.26-31.41-31.34-31.41-31.34-76.28 0-9 5.15-30.16L297.31-402.31q-14.46 14-33.41 22-18.94 8-40.59 8-44.71 0-76.01-31.54Q116-435.39 116-480q0-44.61 31.3-76.15 31.3-31.54 76.01-31.54 21.74 0 40.64 8 18.9 8 33.36 22l240.46-148.08q-2.38-7.38-3.77-14.77-1.38-7.39-1.38-15.77 0-44.87 31.43-76.28Q595.49-844 640.4-844t76.25 31.44Q748-781.13 748-736.22q0 44.91-31.41 76.26-31.41 31.34-76.28 31.34-21.85 0-40.5-8.19Q581.15-645 566.69-659L326.23-510.54q2.38 7.39 3.77 14.77 1.38 7.39 1.38 15.77 0 8.38-1.38 15.77-1.39 7.38-3.77 14.77L566.69-301q14.46-14 33.16-22.19 18.7-8.19 40.46-8.19 44.87 0 76.28 31.43Q748-268.51 748-223.6t-31.44 76.25Q685.13-116 640.22-116Zm.09-52q23.67 0 39.68-16.01Q696-200.02 696-223.69q0-23.67-16.01-39.68-16.01-16.02-39.68-16.02-23.67 0-39.68 16.02-16.02 16.01-16.02 39.68 0 23.67 16.02 39.68Q616.64-168 640.31-168Zm-417-256.31q23.83 0 39.95-16.3 16.13-16.31 16.13-39.39 0-23.08-16.13-39.39-16.12-16.3-39.95-16.3-23.51 0-39.41 16.3Q168-503.08 168-480q0 23.08 15.9 39.39 15.9 16.3 39.41 16.3Zm456.38-272.32Q696-712.64 696-736.31q0-23.67-16.01-39.68Q663.98-792 640.31-792q-23.67 0-39.68 16.01-16.02 16.01-16.02 39.68 0 23.67 16.31 39.68 16.31 16.02 39.39 16.02 23.07 0 39.38-16.02Zm-39.38 472.94ZM223.69-480Zm416.62-256.31Z"
              />
            </svg>
            2 shares</span
          >
        </div>
        <div class="flex items-center gap-3 lg:gap-4">
          <span>分享</span>
          <ul class="flex gap-3 lg:gap-4">
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="flex size-11 items-center justify-center rounded-full border border-neutral-700 text-neutral-700 transition hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-0 lg:size-12"
                aria-label="分享"
              >
                <Icon name="lucide:share-2" class="size-4 lg:size-5" />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="flex size-11 items-center justify-center rounded-full border border-neutral-700 text-neutral-700 transition hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-0 lg:size-12"
                aria-label="分享到 Instagram"
              >
                <Icon name="lucide:instagram" class="size-4 lg:size-5" />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="flex size-11 items-center justify-center rounded-full border border-neutral-700 text-neutral-700 transition hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-0 lg:size-12"
                aria-label="分享到 LINE"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  class="size-5 lg:size-6"
                >
                  <path
                    fill="currentColor"
                    d="M12 3.75c-4.97 0-9 3.25-9 7.25 0 3.52 3.12 6.46 7.26 7.12.28.06.48.31.45.59l-.18 1.72c-.04.42.42.71.77.48l2.64-1.73c.16-.1.34-.16.53-.17C18.68 18.1 21 14.84 21 11c0-4-4.03-7.25-9-7.25Z"
                  />
                  <text
                    x="12"
                    y="13.35"
                    fill="#fff"
                    font-family="Arial, Helvetica, sans-serif"
                    font-size="5.7"
                    font-weight="700"
                    letter-spacing="-0.25"
                    text-anchor="middle"
                  >
                    LINE
                  </text>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </article>
  </main>
</template>
