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
          class="relative mx-auto mt-20 min-h-40 w-[calc(100%-24px)] max-w-[960px] bg-primary-50 p-6"
        >
          <div>Project modal content</div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
