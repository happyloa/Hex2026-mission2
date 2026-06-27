<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const route = useRoute()
const requestUrl = useRequestURL()
const runtimeConfig = useRuntimeConfig()
const siteOrigin = resolveSiteOrigin(runtimeConfig.public.siteUrl, requestUrl.origin)

const blogSlug = computed(() => route.params.blog)

const { data: post } = await useAsyncData(`blog-${blogSlug.value}`, () =>
  queryCollection('blog').path(`/blog/${blogSlug.value}`).first()
)

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: '文章不存在',
    fatal: true
  })
}

// 分享與 OG URL 需要帶上 Nuxt baseURL，避免部署在子路徑時產生錯誤連結。
const articlePath = computed(() => withAppBaseURL(post.value.path, runtimeConfig.app.baseURL))
const articleUrl = computed(() => buildAbsoluteUrl(articlePath.value, siteOrigin))
const ogImageUrl = computed(() =>
  buildAbsoluteUrl(withAppBaseURL(SITE_OG_IMAGE, runtimeConfig.app.baseURL), siteOrigin)
)

useSeoMeta({
  title: () => buildSeoTitle(post.value.title),
  description: () => post.value.description,
  ogTitle: () => buildSeoTitle(post.value.title),
  ogDescription: () => post.value.description,
  ogImage: () => ogImageUrl.value,
  ogUrl: () => articleUrl.value,
  ogType: 'article',
  twitterCard: 'summary_large_image',
  twitterTitle: () => buildSeoTitle(post.value.title),
  twitterDescription: () => post.value.description,
  twitterImage: () => ogImageUrl.value
})

const { data: allPosts } = await useAsyncData('blog-related-posts', () =>
  queryCollection('blog').order('date', 'DESC').all()
)

const formattedDate = computed(() => {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(`${post.value.date}T00:00:00`))
})

// 相關文章以共同標籤數排序，不足三篇時用最新文章補滿。
const relatedPosts = computed(() => {
  const currentPost = post.value
  const otherPosts = (allPosts.value ?? []).filter((item) => item.path !== currentPost.path)

  const matchedPosts = otherPosts
    .map((item) => ({
      item,
      matchedCount: item.tags.filter((tag) => currentPost.tags.includes(tag)).length
    }))
    .filter(({ matchedCount }) => matchedCount > 0)
    .sort((a, b) => {
      if (b.matchedCount !== a.matchedCount) {
        return b.matchedCount - a.matchedCount
      }

      return new Date(b.item.date).getTime() - new Date(a.item.date).getTime()
    })
    .map(({ item }) => item)

  const fallbackPosts = otherPosts.filter(
    (item) => !matchedPosts.some((matched) => matched.path === item.path)
  )

  return [...matchedPosts, ...fallbackPosts].slice(0, 3)
})

const encodedArticleUrl = computed(() => encodeURIComponent(articleUrl.value))
const encodedArticleTitle = computed(() => encodeURIComponent(post.value.title))

const facebookShareUrl = computed(
  () => `https://www.facebook.com/sharer/sharer.php?u=${encodedArticleUrl.value}`
)
const lineShareUrl = computed(
  () =>
    `https://social-plugins.line.me/lineit/share?url=${encodedArticleUrl.value}&text=${encodedArticleTitle.value}`
)
const instagramUrl = 'https://www.instagram.com/'
</script>

