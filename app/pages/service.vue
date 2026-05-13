<script setup>
import { defaultService, serviceItems } from '../data/services'

const requestUrl = useRequestURL()
const route = useRoute()
const router = useRouter()

useSeoMeta(
  getPageSeo({
    title: '服務項目',
    description:
      '了解 Nelson 提供的品牌視覺、UIUX 設計、網頁設計與前端開發服務，協助產品從設計提案走到可落地的網站體驗。',
    origin: requestUrl.origin,
    path: '/service'
  })
)

// 依照網址 service 參數決定目前選取的項目；若參數不存在或不合法則回到預設項目。
const activeServiceKey = computed(() => {
  const service = Array.isArray(route.query.service) ? route.query.service[0] : route.query.service
  return serviceItems.some((item) => item.key === service) ? service : defaultService
})

// 將目前選取的服務項目整理成單一物件，供 banner active 狀態與流程區塊共用。
const activeService = computed(
  () => serviceItems.find((item) => item.key === activeServiceKey.value) || serviceItems[0]
)

const serviceSteps = computed(() => activeService.value.steps)

// 點擊 banner 項目時只更新 service query，保留頁面上其它既有 query。
const setActiveService = (service) => {
  router.push({
    query: {
      ...route.query,
      service: service.key
    }
  })
}

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
      <ol class="grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-4">
        <li v-for="service in serviceItems" :key="service.key">
          <button
            type="button"
            class="flex w-full flex-col items-center px-3 py-4 text-center transition md:p-8"
            :class="
              activeServiceKey === service.key
                ? 'bg-primary text-neutral-0'
                : 'bg-neutral-0 text-neutral hover:bg-primary-50'
            "
            :aria-pressed="activeServiceKey === service.key"
            @click="setActiveService(service)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="currentColor"
              class="mb-1 size-6 md:mb-3 md:size-7"
            >
              <path :d="service.iconPath" />
            </svg>
            <p class="text-heading-xxxx-small md:text-heading-xxx-small">{{ service.eyebrow }}</p>
            <h2 class="text-heading-small md:text-heading-medium">{{ service.title }}</h2>
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
              <p class="text-paragraph-small md:text-paragraph-medium">
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
