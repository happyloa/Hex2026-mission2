<script setup>
const requestUrl = useRequestURL()

useSeoMeta(
  getPageSeo({
    title: '專案作品',
    description:
      '瀏覽 Nelson 的專案作品，包含品牌識別、UIUX 設計、RWD 網站開發與數位產品介面規劃。',
    origin: requestUrl.origin,
    path: '/project'
  })
)

// tab 的「全部」狀態不寫進網址，讓 /project 保持為預設列表。
const ALL_PROJECTS_LABEL = '全部'

const route = useRoute()
const router = useRouter()

// 專案卡片與 modal 會共用這份資料，之後首頁需要時可以再抽成共用資料檔。
const projects = [
  {
    id: 1,
    images: {
      mobile: '/img/project/mobile/project_1.webp',
      desktop: '/img/project/desktop/project_1.webp'
    },
    datetime: '2025-10-16',
    date: 'Oct 16, 2025',
    tags: ['平面設計', '網頁設計'],
    title: '品牌視覺與電商整合，多肉植物品牌電商建置',
    description: '從品牌識別設計到 RWD 網站開發，打造療癒系植栽購物體驗'
  },
  {
    id: 2,
    images: {
      mobile: '/img/project/mobile/project_2.webp',
      desktop: '/img/project/desktop/project_2.webp'
    },
    datetime: '2025-10-16',
    date: 'Oct 16, 2025',
    tags: ['平面設計', '網頁設計', '前端切版'],
    title: '數位產品 UI/UX 設計，個人化財務視覺化軟體',
    description: '運用數據視覺化邏輯，將複雜的財務數據轉化為直覺的操作介面'
  },
  {
    id: 3,
    images: {
      mobile: '/img/project/mobile/project_3.webp',
      desktop: '/img/project/desktop/project_3.webp'
    },
    datetime: '2025-10-16',
    date: 'Oct 16, 2025',
    tags: ['前端切版', '後端開發'],
    title: '品牌識別與包裝設計，法式甜點品牌視覺重塑',
    description: '以溫暖、輕盈的視覺語言，精準定位高質感甜點市場的品牌形象'
  },
  {
    id: 4,
    images: {
      mobile: '/img/project/mobile/project_4.webp',
      desktop: '/img/project/desktop/project_4.webp'
    },
    datetime: '2025-10-16',
    date: 'Oct 16, 2025',
    tags: ['網頁設計', '前端切版', '後端開發'],
    title: '金融科技系統設計，Open Bank API 數據整合平台',
    description: '串接第三方 API 並規劃穩定的後端架構，建構安全的資產管理後台。'
  }
]

// 依據專案標籤自動產生 tab，避免分類名稱需要在畫面與資料中維護兩次。
const projectTabs = computed(() => [
  ALL_PROJECTS_LABEL,
  ...new Set(projects.flatMap((project) => project.tags))
])

// 目前選取的 tab 以網址的 tag 參數為準，沒有參數時回到「全部」。
const activeProjectTab = computed(() => {
  const tag = route.query.tag

  return typeof tag === 'string' && tag ? tag : ALL_PROJECTS_LABEL
})

// 如果網址帶了不存在的 tag，會得到空陣列，交給 template 顯示 fallback。
const filteredProjects = computed(() => {
  if (activeProjectTab.value === ALL_PROJECTS_LABEL) {
    return projects
  }

  return projects.filter((project) => project.tags.includes(activeProjectTab.value))
})

// 切換 tab 時同步更新網址；切回「全部」則移除 tag 參數。
const setProjectTab = (tab) => {
  const query = { ...route.query }

  if (tab === ALL_PROJECTS_LABEL) {
    delete query.tag
  } else {
    query.tag = tab
  }

  router.push({ query })
}

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
</script>

<template>
  <LayoutBanner />
  <nav class="px-3 py-6 md:py-10">
    <ul
      class="mx-auto flex max-w-[1296px] overflow-x-auto whitespace-nowrap text-center text-heading-xxx-small [scrollbar-width:none] md:text-heading-xx-small"
    >
      <li v-for="tab in projectTabs" :key="tab" class="flex-1">
        <button
          type="button"
          class="w-full px-3 py-2 transition hover:bg-primary hover:text-neutral-0 md:py-3"
          :class="{ 'bg-primary text-neutral-0': activeProjectTab === tab }"
          @click="setProjectTab(tab)"
        >
          {{ tab }}
        </button>
      </li>
    </ul>
  </nav>
  <section class="flex flex-col gap-10 px-3 pb-10 md:gap-20 md:pb-20">
    <ul v-if="filteredProjects.length" class="mx-auto w-full max-w-[1296px] space-y-3 md:space-y-6">
      <!-- 專案列表 -->
      <li v-for="project in filteredProjects" :key="project.id">
        <CommonProjectCard :project="project" @open="openProjectModal" />
      </li>
    </ul>
    <CommonProjectFallback v-else />
    <AtomButton class="self-center">探索更多</AtomButton>
  </section>

  <LayoutProjectModal
    :open="isProjectModalOpen"
    :project="selectedProject"
    @close="closeProjectModal"
  />
</template>
