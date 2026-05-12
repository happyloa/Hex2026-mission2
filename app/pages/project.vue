<script setup>
// 專案卡片與 modal 共用 app/data/projects.js 的資料。
import { projects } from '../data/projects'

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
