<script setup lang="ts">
// 專案卡片與 modal 共用 app/data/projects.ts 的資料。
import { projects } from '~/data/projects'
import type { Project } from '~/types'

const requestUrl = useRequestURL()
const runtimeConfig = useRuntimeConfig()
const siteOrigin = resolveSiteOrigin(runtimeConfig.public.siteUrl, requestUrl.origin)

useSeoMeta(
  getPageSeo({
    title: '專案作品',
    description:
      '瀏覽 Nelson 的專案作品，包含品牌識別、UIUX 設計、RWD 網站開發與數位產品介面規劃。',
    origin: siteOrigin,
    baseURL: runtimeConfig.app.baseURL,
    path: '/project'
  })
)

const { activeTag: activeProjectTab, setTag: setProjectTab } = useTagQuery()

// 依據專案標籤自動產生 tab，避免分類名稱需要在畫面與資料中維護兩次。
const projectTabs = [ALL_TAGS_LABEL, ...new Set(projects.flatMap((project) => project.tags))]

// 如果網址帶了不存在的 tag，會得到空陣列，交給 template 顯示 fallback。
const filteredProjects = computed(() => {
  if (activeProjectTab.value === ALL_TAGS_LABEL) {
    return projects
  }

  return projects.filter((project) => project.tags.includes(activeProjectTab.value))
})

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
</script>

<template>
  <LayoutBanner />
  <nav class="px-3 py-6 md:py-10" aria-label="專案分類">
    <ul
      class="mx-auto flex max-w-324 scrollbar-none overflow-x-auto text-center text-heading-xxx-small whitespace-nowrap md:text-heading-xx-small"
    >
      <li v-for="tab in projectTabs" :key="tab" class="flex-1">
        <button
          type="button"
          class="w-full px-3 py-2 transition hover:bg-primary hover:text-neutral-0 md:py-3"
          :class="{ 'bg-primary text-neutral-0': activeProjectTab === tab }"
          :aria-pressed="activeProjectTab === tab"
          @click="setProjectTab(tab)"
        >
          {{ tab }}
        </button>
      </li>
    </ul>
  </nav>
  <main class="flex flex-col gap-10 px-3 pb-10 md:gap-20 md:pb-20">
    <ul v-if="filteredProjects.length" class="mx-auto w-full max-w-324 space-y-3 md:space-y-6">
      <!-- 專案列表 -->
      <li v-for="project in filteredProjects" :key="project.id">
        <CommonProjectCard :project="project" @open="openProjectModal" />
      </li>
    </ul>
    <CommonEmptyState
      v-else
      class="mx-auto w-full max-w-324"
      title="目前沒有符合的專案"
      description="可以切回全部，或選擇其它分類看看。"
    />
    <AtomButton class="self-center">探索更多</AtomButton>
  </main>

  <LayoutProjectModal
    :open="isProjectModalOpen"
    :project="selectedProject"
    @close="closeProjectModal"
  />
</template>
