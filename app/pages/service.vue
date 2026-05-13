<script setup>
const requestUrl = useRequestURL()

useSeoMeta(
  getPageSeo({
    title: '服務項目',
    description:
      '了解 Nelson 提供的品牌視覺、UIUX 設計、網頁設計與前端開發服務，協助產品從設計提案走到可落地的網站體驗。',
    origin: requestUrl.origin,
    path: '/service'
  })
)

// 服務流程資料
const serviceSteps = [
  {
    id: 1,
    title: '需求訪談與視覺定位',
    content: '深度溝通品牌核心價值，確認目標受眾與視覺風格，制定符合商業邏輯的設計藍圖。'
  },
  {
    id: 2,
    title: '概念發展與方案提案',
    content: '將抽象概念具象化，提供多層次的設計提案，確保視覺語言精準傳遞品牌獨特魅力。'
  },
  {
    id: 3,
    title: '匠心編排與細節校正',
    content: '針對初稿進行多輪細緻微調，優化排版層次與色彩表現，追求美學與易讀性的完美平衡。'
  },
  {
    id: 4,
    title: '專業檔案交付結案',
    content: '提供完整原始碼與多樣格式輸出，並附上使用規範建議，確保品牌形象在各處始終如一。'
  }
]

// 常見問題資料
const faqItems = [
  {
    id: 1,
    title: '設計提案後包含幾次修改機會？',
    content:
      '每個專案皆包含 2 次修改機會，讓我們能在既定方向中細修視覺與互動細節。若後續需要額外調整，也可以依照修改範圍另行評估。'
  },
  {
    id: 2,
    title: '結案時我會收到哪些格式的檔案？',
    content:
      '會依專案內容提供設計原始檔、切圖素材、設計規格與可交付的前端檔案；若有品牌或後台相關文件，也會一併整理給您。'
  },
  {
    id: 3,
    title: '平面設計的成果，未來能直接應用在網頁嗎？',
    content:
      '沒問題。由於我兼具 UI/UX 設計與前端工程背景，在執行平面設計時會預先考量數位載體的適配性。這意味著您的品牌識別能無縫轉譯至網頁介面，不僅節省後續開發的重複溝通，更能確保品牌在不同平台上的視覺品質。',
    open: true
  },
  {
    id: 4,
    title: '完成一套完整的設計流程需要多久？',
    content:
      '視專案複雜度而定，一般約需 10 到 14 個工作日。透過嚴格執行的「四步驟流程」，我們能確保每個階段都有明確的進度產出，有效避免時程延宕。若有特定的上線期限，歡迎在訪談階段提出，我會為您評估最合適的排程。',
    open: true
  }
]
</script>

