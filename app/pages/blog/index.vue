<script setup>
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

const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog').order('date', 'DESC').all()
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
            class="flex overflow-x-auto whitespace-nowrap text-center text-heading-xxx-small [scrollbar-width:none] md:flex-col md:text-heading-xx-small [&::-webkit-scrollbar]:hidden"
          >
            <li v-for="tab in blogTabs" :key="tab" class="shrink-0 md:shrink">
              <button
                type="button"
                class="w-full px-3 py-2 transition hover:bg-primary hover:text-neutral-0 md:py-3"
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
          <li v-for="post in filteredPosts" :key="post.path">
            <CommonBlogCard :post="post" />
          </li>
        </ul>
        <CommonBlogFallback v-else />
        <!-- 換頁按鈕 -->
        <nav class="flex justify-center md:justify-end">
          <ul class="flex items-center gap-4">
            <li>
              <button
                type="button"
                class="flex size-11 items-center justify-center rounded-full transition hover:bg-neutral hover:text-neutral-0"
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
                class="flex size-11 items-center justify-center rounded-full transition hover:bg-neutral hover:text-neutral-0"
              >
                1
              </button>
            </li>
            <li>
              <button
                type="button"
                class="flex size-11 items-center justify-center rounded-full transition hover:bg-neutral hover:text-neutral-0"
              >
                2
              </button>
            </li>
            <li class="hidden md:block">
              <button
                type="button"
                class="flex size-11 items-center justify-center rounded-full transition hover:bg-neutral hover:text-neutral-0"
              >
                3
              </button>
            </li>
            <li>
              <button
                type="button"
                class="flex size-11 items-center justify-center rounded-full transition hover:bg-neutral hover:text-neutral-0"
              >
                ...
              </button>
            </li>
            <li>
              <button
                type="button"
                class="flex size-11 items-center justify-center rounded-full transition hover:bg-neutral hover:text-neutral-0"
              >
                20
              </button>
            </li>
            <li>
              <button
                type="button"
                class="flex size-11 items-center justify-center rounded-full transition hover:bg-neutral hover:text-neutral-0"
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
