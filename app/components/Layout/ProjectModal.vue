<script setup lang="ts">
import type { Project } from '~/types'

const { open = false, project = null } = defineProps<{
  open?: boolean
  project?: Project | null
}>()

const emit = defineEmits<{ close: [] }>()

const { app } = useRuntimeConfig()
const closeButton = useTemplateRef('close-button')
const imageStyle = computed(() =>
  project
    ? {
        '--project-modal-mobile-image': toCssImage(project.images.mobile, app.baseURL),
        '--project-modal-desktop-image': toCssImage(project.images.desktop, app.baseURL)
      }
    : undefined
)

// 開啟期間將頁面主體設為 inert，讓鍵盤焦點與螢幕閱讀器只停留在 modal 內，
// 並鎖住背景捲動；關閉時全部還原，並把焦點交還給開啟 modal 的按鈕。
let previousFocus: HTMLElement | null = null
let previousBodyOverflow = ''
let isActive = false

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') emit('close')
}

const setPageInert = (inert: boolean) => {
  const page = document.getElementById('__nuxt')
  if (page) page.inert = inert
}

const activate = () => {
  if (isActive) return
  isActive = true
  previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
  previousBodyOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'
  setPageInert(true)
  window.addEventListener('keydown', handleKeydown)
  nextTick(() => closeButton.value?.focus())
}

const deactivate = () => {
  if (!isActive) return
  isActive = false
  window.removeEventListener('keydown', handleKeydown)
  setPageInert(false)
  document.body.style.overflow = previousBodyOverflow
  previousFocus?.focus()
  previousFocus = null
}

watch(
  () => open && !!project,
  (isOpen) => (isOpen ? activate() : deactivate())
)

onBeforeUnmount(deactivate)
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="open && project" class="fixed inset-0 z-100">
        <!-- 遮罩 -->
        <div class="absolute inset-0 bg-dark-60a" @click="$emit('close')"></div>

        <!-- modal 內容 -->
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          class="absolute top-1/2 left-1/2 mx-auto max-h-[85dvh] w-[calc(100%-24px)] max-w-269 -translate-x-1/2 -translate-y-1/2 overflow-y-auto md:max-h-[90vh]"
        >
          <!-- 關閉 modal 的按鈕 -->
          <div class="sticky top-0 flex justify-end bg-neutral-0 px-3 py-2 md:px-6 md:py-3">
            <button
              ref="close-button"
              type="button"
              class="size-11 p-3 md:size-12"
              aria-label="關閉專案視窗"
              @click="$emit('close')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#404040"
                class="size-5 md:size-6"
                aria-hidden="true"
              >
                <path
                  d="M256-227.69 227.69-256l224-224-224-224L256-732.31l224 224 224-224L732.31-704l-224 224 224 224L704-227.69l-224-224-224 224Z"
                />
              </svg>
            </button>
          </div>
          <!-- 專案圖片 -->
          <div
            class="h-73.5 bg-(image:--project-modal-mobile-image) bg-cover bg-center md:bg-(image:--project-modal-desktop-image)"
            :style="imageStyle"
          ></div>
          <!-- 專案介紹 -->
          <div
            class="space-y-5 bg-neutral-0 px-3 py-6 text-paragraph-small md:space-y-6 md:p-10 md:text-paragraph-medium"
          >
            <!-- 標籤與時間 -->
            <div class="flex flex-wrap justify-between gap-2">
              <ul class="tag-list flex">
                <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
              </ul>
              <time :datetime="project.datetime" class="whitespace-nowrap"
                >{{ project.date }}
              </time>
            </div>
            <!-- 名稱與描述 -->
            <div class="text-balance">
              <h2
                id="modal-project-title"
                class="mb-2 text-heading-small md:mb-3 md:text-heading-medium"
              >
                {{ project.title }}
              </h2>
              <p>{{ project.description }}</p>
            </div>
            <!-- 內容、設計原則、開發方式 -->
            <div class="flex flex-col items-center gap-5 text-neutral-500 md:flex-row md:gap-6">
              <p class="md:max-w-159.5">
                {{ project.modal.content }}
              </p>
              <div class="hidden h-12 border-l border-neutral-500 md:block"></div>
              <hr class="w-full border-neutral-500 md:hidden" />
              <ul class="space-y-1 self-start md:self-center md:whitespace-nowrap">
                <li>設計原則：{{ project.modal.designPrinciple }}</li>
                <li>開發方式：{{ project.modal.development }}</li>
              </ul>
            </div>
          </div>
          <!-- 專案完整截圖 -->
          <section class="bg-primary-50 px-3 py-10 md:py-20">
            <CommonSiteImage
              :src="project.modal.image"
              :alt="project.title"
              class="mx-auto block h-auto max-w-full"
              loading="eager"
              sizes="(min-width: 1076px) 996px, calc(100vw - 48px)"
            />
          </section>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
