<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { projects } from '../data/projects'

const requestUrl = useRequestURL()

useSeoMeta(
  getPageSeo({
    title: '首頁',
    description:
      'Nelson 的個人作品網站，整理服務項目、專案作品與部落格文章，展示 UIUX 設計與前端開發整合能力。',
    origin: requestUrl.origin
  })
)

// 專案作品
const homeProjects = projects.slice(0, 3)
const selectedProject = ref(null)
const isProjectModalOpen = ref(false)

// 開啟 modal 前先記錄點擊的專案，讓 modal 內容能對應目前卡片。
const openProjectModal = (project) => {
  selectedProject.value = project
  isProjectModalOpen.value = true
}

const closeProjectModal = () => {
  isProjectModalOpen.value = false
}

// 最新文章
const { data: latestPosts, refresh: refreshLatestPosts } = await useAsyncData(
  'home-latest-posts',
  async () => {
    const posts = await queryCollection('blog').order('date', 'DESC').all()

    return posts.slice(0, 3)
  }
)

// 正式環境重新整理時，Nuxt Content 的 payload 偶爾會在 hydration 前後不同步；
// 若首頁沒有拿到預渲染資料，就在 client 端補抓一次最新文章。
onMounted(async () => {
  if (!latestPosts.value?.length) {
    await refreshLatestPosts()
  }
})

const latestBlogPosts = computed(() => latestPosts.value ?? [])
</script>

