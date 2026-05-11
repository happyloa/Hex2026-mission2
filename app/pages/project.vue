<script setup>
const isProjectModalOpen = ref(false)

const openProjectModal = () => {
  isProjectModalOpen.value = true
}

const closeProjectModal = () => {
  isProjectModalOpen.value = false
}
</script>

<template>
  <LayoutBanner />
  <nav class="px-3 py-6 md:py-10">
    <ul
      class="mx-auto flex max-w-[1296px] overflow-x-auto whitespace-nowrap text-center text-heading-xxx-small [scrollbar-width:none] md:text-heading-xx-small"
    >
      <li class="flex-1">
        <button
          type="button"
          class="w-full px-3 py-2 transition hover:bg-primary hover:text-neutral-0 md:py-3"
        >
          全部
        </button>
      </li>
      <li class="flex-1">
        <button
          type="button"
          class="w-full px-3 py-2 transition hover:bg-primary hover:text-neutral-0 md:py-3"
        >
          平面設計
        </button>
      </li>
      <li class="flex-1">
        <button
          type="button"
          class="w-full px-3 py-2 transition hover:bg-primary hover:text-neutral-0 md:py-3"
        >
          網頁設計
        </button>
      </li>
      <li class="flex-1">
        <button
          type="button"
          class="w-full px-3 py-2 transition hover:bg-primary hover:text-neutral-0 md:py-3"
        >
          前端切版
        </button>
      </li>
      <li class="flex-1">
        <button
          type="button"
          class="w-full px-3 py-2 transition hover:bg-primary hover:text-neutral-0 md:py-3"
        >
          後端開發
        </button>
      </li>
    </ul>
  </nav>
  <section class="flex flex-col gap-10 px-3 pb-10 md:gap-20 md:pb-20">
    <ul class="mx-auto w-full max-w-[1296px] space-y-3 md:space-y-6">
      <!-- 專案1 -->
      <li>
        <article
          class="flex h-[580px] flex-col-reverse bg-[url('/img/project/mobile/project_1.webp')] bg-cover bg-center p-4 md:h-auto md:flex-row md:bg-[url('/img/project/desktop/project_1.webp')] md:p-7"
        >
          <!-- 內容區塊 -->
          <div
            class="flex w-full flex-col items-center gap-3 bg-primary-50 p-6 text-center text-paragraph-small md:max-w-[386px] md:p-10 md:text-paragraph-medium"
          >
            <!-- 專案時間 -->
            <time datetime="2025-10-16" class="text-paragraph-x-small md:text-paragraph-small"
              >Oct 16, 2025
            </time>
            <!-- 標籤 -->
            <ul
              class="flex flex-wrap [&>li:not(:last-child)::after]:mx-0.5 [&>li:not(:last-child)::after]:content-['·'] md:[&>li:not(:last-child)::after]:mx-1"
            >
              <li>平面設計</li>
              <li>網頁設計</li>
            </ul>
            <!-- 專案名稱 -->
            <h2 class="text-heading-x-small md:text-heading-small">
              品牌視覺與電商整合，多肉植物品牌電商建置
            </h2>
            <!-- 專案描述 -->
            <p>從品牌識別設計到 RWD 網站開發，打造療癒系植栽購物體驗</p>
            <AtomButton @click="openProjectModal">前往專案</AtomButton>
          </div>
        </article>
      </li>
      <!-- 專案2 -->
      <li>
        <article
          class="flex h-[580px] flex-col-reverse bg-[url('/img/project/mobile/project_2.webp')] bg-cover bg-center p-4 md:h-auto md:flex-row md:bg-[url('/img/project/desktop/project_2.webp')] md:p-7"
        >
          <!-- 內容區塊 -->
          <div
            class="flex w-full flex-col items-center gap-3 bg-primary-50 p-6 text-center text-paragraph-small md:max-w-[386px] md:p-10 md:text-paragraph-medium"
          >
            <!-- 專案時間 -->
            <time datetime="2025-10-16" class="text-paragraph-x-small md:text-paragraph-small"
              >Oct 16, 2025
            </time>
            <!-- 標籤 -->
            <ul
              class="flex flex-wrap [&>li:not(:last-child)::after]:mx-0.5 [&>li:not(:last-child)::after]:content-['·'] md:[&>li:not(:last-child)::after]:mx-1"
            >
              <li>平面設計</li>
              <li>網頁設計</li>
              <li>前端切版</li>
            </ul>
            <!-- 專案名稱 -->
            <h2 class="text-heading-x-small md:text-heading-small">
              數位產品 UI/UX 設計，個人化財務視覺化軟體
            </h2>
            <!-- 專案描述 -->
            <p>運用數據視覺化邏輯，將複雜的財務數據轉化為直覺的操作介面</p>
            <AtomButton @click="openProjectModal">前往專案</AtomButton>
          </div>
        </article>
      </li>
      <!-- 專案3 -->
      <li>
        <article
          class="flex h-[580px] flex-col-reverse bg-[url('/img/project/mobile/project_3.webp')] bg-cover bg-center p-4 md:h-auto md:flex-row md:bg-[url('/img/project/desktop/project_3.webp')] md:p-7"
        >
          <!-- 內容區塊 -->
          <div
            class="flex w-full flex-col items-center gap-3 bg-primary-50 p-6 text-center text-paragraph-small md:max-w-[386px] md:p-10 md:text-paragraph-medium"
          >
            <!-- 專案時間 -->
            <time datetime="2025-10-16" class="text-paragraph-x-small md:text-paragraph-small"
              >Oct 16, 2025
            </time>
            <!-- 標籤 -->
            <ul
              class="flex flex-wrap [&>li:not(:last-child)::after]:mx-0.5 [&>li:not(:last-child)::after]:content-['·'] md:[&>li:not(:last-child)::after]:mx-1"
            >
              <li>前端切版</li>
              <li>後端開發</li>
            </ul>
            <!-- 專案名稱 -->
            <h2 class="text-heading-x-small md:text-heading-small">
              品牌識別與包裝設計，法式甜點品牌視覺重塑
            </h2>
            <!-- 專案描述 -->
            <p>以溫暖、輕盈的視覺語言，精準定位高質感甜點市場的品牌形象</p>
            <AtomButton @click="openProjectModal">前往專案</AtomButton>
          </div>
        </article>
      </li>
      <!-- 專案4 -->
      <li>
        <article
          class="flex h-[580px] flex-col-reverse bg-[url('/img/project/mobile/project_4.webp')] bg-cover bg-center p-4 md:h-auto md:flex-row md:bg-[url('/img/project/desktop/project_4.webp')] md:p-7"
        >
          <!-- 內容區塊 -->
          <div
            class="flex w-full flex-col items-center gap-3 bg-primary-50 p-6 text-center text-paragraph-small md:max-w-[386px] md:p-10 md:text-paragraph-medium"
          >
            <!-- 專案時間 -->
            <time datetime="2025-10-16" class="text-paragraph-x-small md:text-paragraph-small"
              >Oct 16, 2025
            </time>
            <!-- 標籤 -->
            <ul
              class="flex flex-wrap [&>li:not(:last-child)::after]:mx-0.5 [&>li:not(:last-child)::after]:content-['·'] md:[&>li:not(:last-child)::after]:mx-1"
            >
              <li>網頁設計</li>
              <li>前端切版</li>
              <li>後端開發</li>
            </ul>
            <!-- 專案名稱 -->
            <h2 class="text-heading-x-small md:text-heading-small">
              金融科技系統設計，Open Bank API 數據整合平台
            </h2>
            <!-- 專案描述 -->
            <p>串接第三方 API 並規劃穩定的後端架構，建構安全的資產管理後台。</p>
            <AtomButton @click="openProjectModal">前往專案</AtomButton>
          </div>
        </article>
      </li>
    </ul>
    <AtomButton class="self-center">探索更多</AtomButton>
  </section>

  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isProjectModalOpen" class="fixed inset-0 z-[100]">
        <!-- 遮罩 -->
        <div class="absolute inset-0 bg-dark-60a" @click="closeProjectModal"></div>

        <!-- modal 內容 -->
        <div
          role="dialog"
          aria-modal="true"
          class="absolute left-1/2 top-1/2 mx-auto max-h-[90vh] w-[calc(100%-12px)] max-w-[1076px] -translate-x-1/2 -translate-y-1/2 overflow-y-auto"
        >
          <!-- 關閉 modal 的按鈕 -->
          <div class="sticky top-0 flex justify-end bg-neutral-0 px-3 py-2 md:px-6 md:py-3">
            <button
              class="size-11 p-3 md:size-12"
              aria-label="關閉專案視窗"
              @click="closeProjectModal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#404040"
                class="size-5 md:size-6"
              >
                <path
                  d="M256-227.69 227.69-256l224-224-224-224L256-732.31l224 224 224-224L732.31-704l-224 224 224 224L704-227.69l-224-224-224 224Z"
                />
              </svg>
            </button>
          </div>
          <!-- 專案圖片 -->
          <div
            class="h-[294px] bg-[url('/img/project/mobile/project_1.webp')] bg-cover bg-center md:bg-[url('/img/project/desktop/project_1.webp')]"
          ></div>
          <!-- 專案介紹 -->
          <main
            class="space-y-5 bg-neutral-0 px-3 py-6 text-paragraph-small md:space-y-6 md:p-10 md:text-paragraph-medium"
          >
            <!-- 標籤與時間 -->
            <div class="flex justify-between">
              <ul
                class="flex flex-wrap [&>li:not(:last-child)::after]:mx-0.5 [&>li:not(:last-child)::after]:content-['·'] md:[&>li:not(:last-child)::after]:mx-1"
              >
                <li>平面設計</li>
                <li>網頁設計</li>
              </ul>
              <time datetime="2025-10-16">Oct 16, 2025 </time>
            </div>
            <!-- 名稱與描述 -->
            <div class="text-balance">
              <h2 class="mb-2 text-heading-small md:mb-3 md:text-heading-medium">
                品牌視覺與電商整合，多肉植物品牌電商建置
              </h2>
              <p>從品牌識別設計到 RWD 網站開發，打造療癒系植栽購物體驗</p>
            </div>
            <!-- 內容、設計原則、開發方式 -->
            <div class="flex flex-col items-center gap-5 text-neutral-500 md:flex-row md:gap-6">
              <p class="md:max-w-[638px]">
                我們將大自然的平靜感轉化為數位語彙，透過揉合大地色系與極簡排版，為「PLANTIQUE
                LIFE」建構出專屬的視覺靈魂。在開發過程中，我們秉持對細節的極致追求，確保從品牌 Logo
                到每一個組件的轉場，皆展現像素級的精準。
              </p>
              <div class="hidden h-12 border-l border-neutral-500 md:block"></div>
              <hr class="w-full border-neutral-500 md:hidden" />
              <ul class="space-y-1 self-start md:self-center md:whitespace-nowrap">
                <li>設計原則：植栽藝術、日系風格、暖陽視覺</li>
                <li>開發方式：Bootstrap、Javascript</li>
              </ul>
            </div>
          </main>
          <!-- 專案完整截圖 -->
          <section class="bg-primary-50 px-3 py-10 md:py-20">
            <img
              src="/img/project/project_modal_pic.webp"
              alt="品牌視覺與電商整合，多肉植物品牌電商建置"
              class="mx-auto block"
            />
          </section>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