<template>
  <!-- 麵包屑 -->
  <nav class="bg-primary px-3 py-2 md:py-3">
    <div
      class="mx-auto flex max-w-[1296px] flex-wrap items-center gap-1 text-label-small text-neutral-0 md:gap-2 md:text-label-medium"
    >
      <NuxtLink to="/">首頁</NuxtLink>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="currentColor"
        class="size-5 md:size-6"
      >
        <path d="m549.69-480-189-189L384-692.31 596.31-480 384-267.69 360.69-291z" />
      </svg>
      <NuxtLink to="/blog">部落格</NuxtLink>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="currentColor"
        class="size-5 md:size-6"
      >
        <path d="m549.69-480-189-189L384-692.31 596.31-480 384-267.69 360.69-291z" />
      </svg>
      <span>{{ post.title }}</span>
    </div>
  </nav>
  <!-- 單篇文章正文區塊 -->
  <main class="px-3 py-10 md:py-20">
    <article class="mx-auto max-w-[1076px] text-paragraph-small md:text-paragraph-medium">
      <!-- 文章 meta，標籤與日期 -->
      <div class="mb-2 flex flex-wrap justify-between gap-2 lg:mb-4">
        <ul class="tag-list flex flex-wrap">
          <li v-for="tag in post.tags" :key="tag">
            <NuxtLink
              :to="{ path: '/blog', query: { tag } }"
              class="transition hover:text-neutral-500"
            >
              {{ tag }}
            </NuxtLink>
          </li>
        </ul>
        <time :datetime="post.date">{{ formattedDate }}</time>
      </div>
      <!-- 標題 -->
      <h1 class="mb-2 text-heading-medium lg:mb-4 lg:text-heading-xx-large">
        {{ post.title }}
      </h1>
      <!-- 摘要 -->
      <p class="mb-2 text-heading-xx-small lg:mb-4 lg:text-heading-small">
        {{ post.description }}
      </p>
      <!-- 正文 -->
      <ContentRenderer
        :value="post"
        class="blog-content [&_blockquote]:mb-7 [&_blockquote]:space-y-2 [&_blockquote]:bg-primary-50 [&_blockquote]:p-4 [&_blockquote]:text-center lg:[&_blockquote]:mb-10 lg:[&_blockquote]:p-6 [&_blockquote_p:last-child]:text-heading-xxx-small lg:[&_blockquote_p:last-child]:text-heading-x-small [&_blockquote_p]:mb-0 [&_h2]:mb-2 [&_h2]:text-heading-small lg:[&_h2]:mb-4 lg:[&_h2]:text-heading-large [&_h3]:mb-2 [&_h3]:text-heading-xx-small lg:[&_h3]:mb-4 lg:[&_h3]:text-heading-small [&_hr]:mb-2 [&_hr]:border-neutral-500 lg:[&_hr]:mb-4 [&_p]:mb-7 lg:[&_p]:mb-10 [&_table]:mb-5 [&_table]:w-full [&_table]:table-fixed [&_table]:border-collapse lg:[&_table]:mb-6 [&_tbody]:break-all [&_tbody]:bg-primary-50 [&_tbody]:text-primary [&_td]:border [&_td]:border-neutral-500 [&_td]:px-3 [&_td]:py-2 [&_td]:align-middle lg:[&_td]:px-6 lg:[&_td]:py-3 [&_th]:border [&_th]:border-neutral-500 [&_th]:px-3 [&_th]:py-2 [&_th]:text-left lg:[&_th]:px-6 lg:[&_th]:py-3 [&_thead]:bg-primary [&_thead]:text-heading-xxxx-small [&_thead]:text-neutral-0 lg:[&_thead]:text-heading-xxx-small"
      />
      <!-- 觀看數、分享數、社群分享 -->
      <div class="flex flex-col items-end gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div class="flex flex-wrap gap-3">
          <span class="flex items-center gap-1 lg:gap-2">
            <AtomIconEye class="size-5 lg:size-6" />
            {{ post.views }} views</span
          >
          <span class="flex items-center gap-1 lg:gap-2">
            <AtomIconShare class="size-5 lg:size-6" />
            {{ post.shares }} shares</span
          >
        </div>
        <div class="flex items-center gap-3 lg:gap-4">
          <span>分享</span>
          <ul class="flex gap-3 lg:gap-4">
            <li>
              <a
                :href="facebookShareUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="flex size-11 items-center justify-center rounded-full border border-neutral-700 text-neutral-700 transition hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-0 lg:size-12"
                aria-label="分享到 Facebook"
              >
                <Icon name="lucide:share-2" class="size-4 lg:size-5" />
              </a>
            </li>
            <li>
              <a
                :href="instagramUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="flex size-11 items-center justify-center rounded-full border border-neutral-700 text-neutral-700 transition hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-0 lg:size-12"
                aria-label="前往 Instagram"
              >
                <Icon name="lucide:instagram" class="size-4 lg:size-5" />
              </a>
            </li>
            <li>
              <a
                :href="lineShareUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="flex size-11 items-center justify-center rounded-full border border-neutral-700 text-neutral-700 transition hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-0 lg:size-12"
                aria-label="分享到 LINE"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  class="size-5 lg:size-6"
                >
                  <path
                    fill="currentColor"
                    d="M12 3.75c-4.97 0-9 3.25-9 7.25 0 3.52 3.12 6.46 7.26 7.12.28.06.48.31.45.59l-.18 1.72c-.04.42.42.71.77.48l2.64-1.73c.16-.1.34-.16.53-.17C18.68 18.1 21 14.84 21 11c0-4-4.03-7.25-9-7.25Z"
                  />
                  <text
                    x="12"
                    y="13.35"
                    fill="#fff"
                    font-family="Arial, Helvetica, sans-serif"
                    font-size="5.7"
                    font-weight="700"
                    letter-spacing="-0.25"
                    text-anchor="middle"
                  >
                    LINE
                  </text>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </article>
  </main>
  <section class="bg-primary-50 px-3 py-10 md:py-20">
    <div class="mx-auto max-w-[1296px]">
      <span class="text-heading-xxxx-small md:text-heading-xxx-small">相關文章</span>
      <h2 class="mb-6 text-heading-x-large md:mb-10 md:text-heading-xxx-large">RELATED BLOG</h2>
      <!-- 手機版相關文章 -->
      <Swiper :slides-per-view="1.4" :space-between="12" :loop="true" class="md:!hidden">
        <SwiperSlide v-for="relatedPost in relatedPosts" :key="relatedPost.path">
          <CommonBlogCard :post="relatedPost" variant="related" />
        </SwiperSlide>
      </Swiper>
      <!-- 電腦版相關文章 -->
      <ul class="hidden grid-cols-3 gap-6 md:grid">
        <li v-for="relatedPost in relatedPosts" :key="relatedPost.path">
          <CommonBlogCard :post="relatedPost" variant="related" />
        </li>
      </ul>
    </div>
  </section>
</template>
