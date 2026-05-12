<template>
  <LayoutBanner
    title="部落格"
    heading="BLOGS"
    mobile-image="/img/blog/mobile/blog_banner.webp"
    desktop-image="/img/blog/desktop/blog_banner.webp"
    decoration-text="BLOG"
    show-decoration
  />
  <section class="px-3 py-10 md:py-20">
    <div class="mx-auto flex max-w-[1296px] flex-col gap-6 md:flex-row md:gap-10">
      <aside class="top-20 md:sticky md:w-[180px] md:self-start">
        <nav>
          <ul
            class="flex overflow-x-auto whitespace-nowrap text-center text-heading-xxx-small [scrollbar-width:none] md:flex-col md:text-heading-xx-small [&::-webkit-scrollbar]:hidden"
          >
            <li>
              <button
                type="button"
                class="w-full px-3 py-2 transition hover:bg-primary hover:text-neutral-0 md:py-3"
              >
                全部
              </button>
            </li>
            <li>
              <button
                type="button"
                class="w-full px-3 py-2 transition hover:bg-primary hover:text-neutral-0 md:py-3"
              >
                品牌設計
              </button>
            </li>
            <li>
              <button
                type="button"
                class="w-full px-3 py-2 transition hover:bg-primary hover:text-neutral-0 md:py-3"
              >
                平面設計
              </button>
            </li>
            <li>
              <button
                type="button"
                class="w-full px-3 py-2 transition hover:bg-primary hover:text-neutral-0 md:py-3"
              >
                UIUX 設計
              </button>
            </li>
            <li>
              <button
                type="button"
                class="w-full px-3 py-2 transition hover:bg-primary hover:text-neutral-0 md:py-3"
              >
                網頁設計
              </button>
            </li>
            <li>
              <button
                type="button"
                class="w-full px-3 py-2 transition hover:bg-primary hover:text-neutral-0 md:py-3"
              >
                設計規範
              </button>
            </li>
            <li>
              <button
                type="button"
                class="w-full px-3 py-2 transition hover:bg-primary hover:text-neutral-0 md:py-3"
              >
                前端技術
              </button>
            </li>
            <li>
              <button
                type="button"
                class="w-full px-3 py-2 transition hover:bg-primary hover:text-neutral-0 md:py-3"
              >
                後端架構
              </button>
            </li>
            <li>
              <button
                type="button"
                class="w-full px-3 py-2 transition hover:bg-primary hover:text-neutral-0 md:py-3"
              >
                AI 趨勢應用
              </button>
            </li>
          </ul>
        </nav>
      </aside>
      <main class="flex-1 space-y-20">
        <ul class="space-y-6">
          <!-- 文章1 -->
          <li>
            <NuxtLink to="/blog/design">
              <article class="flex flex-col gap-2 md:items-center md:gap-6 lg:flex-row">
                <img
                  src="/img/blog/blog_1.webp"
                  alt="網頁裡的微互動藝術：利用 CSS 與 JS 動畫為諮詢網站注入靈魂並提升用戶轉化率"
                  class="h-[200px] w-full object-cover lg:h-[256px] lg:max-w-[526px]"
                />
                <div class="space-y-2 md:space-y-3">
                  <!-- 文章標籤 -->
                  <ul
                    class="flex flex-wrap text-paragraph-small md:text-paragraph-medium [&>li:not(:last-child)::after]:mx-0.5 [&>li:not(:last-child)::after]:content-['·'] md:[&>li:not(:last-child)::after]:mx-1"
                  >
                    <li>UIUX 設計</li>
                    <li>網頁設計</li>
                    <li>前端技術</li>
                  </ul>
                  <!-- 標題 -->
                  <h2 class="text-heading-x-small md:text-heading-small">
                    網頁裡的微互動藝術：利用 CSS 與 JS 動畫為諮詢網站注入靈魂並提升用戶轉化率
                  </h2>
                  <!-- meta -->
                  <div
                    class="flex flex-wrap justify-between gap-2 whitespace-nowrap text-paragraph-x-small md:gap-6 md:text-paragraph-small"
                  >
                    <time datetime="2022-10-16">Oct 16, 2022</time>
                    <!-- 觀看數與分享數 -->
                    <div class="flex flex-wrap gap-2 md:gap-3">
                      <span class="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20px"
                          viewBox="0 -960 960 960"
                          width="20px"
                          fill="#404040"
                        >
                          <path
                            d="M587.08-373.01q44-44.09 44-107.08 0-62.99-44.09-106.99-44.09-44-107.08-44-62.99 0-106.99 44.09-44 44.09-44 107.08 0 62.99 44.09 106.99 44.09 44 107.08 44 62.99 0 106.99-44.09ZM412-412q-28-28-28-68t28-68q28-28 68-28t68 28q28 28 28 68t-28 68q-28 28-68 28t-68-28ZM234.62-285.12Q124.16-358.23 69.54-480q54.62-121.77 165.02-194.88Q344.97-748 479.95-748q134.97 0 245.43 73.12Q835.84-601.77 890.46-480q-54.62 121.77-165.02 194.88Q615.03-212 480.05-212q-134.97 0-245.43-73.12ZM480-480Zm207 158q95-58 146-158-51-100-146-158t-207-58q-112 0-207 58T127-480q51 100 146 158t207 58q112 0 207-58Z"
                          />
                        </svg>
                        110 views</span
                      >
                      <span class="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20px"
                          viewBox="0 -960 960 960"
                          width="20px"
                          fill="#404040"
                        >
                          <path
                            d="M640.22-116q-44.91 0-76.26-31.41-31.34-31.41-31.34-76.28 0-9 5.15-30.16L297.31-402.31q-14.46 14-33.41 22-18.94 8-40.59 8-44.71 0-76.01-31.54Q116-435.39 116-480q0-44.61 31.3-76.15 31.3-31.54 76.01-31.54 21.74 0 40.64 8 18.9 8 33.36 22l240.46-148.08q-2.38-7.38-3.77-14.77-1.38-7.39-1.38-15.77 0-44.87 31.43-76.28Q595.49-844 640.4-844t76.25 31.44Q748-781.13 748-736.22q0 44.91-31.41 76.26-31.41 31.34-76.28 31.34-21.85 0-40.5-8.19Q581.15-645 566.69-659L326.23-510.54q2.38 7.39 3.77 14.77 1.38 7.39 1.38 15.77 0 8.38-1.38 15.77-1.39 7.38-3.77 14.77L566.69-301q14.46-14 33.16-22.19 18.7-8.19 40.46-8.19 44.87 0 76.28 31.43Q748-268.51 748-223.6t-31.44 76.25Q685.13-116 640.22-116Zm.09-52q23.67 0 39.68-16.01Q696-200.02 696-223.69q0-23.67-16.01-39.68-16.01-16.02-39.68-16.02-23.67 0-39.68 16.02-16.02 16.01-16.02 39.68 0 23.67 16.02 39.68Q616.64-168 640.31-168Zm-417-256.31q23.83 0 39.95-16.3 16.13-16.31 16.13-39.39 0-23.08-16.13-39.39-16.12-16.3-39.95-16.3-23.51 0-39.41 16.3Q168-503.08 168-480q0 23.08 15.9 39.39 15.9 16.3 39.41 16.3Zm456.38-272.32Q696-712.64 696-736.31q0-23.67-16.01-39.68Q663.98-792 640.31-792q-23.67 0-39.68 16.01-16.02 16.01-16.02 39.68 0 23.67 16.31 39.68 16.31 16.02 39.39 16.02 23.07 0 39.38-16.02Zm-39.38 472.94ZM223.69-480Zm416.62-256.31Z"
                          />
                        </svg>
                        2 shares</span
                      >
                    </div>
                  </div>
                </div>
              </article>
            </NuxtLink>
          </li>
          <!-- 文章2 -->
          <li>
            <NuxtLink to="/blog/design">
              <article class="flex flex-col gap-2 md:items-center md:gap-6 lg:flex-row">
                <img
                  src="/img/blog/blog_2.webp"
                  alt="10年職人手記：如何運用 Figma 與 Storybook 打造美感與邏輯兼具的企業級設計系統"
                  class="h-[200px] w-full object-cover lg:h-[256px] lg:max-w-[526px]"
                />
                <div class="space-y-2 md:space-y-3">
                  <!-- 文章標籤 -->
                  <ul
                    class="flex flex-wrap text-paragraph-small md:text-paragraph-medium [&>li:not(:last-child)::after]:mx-0.5 [&>li:not(:last-child)::after]:content-['·'] md:[&>li:not(:last-child)::after]:mx-1"
                  >
                    <li>UIUX 設計</li>
                    <li>設計規範</li>
                    <li>前端技術</li>
                  </ul>
                  <!-- 標題 -->
                  <h2 class="text-heading-x-small md:text-heading-small">
                    10年職人手記：如何運用 Figma 與 Storybook 打造美感與邏輯兼具的企業級設計系統
                  </h2>
                  <!-- meta -->
                  <div
                    class="flex flex-wrap justify-between gap-2 whitespace-nowrap text-paragraph-x-small md:gap-6 md:text-paragraph-small"
                  >
                    <time datetime="2022-10-16">Oct 16, 2022</time>
                    <!-- 觀看數與分享數 -->
                    <div class="flex flex-wrap gap-2 md:gap-3">
                      <span class="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20px"
                          viewBox="0 -960 960 960"
                          width="20px"
                          fill="#404040"
                        >
                          <path
                            d="M587.08-373.01q44-44.09 44-107.08 0-62.99-44.09-106.99-44.09-44-107.08-44-62.99 0-106.99 44.09-44 44.09-44 107.08 0 62.99 44.09 106.99 44.09 44 107.08 44 62.99 0 106.99-44.09ZM412-412q-28-28-28-68t28-68q28-28 68-28t68 28q28 28 28 68t-28 68q-28 28-68 28t-68-28ZM234.62-285.12Q124.16-358.23 69.54-480q54.62-121.77 165.02-194.88Q344.97-748 479.95-748q134.97 0 245.43 73.12Q835.84-601.77 890.46-480q-54.62 121.77-165.02 194.88Q615.03-212 480.05-212q-134.97 0-245.43-73.12ZM480-480Zm207 158q95-58 146-158-51-100-146-158t-207-58q-112 0-207 58T127-480q51 100 146 158t207 58q112 0 207-58Z"
                          />
                        </svg>
                        110 views</span
                      >
                      <span class="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20px"
                          viewBox="0 -960 960 960"
                          width="20px"
                          fill="#404040"
                        >
                          <path
                            d="M640.22-116q-44.91 0-76.26-31.41-31.34-31.41-31.34-76.28 0-9 5.15-30.16L297.31-402.31q-14.46 14-33.41 22-18.94 8-40.59 8-44.71 0-76.01-31.54Q116-435.39 116-480q0-44.61 31.3-76.15 31.3-31.54 76.01-31.54 21.74 0 40.64 8 18.9 8 33.36 22l240.46-148.08q-2.38-7.38-3.77-14.77-1.38-7.39-1.38-15.77 0-44.87 31.43-76.28Q595.49-844 640.4-844t76.25 31.44Q748-781.13 748-736.22q0 44.91-31.41 76.26-31.41 31.34-76.28 31.34-21.85 0-40.5-8.19Q581.15-645 566.69-659L326.23-510.54q2.38 7.39 3.77 14.77 1.38 7.39 1.38 15.77 0 8.38-1.38 15.77-1.39 7.38-3.77 14.77L566.69-301q14.46-14 33.16-22.19 18.7-8.19 40.46-8.19 44.87 0 76.28 31.43Q748-268.51 748-223.6t-31.44 76.25Q685.13-116 640.22-116Zm.09-52q23.67 0 39.68-16.01Q696-200.02 696-223.69q0-23.67-16.01-39.68-16.01-16.02-39.68-16.02-23.67 0-39.68 16.02-16.02 16.01-16.02 39.68 0 23.67 16.02 39.68Q616.64-168 640.31-168Zm-417-256.31q23.83 0 39.95-16.3 16.13-16.31 16.13-39.39 0-23.08-16.13-39.39-16.12-16.3-39.95-16.3-23.51 0-39.41 16.3Q168-503.08 168-480q0 23.08 15.9 39.39 15.9 16.3 39.41 16.3Zm456.38-272.32Q696-712.64 696-736.31q0-23.67-16.01-39.68Q663.98-792 640.31-792q-23.67 0-39.68 16.01-16.02 16.01-16.02 39.68 0 23.67 16.31 39.68 16.31 16.02 39.39 16.02 23.07 0 39.38-16.02Zm-39.38 472.94ZM223.69-480Zm416.62-256.31Z"
                          />
                        </svg>
                        2 shares</span
                      >
                    </div>
                  </div>
                </div>
              </article>
            </NuxtLink>
          </li>
          <!-- 文章3 -->
          <li>
            <NuxtLink to="/blog/design">
              <article class="flex flex-col gap-2 md:items-center md:gap-6 lg:flex-row">
                <img
                  src="/img/blog/blog_3.webp"
                  alt="從平面識別到數位體驗：以「植感生活」為例，探討跨媒體品牌視覺在網頁上的精準轉譯"
                  class="h-[200px] w-full object-cover lg:h-[256px] lg:max-w-[526px]"
                />
                <div class="space-y-2 md:space-y-3">
                  <!-- 文章標籤 -->
                  <ul
                    class="flex flex-wrap text-paragraph-small md:text-paragraph-medium [&>li:not(:last-child)::after]:mx-0.5 [&>li:not(:last-child)::after]:content-['·'] md:[&>li:not(:last-child)::after]:mx-1"
                  >
                    <li>品牌設計</li>
                    <li>平面設計</li>
                    <li>UIUX 設計</li>
                  </ul>
                  <!-- 標題 -->
                  <h2 class="text-heading-x-small md:text-heading-small">
                    從平面識別到數位體驗：以「植感生活」為例，探討跨媒體品牌視覺在網頁上的精準轉譯
                  </h2>
                  <!-- meta -->
                  <div
                    class="flex flex-wrap justify-between gap-2 whitespace-nowrap text-paragraph-x-small md:gap-6 md:text-paragraph-small"
                  >
                    <time datetime="2022-10-16">Oct 16, 2022</time>
                    <!-- 觀看數與分享數 -->
                    <div class="flex flex-wrap gap-2 md:gap-3">
                      <span class="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20px"
                          viewBox="0 -960 960 960"
                          width="20px"
                          fill="#404040"
                        >
                          <path
                            d="M587.08-373.01q44-44.09 44-107.08 0-62.99-44.09-106.99-44.09-44-107.08-44-62.99 0-106.99 44.09-44 44.09-44 107.08 0 62.99 44.09 106.99 44.09 44 107.08 44 62.99 0 106.99-44.09ZM412-412q-28-28-28-68t28-68q28-28 68-28t68 28q28 28 28 68t-28 68q-28 28-68 28t-68-28ZM234.62-285.12Q124.16-358.23 69.54-480q54.62-121.77 165.02-194.88Q344.97-748 479.95-748q134.97 0 245.43 73.12Q835.84-601.77 890.46-480q-54.62 121.77-165.02 194.88Q615.03-212 480.05-212q-134.97 0-245.43-73.12ZM480-480Zm207 158q95-58 146-158-51-100-146-158t-207-58q-112 0-207 58T127-480q51 100 146 158t207 58q112 0 207-58Z"
                          />
                        </svg>
                        110 views</span
                      >
                      <span class="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20px"
                          viewBox="0 -960 960 960"
                          width="20px"
                          fill="#404040"
                        >
                          <path
                            d="M640.22-116q-44.91 0-76.26-31.41-31.34-31.41-31.34-76.28 0-9 5.15-30.16L297.31-402.31q-14.46 14-33.41 22-18.94 8-40.59 8-44.71 0-76.01-31.54Q116-435.39 116-480q0-44.61 31.3-76.15 31.3-31.54 76.01-31.54 21.74 0 40.64 8 18.9 8 33.36 22l240.46-148.08q-2.38-7.38-3.77-14.77-1.38-7.39-1.38-15.77 0-44.87 31.43-76.28Q595.49-844 640.4-844t76.25 31.44Q748-781.13 748-736.22q0 44.91-31.41 76.26-31.41 31.34-76.28 31.34-21.85 0-40.5-8.19Q581.15-645 566.69-659L326.23-510.54q2.38 7.39 3.77 14.77 1.38 7.39 1.38 15.77 0 8.38-1.38 15.77-1.39 7.38-3.77 14.77L566.69-301q14.46-14 33.16-22.19 18.7-8.19 40.46-8.19 44.87 0 76.28 31.43Q748-268.51 748-223.6t-31.44 76.25Q685.13-116 640.22-116Zm.09-52q23.67 0 39.68-16.01Q696-200.02 696-223.69q0-23.67-16.01-39.68-16.01-16.02-39.68-16.02-23.67 0-39.68 16.02-16.02 16.01-16.02 39.68 0 23.67 16.02 39.68Q616.64-168 640.31-168Zm-417-256.31q23.83 0 39.95-16.3 16.13-16.31 16.13-39.39 0-23.08-16.13-39.39-16.12-16.3-39.95-16.3-23.51 0-39.41 16.3Q168-503.08 168-480q0 23.08 15.9 39.39 15.9 16.3 39.41 16.3Zm456.38-272.32Q696-712.64 696-736.31q0-23.67-16.01-39.68Q663.98-792 640.31-792q-23.67 0-39.68 16.01-16.02 16.01-16.02 39.68 0 23.67 16.31 39.68 16.31 16.02 39.39 16.02 23.07 0 39.38-16.02Zm-39.38 472.94ZM223.69-480Zm416.62-256.31Z"
                          />
                        </svg>
                        2 shares</span
                      >
                    </div>
                  </div>
                </div>
              </article>
            </NuxtLink>
          </li>
          <!-- 文章4 -->
          <li>
            <NuxtLink to="/blog/design">
              <article class="flex flex-col gap-2 md:items-center md:gap-6 lg:flex-row">
                <img
                  src="/img/blog/blog_4.webp"
                  alt="當 AI 遇上介面設計：資深設計師如何利用生成式工具重塑前端開發工作流與視覺想像力"
                  class="h-[200px] w-full object-cover lg:h-[256px] lg:max-w-[526px]"
                />
                <div class="space-y-2 md:space-y-3">
                  <!-- 文章標籤 -->
                  <ul
                    class="flex flex-wrap text-paragraph-small md:text-paragraph-medium [&>li:not(:last-child)::after]:mx-0.5 [&>li:not(:last-child)::after]:content-['·'] md:[&>li:not(:last-child)::after]:mx-1"
                  >
                    <li>UIUX 設計</li>
                    <li>前端技術</li>
                    <li>AI 趨勢應用</li>
                  </ul>
                  <!-- 標題 -->
                  <h2 class="text-heading-x-small md:text-heading-small">
                    當 AI 遇上介面設計：資深設計師如何利用生成式工具重塑前端開發工作流與視覺想像力
                  </h2>
                  <!-- meta -->
                  <div
                    class="flex flex-wrap justify-between gap-2 whitespace-nowrap text-paragraph-x-small md:gap-6 md:text-paragraph-small"
                  >
                    <time datetime="2022-10-16">Oct 16, 2022</time>
                    <!-- 觀看數與分享數 -->
                    <div class="flex flex-wrap gap-2 md:gap-3">
                      <span class="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20px"
                          viewBox="0 -960 960 960"
                          width="20px"
                          fill="#404040"
                        >
                          <path
                            d="M587.08-373.01q44-44.09 44-107.08 0-62.99-44.09-106.99-44.09-44-107.08-44-62.99 0-106.99 44.09-44 44.09-44 107.08 0 62.99 44.09 106.99 44.09 44 107.08 44 62.99 0 106.99-44.09ZM412-412q-28-28-28-68t28-68q28-28 68-28t68 28q28 28 28 68t-28 68q-28 28-68 28t-68-28ZM234.62-285.12Q124.16-358.23 69.54-480q54.62-121.77 165.02-194.88Q344.97-748 479.95-748q134.97 0 245.43 73.12Q835.84-601.77 890.46-480q-54.62 121.77-165.02 194.88Q615.03-212 480.05-212q-134.97 0-245.43-73.12ZM480-480Zm207 158q95-58 146-158-51-100-146-158t-207-58q-112 0-207 58T127-480q51 100 146 158t207 58q112 0 207-58Z"
                          />
                        </svg>
                        110 views</span
                      >
                      <span class="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20px"
                          viewBox="0 -960 960 960"
                          width="20px"
                          fill="#404040"
                        >
                          <path
                            d="M640.22-116q-44.91 0-76.26-31.41-31.34-31.41-31.34-76.28 0-9 5.15-30.16L297.31-402.31q-14.46 14-33.41 22-18.94 8-40.59 8-44.71 0-76.01-31.54Q116-435.39 116-480q0-44.61 31.3-76.15 31.3-31.54 76.01-31.54 21.74 0 40.64 8 18.9 8 33.36 22l240.46-148.08q-2.38-7.38-3.77-14.77-1.38-7.39-1.38-15.77 0-44.87 31.43-76.28Q595.49-844 640.4-844t76.25 31.44Q748-781.13 748-736.22q0 44.91-31.41 76.26-31.41 31.34-76.28 31.34-21.85 0-40.5-8.19Q581.15-645 566.69-659L326.23-510.54q2.38 7.39 3.77 14.77 1.38 7.39 1.38 15.77 0 8.38-1.38 15.77-1.39 7.38-3.77 14.77L566.69-301q14.46-14 33.16-22.19 18.7-8.19 40.46-8.19 44.87 0 76.28 31.43Q748-268.51 748-223.6t-31.44 76.25Q685.13-116 640.22-116Zm.09-52q23.67 0 39.68-16.01Q696-200.02 696-223.69q0-23.67-16.01-39.68-16.01-16.02-39.68-16.02-23.67 0-39.68 16.02-16.02 16.01-16.02 39.68 0 23.67 16.02 39.68Q616.64-168 640.31-168Zm-417-256.31q23.83 0 39.95-16.3 16.13-16.31 16.13-39.39 0-23.08-16.13-39.39-16.12-16.3-39.95-16.3-23.51 0-39.41 16.3Q168-503.08 168-480q0 23.08 15.9 39.39 15.9 16.3 39.41 16.3Zm456.38-272.32Q696-712.64 696-736.31q0-23.67-16.01-39.68Q663.98-792 640.31-792q-23.67 0-39.68 16.01-16.02 16.01-16.02 39.68 0 23.67 16.31 39.68 16.31 16.02 39.39 16.02 23.07 0 39.38-16.02Zm-39.38 472.94ZM223.69-480Zm416.62-256.31Z"
                          />
                        </svg>
                        2 shares</span
                      >
                    </div>
                  </div>
                </div>
              </article>
            </NuxtLink>
          </li>
          <!-- 文章5 -->
          <li>
            <NuxtLink to="/blog/design">
              <article class="flex flex-col gap-2 md:items-center md:gap-6 lg:flex-row">
                <img
                  src="/img/blog/blog_5.webp"
                  alt="揭開金融 App 的設計密碼：如何優化 Open Bank API 的複雜數據呈現與後端串接安全性"
                  class="h-[200px] w-full object-cover lg:h-[256px] lg:max-w-[526px]"
                />
                <div class="space-y-2 md:space-y-3">
                  <!-- 文章標籤 -->
                  <ul
                    class="flex flex-wrap text-paragraph-small md:text-paragraph-medium [&>li:not(:last-child)::after]:mx-0.5 [&>li:not(:last-child)::after]:content-['·'] md:[&>li:not(:last-child)::after]:mx-1"
                  >
                    <li>前端技術</li>
                    <li>後端架構</li>
                    <li>AI 趨勢應用</li>
                  </ul>
                  <!-- 標題 -->
                  <h2 class="text-heading-x-small md:text-heading-small">
                    揭開金融 App 的設計密碼：如何優化 Open Bank API 的複雜數據呈現與後端串接安全性
                  </h2>
                  <!-- meta -->
                  <div
                    class="flex flex-wrap justify-between gap-2 whitespace-nowrap text-paragraph-x-small md:gap-6 md:text-paragraph-small"
                  >
                    <time datetime="2022-10-16">Oct 16, 2022</time>
                    <!-- 觀看數與分享數 -->
                    <div class="flex flex-wrap gap-2 md:gap-3">
                      <span class="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20px"
                          viewBox="0 -960 960 960"
                          width="20px"
                          fill="#404040"
                        >
                          <path
                            d="M587.08-373.01q44-44.09 44-107.08 0-62.99-44.09-106.99-44.09-44-107.08-44-62.99 0-106.99 44.09-44 44.09-44 107.08 0 62.99 44.09 106.99 44.09 44 107.08 44 62.99 0 106.99-44.09ZM412-412q-28-28-28-68t28-68q28-28 68-28t68 28q28 28 28 68t-28 68q-28 28-68 28t-68-28ZM234.62-285.12Q124.16-358.23 69.54-480q54.62-121.77 165.02-194.88Q344.97-748 479.95-748q134.97 0 245.43 73.12Q835.84-601.77 890.46-480q-54.62 121.77-165.02 194.88Q615.03-212 480.05-212q-134.97 0-245.43-73.12ZM480-480Zm207 158q95-58 146-158-51-100-146-158t-207-58q-112 0-207 58T127-480q51 100 146 158t207 58q112 0 207-58Z"
                          />
                        </svg>
                        110 views</span
                      >
                      <span class="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20px"
                          viewBox="0 -960 960 960"
                          width="20px"
                          fill="#404040"
                        >
                          <path
                            d="M640.22-116q-44.91 0-76.26-31.41-31.34-31.41-31.34-76.28 0-9 5.15-30.16L297.31-402.31q-14.46 14-33.41 22-18.94 8-40.59 8-44.71 0-76.01-31.54Q116-435.39 116-480q0-44.61 31.3-76.15 31.3-31.54 76.01-31.54 21.74 0 40.64 8 18.9 8 33.36 22l240.46-148.08q-2.38-7.38-3.77-14.77-1.38-7.39-1.38-15.77 0-44.87 31.43-76.28Q595.49-844 640.4-844t76.25 31.44Q748-781.13 748-736.22q0 44.91-31.41 76.26-31.41 31.34-76.28 31.34-21.85 0-40.5-8.19Q581.15-645 566.69-659L326.23-510.54q2.38 7.39 3.77 14.77 1.38 7.39 1.38 15.77 0 8.38-1.38 15.77-1.39 7.38-3.77 14.77L566.69-301q14.46-14 33.16-22.19 18.7-8.19 40.46-8.19 44.87 0 76.28 31.43Q748-268.51 748-223.6t-31.44 76.25Q685.13-116 640.22-116Zm.09-52q23.67 0 39.68-16.01Q696-200.02 696-223.69q0-23.67-16.01-39.68-16.01-16.02-39.68-16.02-23.67 0-39.68 16.02-16.02 16.01-16.02 39.68 0 23.67 16.02 39.68Q616.64-168 640.31-168Zm-417-256.31q23.83 0 39.95-16.3 16.13-16.31 16.13-39.39 0-23.08-16.13-39.39-16.12-16.3-39.95-16.3-23.51 0-39.41 16.3Q168-503.08 168-480q0 23.08 15.9 39.39 15.9 16.3 39.41 16.3Zm456.38-272.32Q696-712.64 696-736.31q0-23.67-16.01-39.68Q663.98-792 640.31-792q-23.67 0-39.68 16.01-16.02 16.01-16.02 39.68 0 23.67 16.31 39.68 16.31 16.02 39.39 16.02 23.07 0 39.38-16.02Zm-39.38 472.94ZM223.69-480Zm416.62-256.31Z"
                          />
                        </svg>
                        2 shares</span
                      >
                    </div>
                  </div>
                </div>
              </article>
            </NuxtLink>
          </li>
        </ul>
        <!-- 換頁按鈕 -->
        <nav class="flex justify-center md:justify-end">
          <ul class="flex items-center gap-4">
            <li>
              <button
                type="button"
                class="flex size-11 items-center justify-center rounded-full transition hover:bg-neutral hover:text-neutral-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 -960 960 960"
                  width="20"
                  fill="currentColor"
                >
                  <path d="M576-267.69 363.69-480 576-692.31 599.31-669l-189 189 189 189z" />
                </svg>
              </button>
            </li>
            <li>
              <button
                type="button"
                class="flex size-11 items-center justify-center rounded-full transition hover:bg-neutral hover:text-neutral-0"
              >
                1
              </button>
            </li>
            <li>
              <button
                type="button"
                class="flex size-11 items-center justify-center rounded-full transition hover:bg-neutral hover:text-neutral-0"
              >
                2
              </button>
            </li>
            <li class="hidden md:block">
              <button
                type="button"
                class="flex size-11 items-center justify-center rounded-full transition hover:bg-neutral hover:text-neutral-0"
              >
                3
              </button>
            </li>
            <li>
              <button
                type="button"
                class="flex size-11 items-center justify-center rounded-full transition hover:bg-neutral hover:text-neutral-0"
              >
                ...
              </button>
            </li>
            <li>
              <button
                type="button"
                class="flex size-11 items-center justify-center rounded-full transition hover:bg-neutral hover:text-neutral-0"
              >
                20
              </button>
            </li>
            <li>
              <button
                type="button"
                class="flex size-11 items-center justify-center rounded-full transition hover:bg-neutral hover:text-neutral-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 -960 960 960"
                  width="20"
                  fill="currentColor"
                >
                  <path d="m549.69-480-189-189L384-692.31 596.31-480 384-267.69 360.69-291z" />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  </section>
  <LayoutSubscription />
</template>