<template>
  <!-- Banner -->
  <section
    class="relative bg-[url('/img/service/mobile/service_banner.webp')] bg-cover bg-center px-3 py-10 text-center text-neutral-0 md:bg-[url('/img/service/desktop/service_banner.webp')] md:py-20"
  >
    <!-- 遮罩 -->
    <div class="absolute inset-0 bg-dark-40a"></div>
    <!-- 內容 -->
    <div class="relative z-10 mx-auto max-w-[1076px]">
      <p class="mb-1 text-heading-x-large md:mb-2 lg:text-heading-xxx-large">SERVICES</p>
      <h1 class="mb-6 text-heading-x-large md:mb-10 lg:text-heading-xx-large">服務項目</h1>
      <ol class="grid grid-cols-2 gap-3 text-neutral md:gap-6 lg:grid-cols-4">
        <li>
          <button
            type="button"
            class="flex w-full flex-col items-center bg-neutral-0 px-3 py-4 text-center transition hover:bg-primary hover:text-neutral-0 md:p-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="currentColor"
              class="mb-1 size-6 md:mb-3 md:size-7"
            >
              <path
                d="m263.92-857.08 27.77-29.07L617-560.85q19.15 19.16 19.15 46.23 0 27.08-19.15 46.24L460.85-310.69q-18.39 18.38-45.47 18.38-27.07 0-45.46-18.38L213.77-468.38q-19.16-19.16-19.16-46.24 0-27.07 19.16-46.23l173.85-172.54zm152.23 152.23L240.54-530.77q-3.85 3.85-5 8.08-1.16 4.23-1.16 8.84h362q0-4.61-1.15-8.84t-5-8.08zm284.27 435.2q-17.34-17.35-17.34-42.66 0-17.92 9.42-35.38t19.81-33.08q7.46-10.46 15.15-20.38 7.69-9.93 15.62-20.39 7.92 10.46 15.61 20.39 7.69 9.92 15.16 20.38 10.38 15.62 19.8 33.08 9.43 17.46 9.43 35.38 0 25.31-17.35 42.66-17.35 17.34-42.65 17.34-25.31 0-42.66-17.34M80 0v-80h800V0z"
              />
            </svg>
            <p class="text-heading-xxx-small md:text-heading-xxx-small">GRAPHIC</p>
            <h3 class="text-heading-small md:text-heading-medium">平面設計</h3>
          </button>
        </li>
        <li>
          <button
            type="button"
            class="flex w-full flex-col items-center bg-neutral-0 px-3 py-4 text-center transition hover:bg-primary hover:text-neutral-0 md:p-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="currentColor"
              class="mb-1 size-6 md:mb-3 md:size-7"
            >
              <path
                d="M620-332.31h127.69V-460h-35.38v92.31H620v35.38ZM212.31-580h35.38v-92.31H340v-35.38H212.31V-580ZM360-160v-80H184.62q-27.62 0-46.12-18.5Q120-277 120-304.62v-430.76q0-27.62 18.5-46.12Q157-800 184.62-800h590.76q27.62 0 46.12 18.5Q840-763 840-735.38v430.76q0 27.62-18.5 46.12Q803-240 775.38-240H600v80H360ZM184.62-280h590.76q9.24 0 16.93-7.69 7.69-7.69 7.69-16.93v-430.76q0-9.24-7.69-16.93-7.69-7.69-16.93-7.69H184.62q-9.24 0-16.93 7.69-7.69 7.69-7.69 16.93v430.76q0 9.24 7.69 16.93 7.69 7.69 16.93 7.69ZM160-280v-480 480Z"
              />
            </svg>
            <p class="text-heading-xxx-small md:text-heading-xxx-small">WEBSITE</p>
            <h3 class="text-heading-small md:text-heading-medium">網頁設計</h3>
          </button>
        </li>
        <li>
          <button
            type="button"
            class="flex w-full flex-col items-center bg-neutral-0 px-3 py-4 text-center transition hover:bg-primary hover:text-neutral-0 md:p-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="currentColor"
              class="mb-1 size-6 md:mb-3 md:size-7"
            >
              <path
                d="M184.62-200q-27.62 0-46.12-18.5T120-264.62v-430.76q0-27.62 18.5-46.12t46.12-18.5h590.76q27.62 0 46.12 18.5t18.5 46.12v430.76q0 27.62-18.5 46.12T775.38-200zm0-40H600v-155.38H160v130.76q0 9.24 7.69 16.93t16.93 7.69M640-240h135.38q9.24 0 16.93-7.69t7.69-16.93v-326.15H640zM160-435.38h440v-155.39H160z"
              />
            </svg>
            <p class="text-heading-xxx-small md:text-heading-xxx-small">FRONTEND</p>
            <h3 class="text-heading-small md:text-heading-medium">前端切版</h3>
          </button>
        </li>
        <li>
          <button
            type="button"
            class="flex w-full flex-col items-center bg-neutral-0 px-3 py-4 text-center transition hover:bg-primary hover:text-neutral-0 md:p-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="currentColor"
              class="mb-1 size-6 md:mb-3 md:size-7"
            >
              <path
                d="M224.62-160q-27.62 0-46.12-18.5T160-224.62v-510.76q0-27.62 18.5-46.12t46.12-18.5h510.76q27.62 0 46.12 18.5t18.5 46.12v510.76q0 27.62-18.5 46.12T735.38-160zM200-600.08h560v-135.3q0-9.24-7.69-16.93T735.38-760H224.62q-9.24 0-16.93 7.69T200-735.38zm0 200.16h560v-160.16H200zM224.62-200h510.76q9.24 0 16.93-7.69t7.69-16.93v-135.3H200v135.3q0 9.24 7.69 16.93t16.93 7.69m46.15-447.85v-64.61h64.61v64.61zm0 200.16v-64.62h64.61v64.62zm0 200.15v-64.61h64.61v64.61z"
              />
            </svg>
            <p class="text-heading-xxx-small md:text-heading-xxx-small">BACKEND</p>
            <h3 class="text-heading-small md:text-heading-medium">後端開發</h3>
          </button>
        </li>
      </ol>
    </div>
  </section>
  <!-- 服務流程區塊 -->
  <main class="bg-primary px-3 py-10 text-neutral-0 md:py-20">
    <div class="mx-auto flex max-w-[1076px] flex-col justify-between gap-6 md:flex-row">
      <!-- 左側標題 -->
      <div class="text-center md:max-w-[416px] md:text-start">
        <p class="text-heading-xxxx-small md:text-heading-xxx-small">SERVICE STEPS</p>
        <h2 class="text-heading-x-large md:text-heading-xx-large">服務流程</h2>
      </div>
      <!-- 右側步驟 -->
      <div class="flex-1 md:max-w-[636px]">
        <ol
          class="relative space-y-10 before:absolute before:bottom-16 before:left-[18px] before:top-6 before:w-[0.5px] before:bg-neutral-0 md:before:bottom-20 md:before:left-5 md:before:top-5"
        >
          <li
            v-for="step in serviceSteps"
            :key="step.id"
            class="relative grid grid-cols-[36px_1fr] gap-6 md:grid-cols-[40px_1fr]"
          >
            <span
              class="z-10 flex size-9 items-center justify-center rounded-full bg-neutral-0 text-neutral md:size-10"
            >
              {{ step.id }}
            </span>
            <div class="space-y-3">
              <h3 class="text-heading-small md:text-heading-medium">{{ step.title }}</h3>
              <p>
                {{ step.content }}
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </main>
  <!-- 客戶案例區塊 -->
  <section class="px-3 py-10 md:py-20">
    <div class="mx-auto max-w-[1076px]">
      <div class="mb-10 text-center md:text-start">
        <p class="text-heading-xxxx-small md:text-heading-xxx-small">USER CASE</p>
        <h2 class="text-heading-x-large md:text-heading-xx-large">客戶案例</h2>
      </div>
      <!-- 案例卡片 -->
      <ol class="grid gap-3 sm:grid-cols-2 md:gap-6">
        <!-- 案例1 -->
        <li>
          <article>
            <NuxtLink to="/project" class="group space-y-2 md:space-y-3">
              <img
                src="/img/service/service_case_1.webp"
                alt="品牌視覺與電商整合，多肉植物品牌電商建置"
                class="block max-h-[205px] w-full object-cover md:max-h-[305px]"
              />
              <!-- 標籤與時間 -->
              <div class="flex flex-col-reverse justify-between gap-1 md:flex-row md:items-center">
                <ul
                  class="flex flex-wrap text-paragraph-small md:text-paragraph-medium [&>li:not(:last-child)::after]:mx-0.5 [&>li:not(:last-child)::after]:content-['·'] md:[&>li:not(:last-child)::after]:mx-1"
                >
                  <li>平面設計</li>
                  <li>網頁設計</li>
                </ul>
                <time datetime="2022-10-16" class="text-paragraph-x-small md:text-paragraph-small"
                  >Oct 16, 2022</time
                >
              </div>
              <h3 class="text-heading-x-small md:text-heading-small">
                品牌視覺與電商整合，多肉植物品牌電商建置
              </h3>
              <!-- 描述與 CTA 按鈕 -->
              <div class="flex gap-2 md:gap-5">
                <p class="flex-1 text-paragraph-small md:text-paragraph-medium">
                  從品牌識別設計到 RWD 響應式網站開發，打造療癒系植栽購物體驗
                </p>
                <button
                  type="button"
                  aria-label="前往查看專案：品牌視覺與電商整合，多肉植物品牌電商建置"
                  class="flex size-11 items-center justify-center rounded-full bg-neutral transition group-hover:bg-neutral-900 md:size-12"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="#ffffff"
                    class="size-5 md:size-6"
                  >
                    <path d="M247.54-268.46 220-296l403.23-404H251.54v-40h440v440h-40v-371.69z" />
                  </svg>
                </button>
              </div>
            </NuxtLink>
          </article>
        </li>
        <!-- 案例2 -->
        <li>
          <article>
            <NuxtLink to="/project" class="group space-y-2 md:space-y-3">
              <img
                src="/img/service/service_case_2.webp"
                alt="數位產品 UI/UX 設計，個人化財務視覺化軟體"
                class="block max-h-[205px] w-full object-cover md:max-h-[305px]"
              />
              <!-- 標籤與時間 -->
              <div class="flex flex-col-reverse justify-between gap-1 md:flex-row md:items-center">
                <ul
                  class="flex flex-wrap text-paragraph-small md:text-paragraph-medium [&>li:not(:last-child)::after]:mx-0.5 [&>li:not(:last-child)::after]:content-['·'] md:[&>li:not(:last-child)::after]:mx-1"
                >
                  <li>平面設計</li>
                  <li>網頁設計</li>
                  <li>前端切版</li>
                </ul>
                <time datetime="2022-10-16" class="text-paragraph-x-small md:text-paragraph-small"
                  >Oct 16, 2022</time
                >
              </div>
              <h3 class="text-heading-x-small md:text-heading-small">
                數位產品 UI/UX 設計，個人化財務視覺化軟體
              </h3>
              <!-- 描述與 CTA 按鈕 -->
              <div class="flex gap-2 md:gap-5">
                <p class="flex-1 text-paragraph-small md:text-paragraph-medium">
                  運用數據視覺化邏輯，將複雜的財務數據轉化為直覺的個人化操作介面
                </p>
                <button
                  type="button"
                  aria-label="前往查看專案：數位產品 UI/UX 設計，個人化財務視覺化軟體"
                  class="flex size-11 items-center justify-center rounded-full bg-neutral transition group-hover:bg-neutral-900 md:size-12"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="#ffffff"
                    class="size-5 md:size-6"
                  >
                    <path d="M247.54-268.46 220-296l403.23-404H251.54v-40h440v440h-40v-371.69z" />
                  </svg>
                </button>
              </div>
            </NuxtLink>
          </article>
        </li>
      </ol>
    </div>
  </section>
  <!-- FAQ 區塊 -->
  <section class="bg-primary-50 px-3 py-10 md:py-20">
    <div class="mx-auto flex max-w-[1076px] flex-col justify-between gap-6 md:flex-row">
      <!-- 左側標題 -->
      <div class="text-center md:max-w-[416px] md:text-start">
        <p class="text-heading-xxxx-small md:text-heading-xxx-small">FAQ</p>
        <h2 class="text-heading-x-large md:text-heading-xx-large">常見問題</h2>
      </div>
      <!-- 右側手風琴 -->
      <div class="flex-1 md:max-w-[636px]">
        <details
          v-for="faq in faqItems"
          :key="faq.id"
          class="group border-b border-primary [&::details-content]:block [&::details-content]:overflow-hidden [&::details-content]:[block-size:0] [&::details-content]:[transition:block-size_300ms_ease,content-visibility_300ms_ease_allow-discrete] [&[open]::details-content]:[block-size:auto]"
          :open="faq.open"
        >
          <summary
            class="grid cursor-pointer grid-cols-[32px_1fr_24px] gap-3 p-4 text-heading-xxx-small group-open:pb-2 md:items-center md:gap-4 md:p-6 md:text-heading-xx-small md:group-open:pb-4"
          >
            <span class="shrink-0">{{ String(faq.id).padStart(2, '0') }}</span>
            <span>{{ faq.title }}</span>
            <Icon
              name="lucide:chevron-down"
              class="size-6 shrink-0 transition-transform duration-300 group-open:rotate-180"
            />
          </summary>
          <p
            class="grid grid-cols-[32px_1fr_24px] gap-3 px-4 pb-4 text-paragraph-small md:gap-4 md:px-6 md:pb-6 md:text-paragraph-medium"
          >
            <span class="col-start-2">
              {{ faq.content }}
            </span>
          </p>
        </details>
      </div>
    </div>
  </section>
</template>
