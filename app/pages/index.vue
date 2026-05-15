<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { projects } from '../data/projects'
import { serviceItems } from '../data/services'

const requestUrl = useRequestURL()
const runtimeConfig = useRuntimeConfig()
const siteOrigin = resolveSiteOrigin(runtimeConfig.public.siteUrl, requestUrl.origin)

useSeoMeta(
  getPageSeo({
    title: '首頁',
    description:
      'Nelson 的個人作品網站，整理服務項目、專案作品與部落格文章，展示 UIUX 設計與前端開發整合能力。',
    origin: siteOrigin,
    baseURL: runtimeConfig.app.baseURL
  })
)

// 首頁裝飾圖案的滑鼠視差設定；只在桌機寬度啟用，手機維持靜態排版。
const heroSection = ref(null)
const heroParallaxStyle = reactive({
  '--hero-parallax-x': '0px',
  '--hero-parallax-y': '0px'
})
const heroParallaxDistance = {
  x: 72,
  y: 48
}

let desktopMediaQuery
let heroParallaxFrame = 0

// 滑鼠離開 hero 或切回非桌機寬度時，讓裝飾圖案回到原本位置。
const resetHeroParallax = () => {
  heroParallaxStyle['--hero-parallax-x'] = '0px'
  heroParallaxStyle['--hero-parallax-y'] = '0px'
}

const updateHeroParallax = (event) => {
  if (!desktopMediaQuery?.matches || !heroSection.value) {
    return
  }

  // pointermove 觸發頻率很高，透過 requestAnimationFrame 合併更新，避免重複 repaint。
  cancelAnimationFrame(heroParallaxFrame)
  heroParallaxFrame = requestAnimationFrame(() => {
    const rect = heroSection.value.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5

    heroParallaxStyle['--hero-parallax-x'] = `${x * heroParallaxDistance.x}px`
    heroParallaxStyle['--hero-parallax-y'] = `${y * heroParallaxDistance.y}px`
  })
}

// 斷點改變時同步狀態，避免桌機移動後切到手機仍殘留 transform。
const syncHeroParallax = () => {
  if (!desktopMediaQuery?.matches) {
    resetHeroParallax()
  }
}

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

onMounted(() => {
  // 和 Tailwind 的 lg 斷點一致，視差效果只在電腦版寬度生效。
  desktopMediaQuery = window.matchMedia('(min-width: 1024px)')
  desktopMediaQuery.addEventListener('change', syncHeroParallax)
  syncHeroParallax()
})

onBeforeUnmount(() => {
  desktopMediaQuery?.removeEventListener('change', syncHeroParallax)
  cancelAnimationFrame(heroParallaxFrame)
})
</script>

<template>
  <!-- 首頁大圖與自我介紹 -->
  <section
    ref="heroSection"
    class="relative overflow-hidden bg-primary-50 px-3 pb-6 sm:pb-0"
    @pointermove="updateHeroParallax"
    @pointerleave="resetHeroParallax"
  >
    <div class="mx-auto flex max-w-[1296px] flex-col-reverse gap-6 sm:flex-row sm:items-center">
      <!-- 標題、描述、按鈕 -->
      <div class="relative z-20 min-w-0 flex-1 sm:max-w-[526px]">
        <h1 class="mb-3 text-heading-x-large sm:mb-6 lg:text-heading-xxx-large">
          Hello<br />
          I'm Nelson
        </h1>
        <p class="mb-8 text-paragraph-small sm:text-paragraph-medium md:mb-[60px]">
          我是一個擁有 10 年經驗的 UIUX 設計師 和 前端工程師<br />喜歡把美學和程式結合，打造一個又一個精美的網頁設計！
        </p>
        <div class="flex gap-3 sm:gap-6">
          <AtomButton to="#footer">與我聯絡</AtomButton>
          <AtomButton to="/project" variant="outline">我的履歷</AtomButton>
        </div>
      </div>
      <img
        src="/img/index/index_person.webp"
        alt="Nelson 個人照"
        class="block h-auto w-full min-w-0 sm:max-w-[746px] sm:flex-1"
        fetchpriority="high"
      />
    </div>
    <!-- 裝飾圖片 -->
    <div
      class="pointer-events-none absolute inset-0 z-10 w-full"
      :style="heroParallaxStyle"
      aria-hidden="true"
    >
      <img
        src="/img/index/index_decora_1.webp"
        class="absolute -left-[15px] top-[26px] w-[80px] transition-transform duration-300 ease-out sm:left-[40%] lg:top-[97px] lg:w-[200px] lg:translate-x-[calc(var(--hero-parallax-x)*-0.65)] lg:translate-y-[calc(var(--hero-parallax-y)*-0.65)] lg:will-change-transform"
      />
      <img
        src="/img/index/index_decora_2.webp"
        class="absolute -right-[13px] bottom-[330px] w-[80px] transition-transform duration-300 ease-out sm:bottom-[87px] sm:right-[10%] lg:w-[160px] lg:translate-x-[calc(var(--hero-parallax-x)*0.55)] lg:translate-y-[calc(var(--hero-parallax-y)*0.55)] lg:will-change-transform"
      />
      <img
        src="/img/index/index_decora_3.webp"
        class="absolute left-9 top-[56px] hidden w-[140px] transition-transform duration-300 ease-out lg:translate-x-[calc(var(--hero-parallax-x)*0.35)] lg:translate-y-[calc(var(--hero-parallax-y)*0.35)] lg:will-change-transform xl:block"
      />
      <img
        src="/img/index/index_decora_3.webp"
        class="absolute bottom-[182px] right-[34px] w-[80px] transition-transform duration-300 ease-out sm:left-[35%] lg:bottom-[192px] lg:translate-x-[calc(var(--hero-parallax-x)*-0.45)] lg:translate-y-[calc(var(--hero-parallax-y)*-0.45)] lg:will-change-transform"
      />
      <img
        src="/img/index/index_decora_3.webp"
        class="absolute right-[142px] top-[206px] hidden w-[140px] transition-transform duration-300 ease-out lg:translate-x-[calc(var(--hero-parallax-x)*0.4)] lg:translate-y-[calc(var(--hero-parallax-y)*0.4)] lg:will-change-transform xl:block"
      />
      <img
        src="/img/index/index_decora_4.webp"
        class="absolute left-[225px] top-[120px] hidden w-[313px] transition-transform duration-300 ease-out lg:block lg:translate-x-[calc(var(--hero-parallax-x)*0.25)] lg:translate-y-[calc(var(--hero-parallax-y)*0.25)] lg:will-change-transform"
      />
      <img
        src="/img/index/index_decora_5.webp"
        class="absolute bottom-20 left-[23%] hidden w-[180px] transition-transform duration-300 ease-out md:block lg:translate-x-[calc(var(--hero-parallax-x)*-0.35)] lg:translate-y-[calc(var(--hero-parallax-y)*-0.35)] lg:will-change-transform"
      />
      <img
        src="/img/index/index_decora_6.webp"
        class="absolute bottom-[245px] left-1/2 w-[113px] -translate-x-1/2 sm:hidden"
      />
    </div>
  </section>
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
