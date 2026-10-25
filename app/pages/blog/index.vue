<script setup>
const requestUrl = useRequestURL()
const runtimeConfig = useRuntimeConfig()
const siteOrigin = resolveSiteOrigin(runtimeConfig.public.siteUrl, requestUrl.origin)

useSeoMeta(
  getPageSeo({
    title: '部落格',
    description:
      '閱讀 UIUX 設計、前端技術、設計規範與 AI 趨勢應用文章，整理數位產品設計與開發的實務觀點。',
    origin: siteOrigin,
    baseURL: runtimeConfig.app.baseURL,
    path: '/blog'
  })
)

const ALL_BLOGS_LABEL = '全部'

const blogTabs = [
  ALL_BLOGS_LABEL,
  '品牌設計',
  '平面設計',
  'UIUX 設計',
  '網頁設計',
  '設計規範',
  '前端技術',
  '後端架構',
  'AI 趨勢應用'
]

const route = useRoute()
const router = useRouter()

const { data: posts, status: postsStatus } = await useBlogIndex()

const isPostsPending = computed(
  () => postsStatus.value === 'idle' || postsStatus.value === 'pending'
)

// 目前選取的 tab 以網址的 tag 參數為準，沒有參數時回到「全部」。
const activeBlogTab = computed(() => {
  const tag = route.query.tag

  return typeof tag === 'string' && tag ? tag : ALL_BLOGS_LABEL
})

// 如果網址帶了不存在或目前沒有文章的 tag，會得到空陣列並顯示 fallback。
const filteredPosts = computed(() => {
  const allPosts = posts.value ?? []

  if (activeBlogTab.value === ALL_BLOGS_LABEL) {
    return allPosts
  }

  return allPosts.filter((post) => post.tags.includes(activeBlogTab.value))
})

// 切換 tab 時同步更新網址；切回「全部」則移除 tag 參數。
const setBlogTab = (tab) => {
  const query = { ...route.query }

  if (tab === ALL_BLOGS_LABEL) {
    delete query.tag
  } else {
    query.tag = tab
  }

  router.push({ query })
}
</script>

<template>
  <LayoutBanner
    title="部落格"
    heading="BLOGS"
    mobile-image="/img/blog/mobile/blog_banner.webp"
    desktop-image="/img/blog/desktop/blog_banner.webp"
    decoration-text="BLOG"
    show-decoration
  />
  <section class="px-3 py-10 md:py-20">
    <div class="mx-auto flex max-w-[1296px] flex-col gap-6 md:flex-row md:gap-10">
      <aside class="top-20 min-w-0 md:sticky md:w-[180px] md:self-start">
        <nav>
          <ul
            class="text-heading-xxx-small md:text-heading-xx-small flex [scrollbar-width:none] overflow-x-auto text-center whitespace-nowrap md:flex-col [&::-webkit-scrollbar]:hidden"
          >
            <li v-for="tab in blogTabs" :key="tab" class="shrink-0 md:shrink">
              <button
                type="button"
                class="hover:bg-primary hover:text-neutral-0 w-full px-3 py-2 transition md:py-3"
                :class="{ 'bg-primary text-neutral-0': activeBlogTab === tab }"
                @click="setBlogTab(tab)"
              >
                {{ tab }}
              </button>
            </li>
          </ul>
        </nav>
      </aside>
      <main class="min-w-0 flex-1 space-y-20">
        <ul v-if="filteredPosts.length" class="space-y-6">
          <!-- 文章列表 -->
          <li v-for="(post, index) in filteredPosts" :key="post.path">
            <CommonBlogCard :post="post" :eager="index === 0" />
          </li>
        </ul>
        <CommonEmptyState
          v-else-if="!isPostsPending"
          title="目前沒有符合的文章"
          description="可以切回全部，或選擇其它分類看看。"
        />
        <!-- 換頁按鈕 -->
        <nav class="flex justify-center md:justify-end">
          <ul class="flex items-center gap-4">
            <li>
              <button
                type="button"
                aria-label="上一頁"
                class="hover:bg-neutral hover:text-neutral-0 flex size-11 items-center justify-center rounded-full transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 -960 960 960"
                  width="20"
                  fill="currentColor"
                >
                  <path d="M576-267.69 363.69-480 576-692.31 599.31-669l-189 189 189 189z" />
                </svg>
              </button>
            </li>
            <li>
              <button
                type="button"
                class="bg-neutral text-neutral-0 flex size-11 items-center justify-center rounded-full transition"
              >
                1
              </button>
            </li>
            <li>
              <button
                type="button"
                class="hover:bg-neutral hover:text-neutral-0 flex size-11 items-center justify-center rounded-full transition"
              >
                2
              </button>
            </li>
            <li class="hidden md:block">
              <button
                type="button"
                class="hover:bg-neutral hover:text-neutral-0 flex size-11 items-center justify-center rounded-full transition"
              >
                3
              </button>
            </li>
            <li>
              <button
                type="button"
                class="hover:bg-neutral hover:text-neutral-0 flex size-11 items-center justify-center rounded-full transition"
              >
                ...
              </button>
            </li>
            <li>
              <button
                type="button"
                class="hover:bg-neutral hover:text-neutral-0 flex size-11 items-center justify-center rounded-full transition"
              >
                20
              </button>
            </li>
            <li>
              <button
                type="button"
                aria-label="下一頁"
                class="hover:bg-neutral hover:text-neutral-0 flex size-11 items-center justify-center rounded-full transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 -960 960 960"
                  width="20"
                  fill="currentColor"
                >
                  <path d="m549.69-480-189-189L384-692.31 596.31-480 384-267.69 360.69-291z" />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  </section>
  <LayoutSubscription />
</template>
