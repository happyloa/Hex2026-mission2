<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const route = useRoute()
const requestUrl = useRequestURL()

const blogSlug = computed(() => {
  const slug = route.params.blog

  return Array.isArray(slug) ? slug[0] : slug
})

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

const articleUrl = computed(() => `${requestUrl.origin}${post.value.path}`)
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
        <ul
          class="flex flex-wrap [&>li:not(:last-child)::after]:mx-0.5 [&>li:not(:last-child)::after]:content-['·'] md:[&>li:not(:last-child)::after]:mx-1"
        >
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
      <h2 class="mb-2 text-heading-xx-small lg:mb-4 lg:text-heading-small">
        {{ post.description }}
      </h2>
      <!-- 正文 -->
      <ContentRenderer
        :value="post"
        class="blog-content [&_blockquote]:mb-7 [&_blockquote]:space-y-2 [&_blockquote]:bg-primary-50 [&_blockquote]:p-4 [&_blockquote]:text-center lg:[&_blockquote]:mb-10 lg:[&_blockquote]:p-6 [&_blockquote_p:last-child]:text-heading-xxx-small lg:[&_blockquote_p:last-child]:text-heading-x-small [&_blockquote_p]:mb-0 [&_h2]:mb-2 [&_h2]:text-heading-small lg:[&_h2]:mb-4 lg:[&_h2]:text-heading-large [&_h3]:mb-2 [&_h3]:text-heading-xx-small lg:[&_h3]:mb-4 lg:[&_h3]:text-heading-small [&_hr]:mb-2 [&_hr]:border-neutral-500 lg:[&_hr]:mb-4 [&_p]:mb-7 lg:[&_p]:mb-10 [&_table]:mb-5 [&_table]:w-full [&_table]:table-fixed [&_table]:border-collapse lg:[&_table]:mb-6 [&_tbody]:break-all [&_tbody]:bg-primary-50 [&_tbody]:text-primary [&_td]:border [&_td]:border-neutral-500 [&_td]:px-3 [&_td]:py-2 [&_td]:align-middle lg:[&_td]:px-6 lg:[&_td]:py-3 [&_th]:border [&_th]:border-neutral-500 [&_th]:px-3 [&_th]:py-2 [&_th]:text-left lg:[&_th]:px-6 lg:[&_th]:py-3 [&_thead]:bg-primary [&_thead]:text-heading-xxxx-small [&_thead]:text-neutral-0 lg:[&_thead]:text-heading-xxx-small"
      />
      <!-- 觀看數、分享數、社群分享 -->
      <div class="flex flex-col items-end gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div class="flex flex-wrap gap-3">
          <span class="flex items-center gap-1 lg:gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="#404040"
              class="size-5 lg:size-6"
            >
              <path
                d="M587.08-373.01q44-44.09 44-107.08 0-62.99-44.09-106.99-44.09-44-107.08-44-62.99 0-106.99 44.09-44 44.09-44 107.08 0 62.99 44.09 106.99 44.09 44 107.08 44 62.99 0 106.99-44.09ZM412-412q-28-28-28-68t28-68q28-28 68-28t68 28q28 28 28 68t-28 68q-28 28-68 28t-68-28ZM234.62-285.12Q124.16-358.23 69.54-480q54.62-121.77 165.02-194.88Q344.97-748 479.95-748q134.97 0 245.43 73.12Q835.84-601.77 890.46-480q-54.62 121.77-165.02 194.88Q615.03-212 480.05-212q-134.97 0-245.43-73.12ZM480-480Zm207 158q95-58 146-158-51-100-146-158t-207-58q-112 0-207 58T127-480q51 100 146 158t207 58q112 0 207-58Z"
              />
            </svg>
            {{ post.views }} views</span
          >
          <span class="flex items-center gap-1 lg:gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="#404040"
              class="size-5 lg:size-6"
            >
              <path
                d="M640.22-116q-44.91 0-76.26-31.41-31.34-31.41-31.34-76.28 0-9 5.15-30.16L297.31-402.31q-14.46 14-33.41 22-18.94 8-40.59 8-44.71 0-76.01-31.54Q116-435.39 116-480q0-44.61 31.3-76.15 31.3-31.54 76.01-31.54 21.74 0 40.64 8 18.9 8 33.36 22l240.46-148.08q-2.38-7.38-3.77-14.77-1.38-7.39-1.38-15.77 0-44.87 31.43-76.28Q595.49-844 640.4-844t76.25 31.44Q748-781.13 748-736.22q0 44.91-31.41 76.26-31.41 31.34-76.28 31.34-21.85 0-40.5-8.19Q581.15-645 566.69-659L326.23-510.54q2.38 7.39 3.77 14.77 1.38 7.39 1.38 15.77 0 8.38-1.38 15.77-1.39 7.38-3.77 14.77L566.69-301q14.46-14 33.16-22.19 18.7-8.19 40.46-8.19 44.87 0 76.28 31.43Q748-268.51 748-223.6t-31.44 76.25Q685.13-116 640.22-116Zm.09-52q23.67 0 39.68-16.01Q696-200.02 696-223.69q0-23.67-16.01-39.68-16.01-16.02-39.68-16.02-23.67 0-39.68 16.02-16.02 16.01-16.02 39.68 0 23.67 16.02 39.68Q616.64-168 640.31-168Zm-417-256.31q23.83 0 39.95-16.3 16.13-16.31 16.13-39.39 0-23.08-16.13-39.39-16.12-16.3-39.95-16.3-23.51 0-39.41 16.3Q168-503.08 168-480q0 23.08 15.9 39.39 15.9 16.3 39.41 16.3Zm456.38-272.32Q696-712.64 696-736.31q0-23.67-16.01-39.68Q663.98-792 640.31-792q-23.67 0-39.68 16.01-16.02 16.01-16.02 39.68 0 23.67 16.31 39.68 16.31 16.02 39.39 16.02 23.07 0 39.38-16.02Zm-39.38 472.94ZM223.69-480Zm416.62-256.31Z"
              />
            </svg>
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
      <Swiper :slides-per-view="1.4" :space-between="12" class="md:hidden">
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
