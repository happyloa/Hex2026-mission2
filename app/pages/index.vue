<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { projects } from '../data/projects'
import { serviceItems } from '../data/services'

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
      <!-- 手機版服務項目輪播 -->
      <Swiper :slides-per-view="1.4" :space-between="12" :loop="true" class="sm:!hidden">
        <SwiperSlide v-for="service in serviceItems" :key="service.key">
          <CommonServiceCard :service="service" />
        </SwiperSlide>
      </Swiper>
      <!-- 電腦版服務項目區塊 -->
      <ol class="hidden gap-3 sm:grid sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
        <li v-for="service in serviceItems" :key="service.key">
          <CommonServiceCard :service="service" />
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
