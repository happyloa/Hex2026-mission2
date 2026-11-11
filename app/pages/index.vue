<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { projects } from '~/data/projects'
import { serviceItems } from '~/data/services'
import type { Project } from '~/types'

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

// 首頁裝飾圖案的滑鼠視差設定；只在桌機寬度且未要求減少動態效果時啟用，手機維持靜態排版。
const heroSection = useTemplateRef('hero')
const heroParallaxStyle = reactive({
  '--hero-parallax-x': '0px',
  '--hero-parallax-y': '0px'
})
const heroParallaxDistance = {
  x: 72,
  y: 48
}

let desktopMediaQuery: MediaQueryList | undefined
let heroParallaxFrame = 0

// 滑鼠離開 hero 或切回非桌機寬度時，讓裝飾圖案回到原本位置。
const resetHeroParallax = () => {
  heroParallaxStyle['--hero-parallax-x'] = '0px'
  heroParallaxStyle['--hero-parallax-y'] = '0px'
}

const updateHeroParallax = (event: PointerEvent) => {
  const section = heroSection.value
  if (!desktopMediaQuery?.matches || !section) {
    return
  }

  // pointermove 觸發頻率很高，透過 requestAnimationFrame 合併更新，避免重複 repaint。
  cancelAnimationFrame(heroParallaxFrame)
  heroParallaxFrame = requestAnimationFrame(() => {
    const rect = section.getBoundingClientRect()
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
const selectedProject = ref<Project | null>(null)
const isProjectModalOpen = ref(false)

// 開啟 modal 前先記錄點擊的專案，讓 modal 內容能對應目前卡片。
const openProjectModal = (project: Project) => {
  selectedProject.value = project
  isProjectModalOpen.value = true
}

const closeProjectModal = () => {
  isProjectModalOpen.value = false
}

// 最新文章
const { data: posts } = await useBlogIndex()
const latestBlogPosts = computed(() => posts.value.slice(0, 3))

onMounted(() => {
  // 和 Tailwind 的 lg 斷點一致，視差效果只在電腦版寬度且未開啟「減少動態效果」時生效。
  desktopMediaQuery = window.matchMedia(
    '(min-width: 1024px) and (prefers-reduced-motion: no-preference)'
  )
  desktopMediaQuery.addEventListener('change', syncHeroParallax)
  syncHeroParallax()
})

onBeforeUnmount(() => {
  desktopMediaQuery?.removeEventListener('change', syncHeroParallax)
  cancelAnimationFrame(heroParallaxFrame)
})
</script>

<template>
  <main>
    <!-- 首頁大圖與自我介紹 -->
    <section
      ref="hero"
      class="relative overflow-hidden bg-primary-50 px-3 pb-6 sm:pb-0"
      @pointermove="updateHeroParallax"
      @pointerleave="resetHeroParallax"
    >
      <div class="mx-auto flex max-w-324 flex-col-reverse gap-6 sm:flex-row sm:items-center">
        <!-- 標題、描述、按鈕 -->
        <div class="relative z-20 min-w-0 flex-1 sm:max-w-131.5">
          <h1 class="mb-3 text-heading-x-large sm:mb-6 lg:text-heading-xxx-large">
            Hello<br />
            I'm Nelson
          </h1>
          <p class="mb-8 text-paragraph-small sm:text-paragraph-medium md:mb-15">
            我是一個擁有 10 年經驗的 UIUX 設計師 和 前端工程師<br />喜歡把美學和程式結合，打造一個又一個精美的網頁設計！
          </p>
          <div class="flex gap-3 sm:gap-6">
            <AtomButton to="#footer">與我聯絡</AtomButton>
            <AtomButton to="/project/" variant="outline">我的履歷</AtomButton>
          </div>
        </div>
        <CommonSiteImage
          src="/img/index/index_person.webp"
          alt="Nelson 個人照"
          class="block h-auto w-full min-w-0 sm:max-w-186.5 sm:flex-1"
          fetchpriority="high"
          loading="eager"
          sizes="(min-width: 1296px) 746px, (min-width: 640px) 55vw, calc(100vw - 24px)"
        />
      </div>
      <!-- 裝飾圖片 -->
      <div
        class="pointer-events-none absolute inset-0 z-10 w-full"
        :style="heroParallaxStyle"
        aria-hidden="true"
      >
        <CommonSiteImage
          src="/img/index/index_decora_1.webp"
          class="absolute top-6.5 -left-3.75 w-20 transition-transform duration-300 ease-out sm:left-[40%] lg:top-24.25 lg:w-50 lg:translate-x-[calc(var(--hero-parallax-x)*-0.65)] lg:translate-y-[calc(var(--hero-parallax-y)*-0.65)] lg:will-change-transform"
        />
        <CommonSiteImage
          src="/img/index/index_decora_2.webp"
          class="absolute -right-3.25 bottom-82.5 w-20 transition-transform duration-300 ease-out sm:right-[10%] sm:bottom-21.75 lg:w-40 lg:translate-x-[calc(var(--hero-parallax-x)*0.55)] lg:translate-y-[calc(var(--hero-parallax-y)*0.55)] lg:will-change-transform"
        />
        <CommonSiteImage
          src="/img/index/index_decora_3.webp"
          class="absolute top-14 left-9 hidden w-35 transition-transform duration-300 ease-out lg:translate-x-[calc(var(--hero-parallax-x)*0.35)] lg:translate-y-[calc(var(--hero-parallax-y)*0.35)] lg:will-change-transform xl:block"
        />
        <CommonSiteImage
          src="/img/index/index_decora_3.webp"
          class="absolute right-8.5 bottom-45.5 w-20 transition-transform duration-300 ease-out sm:left-[35%] lg:bottom-48 lg:translate-x-[calc(var(--hero-parallax-x)*-0.45)] lg:translate-y-[calc(var(--hero-parallax-y)*-0.45)] lg:will-change-transform"
        />
        <CommonSiteImage
          src="/img/index/index_decora_3.webp"
          class="absolute top-51.5 right-35.5 hidden w-35 transition-transform duration-300 ease-out lg:translate-x-[calc(var(--hero-parallax-x)*0.4)] lg:translate-y-[calc(var(--hero-parallax-y)*0.4)] lg:will-change-transform xl:block"
        />
        <CommonSiteImage
          src="/img/index/index_decora_4.webp"
          class="absolute top-30 left-56.25 hidden w-78.25 transition-transform duration-300 ease-out lg:block lg:translate-x-[calc(var(--hero-parallax-x)*0.25)] lg:translate-y-[calc(var(--hero-parallax-y)*0.25)] lg:will-change-transform"
        />
        <CommonSiteImage
          src="/img/index/index_decora_5.webp"
          class="absolute bottom-20 left-[23%] hidden w-45 transition-transform duration-300 ease-out md:block lg:translate-x-[calc(var(--hero-parallax-x)*-0.35)] lg:translate-y-[calc(var(--hero-parallax-y)*-0.35)] lg:will-change-transform"
        />
        <CommonSiteImage
          src="/img/index/index_decora_6.svg"
          class="absolute bottom-61.25 left-1/2 w-28.25 -translate-x-1/2 sm:hidden"
        />
      </div>
    </section>
    <!-- 服務項目區塊 -->
    <section class="bg-primary px-3 py-10 md:py-20">
      <div class="mx-auto max-w-324 text-neutral-0">
        <h2 class="text-heading-xxxx-small md:text-heading-xxx-small">服務項目</h2>
        <p class="mb-6 text-heading-x-large md:mb-10 md:text-heading-xxx-large">SERVICES</p>
        <!-- 手機版服務項目輪播 -->
        <Swiper :slides-per-view="1.4" :space-between="12" :loop="true" class="sm:hidden!">
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
    </section>
    <!-- 專案作品區塊 -->
    <section class="bg-primary-50 px-3 py-10 md:py-20">
      <div class="mx-auto max-w-324">
        <!-- 標題區塊 -->
        <div class="mb-6 text-center md:mb-10">
          <h2 class="text-heading-xxxx-small md:text-heading-xxx-small">專案作品</h2>
          <p class="text-heading-x-large md:text-heading-xxx-large">PROJECTS</p>
        </div>
        <!-- 專案作品列表 -->
        <div class="flex flex-col gap-6 md:gap-10">
          <ul class="space-y-3 md:space-y-6">
            <li v-for="project in homeProjects" :key="project.id">
              <CommonProjectCard :project="project" heading-level="h3" @open="openProjectModal" />
            </li>
          </ul>
          <AtomButton to="/project/" class="self-center">探索更多</AtomButton>
        </div>
      </div>
    </section>
    <!-- 部落格區塊 -->
    <section class="bg-primary-50 px-3 py-10 md:py-20">
      <div class="mx-auto max-w-324">
        <!-- 標題區塊與按鈕 -->
        <div class="mb-6 flex items-center justify-between gap-6 md:mb-10">
          <div>
            <h2 class="text-heading-xxxx-small md:text-heading-xxx-small">部落格</h2>
            <p class="text-heading-x-large md:text-heading-xxx-large">BLOGS</p>
          </div>
          <AtomButton to="/blog/" variant="outline">探索更多</AtomButton>
        </div>
        <!-- 手機版最新文章 -->
        <Swiper
          v-if="latestBlogPosts.length"
          :slides-per-view="1.4"
          :space-between="12"
          :loop="latestBlogPosts.length > 1"
          class="md:hidden!"
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
  </main>
</template>
