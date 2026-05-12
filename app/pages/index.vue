<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const requestUrl = useRequestURL()

useSeoMeta(
  getPageSeo({
    title: '首頁',
    description:
      'Nelson 的個人作品網站，整理服務項目、專案作品與部落格文章，展示 UIUX 設計與前端開發整合能力。',
    origin: requestUrl.origin
  })
)

const { data: latestPosts } = await useAsyncData('home-latest-posts', async () => {
  const posts = await queryCollection('blog').order('date', 'DESC').all()

  return posts.slice(0, 3)
})

const latestBlogPosts = computed(() => latestPosts.value ?? [])
</script>

<template>
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
  <LayoutSubscription />
</template>