<template>
  <!-- 服務項目區塊 -->
  <main class="bg-primary px-3 py-10 md:py-20">
    <div class="mx-auto max-w-[1296px] text-neutral-0">
      <p class="text-heading-xxxx-small md:text-heading-xxx-small">服務項目</p>
      <h2 class="mb-6 text-heading-x-large md:mb-10 md:text-heading-xxx-large">SERVICES</h2>
      <!-- 電腦版服務項目區塊 -->
      <ol class="hidden gap-3 text-neutral sm:grid sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
        <!-- 服務項目1 -->
        <li>
          <NuxtLink
            to="/service?service=graphic"
            class="group block w-full space-y-3 bg-primary-50 p-6 transition hover:bg-primary-100"
          >
            <!-- 標題與 icon -->
            <div class="flex justify-between gap-3">
              <div>
                <p class="text-heading-xxxx-small md:text-heading-xxx-small">GRAPHIC</p>
                <h3 class="text-heading-small md:text-heading-medium">平面設計</h3>
              </div>
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
            </div>
            <!-- 描述與 CTA 按鈕 -->
            <div class="flex gap-3">
              <p class="text-paragraph-small md:text-paragraph-medium">
                從品牌識別到視覺傳達，用專業設計精準傳遞核心價值
              </p>
              <button
                type="button"
                aria-label="前往查看平面設計服務流程"
                class="flex size-11 shrink-0 items-center justify-center rounded-full bg-neutral transition group-hover:bg-neutral-900 md:size-12"
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
        </li>
        <!-- 服務項目2 -->
        <li>
          <NuxtLink
            to="/service?service=website"
            class="group block w-full space-y-3 bg-primary-50 p-6 transition hover:bg-primary-100"
          >
            <!-- 標題與 icon -->
            <div class="flex justify-between gap-3">
              <div>
                <p class="text-heading-xxxx-small md:text-heading-xxx-small">WEBSITE</p>
                <h3 class="text-heading-small md:text-heading-medium">網頁設計</h3>
              </div>
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
            </div>
            <!-- 描述與 CTA 按鈕 -->
            <div class="flex gap-3">
              <p class="text-paragraph-small md:text-paragraph-medium">
                美感易用並重，以 Figma 打造符合直覺的數位體驗
              </p>
              <button
                type="button"
                aria-label="前往查看網頁設計服務流程"
                class="flex size-11 shrink-0 items-center justify-center rounded-full bg-neutral transition group-hover:bg-neutral-900 md:size-12"
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
        </li>
        <!-- 服務項目3 -->
        <li>
          <NuxtLink
            to="/service?service=frontend"
            class="group block w-full space-y-3 bg-primary-50 p-6 transition hover:bg-primary-100"
          >
            <!-- 標題與 icon -->
            <div class="flex justify-between gap-3">
              <div>
                <p class="text-heading-xxxx-small md:text-heading-xxx-small">FRONTEND</p>
                <h3 class="text-heading-small md:text-heading-medium">前端切版</h3>
              </div>
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
            </div>
            <!-- 描述與 CTA 按鈕 -->
            <div class="flex gap-3">
              <p class="text-paragraph-small md:text-paragraph-medium">
                精準轉譯設計稿細節，建構流暢穩定 RWD 響應式網頁
              </p>
              <button
                type="button"
                aria-label="前往查看前端切版服務流程"
                class="flex size-11 shrink-0 items-center justify-center rounded-full bg-neutral transition group-hover:bg-neutral-900 md:size-12"
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
        </li>
        <!-- 服務項目4 -->
        <li>
          <NuxtLink
            to="/service?service=backend"
            class="group block w-full space-y-3 bg-primary-50 p-6 transition hover:bg-primary-100"
          >
            <!-- 標題與 icon -->
            <div class="flex justify-between gap-3">
              <div>
                <p class="text-heading-xxxx-small md:text-heading-xxx-small">BACKEND</p>
                <h3 class="text-heading-small md:text-heading-medium">後端開發</h3>
              </div>
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
            </div>
            <!-- 描述與 CTA 按鈕 -->
            <div class="flex gap-3">
              <p class="text-paragraph-small md:text-paragraph-medium">
                佈署穩定系統架構，串接 API 並確保數據處理安全
              </p>
              <button
                type="button"
                aria-label="前往查看後端開發服務流程"
                class="flex size-11 shrink-0 items-center justify-center rounded-full bg-neutral transition group-hover:bg-neutral-900 md:size-12"
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
        </li>
      </ol>
    </div>
  </main>
  <!-- 專案作品區塊 -->
  <section class="bg-primary-50 px-3 py-10 md:py-20">
    <div class="mx-auto max-w-[1296px]">
      <!-- 標題區塊 -->
      <div class="mb-6 text-center md:mb-10">
        <p class="text-heading-xxxx-small md:text-heading-xxx-small">專案作品</p>
        <h2 class="text-heading-x-large md:text-heading-xxx-large">PROJECTS</h2>
      </div>
      <!-- 專案作品列表 -->
      <div class="flex flex-col gap-6 md:gap-10">
        <ul class="space-y-3 md:space-y-6">
          <li v-for="project in homeProjects" :key="project.id">
            <CommonProjectCard :project="project" @open="openProjectModal" />
          </li>
        </ul>
        <AtomButton to="/project" class="self-center">探索更多</AtomButton>
      </div>
    </div>
  </section>
  <!-- 部落格區塊 -->
  <section class="bg-primary-50 px-3 py-10 md:py-20">
    <div class="mx-auto max-w-[1296px]">
      <!-- 標題區塊與按鈕 -->
      <div class="mb-6 flex items-center justify-between gap-6 md:mb-10">
        <div>
          <p class="text-heading-xxxx-small md:text-heading-xxx-small">部落格</p>
          <h2 class="text-heading-x-large md:text-heading-xxx-large">BLOGS</h2>
        </div>
        <AtomButton to="/blog" variant="outline">探索更多</AtomButton>
      </div>
      <!-- 手機版最新文章 -->
      <Swiper
        v-if="latestBlogPosts.length"
        :slides-per-view="1.4"
        :space-between="12"
        :loop="latestBlogPosts.length > 1"
        class="md:!hidden"
      >
        <SwiperSlide v-for="post in latestBlogPosts" :key="post.path">
          <CommonBlogCard :post="post" variant="related" />
        </SwiperSlide>
      </Swiper>
      <!-- 電腦版最新文章 -->
      <ul v-if="latestBlogPosts.length" class="hidden grid-cols-3 gap-6 md:grid">
        <li v-for="post in latestBlogPosts" :key="post.path">
          <CommonBlogCard :post="post" variant="related" />
        </li>
      </ul>
    </div>
  </section>
  <LayoutProjectModal
    :open="isProjectModalOpen"
    :project="selectedProject"
    @close="closeProjectModal"
  />
  <LayoutSubscription />
</template>
