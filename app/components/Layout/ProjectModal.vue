<script setup>
defineProps({
  open: {
    type: Boolean,
    default: false
  },
  project: {
    type: Object,
    default: null
  }
})

defineEmits(['close'])
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
      <div v-if="open && project" class="fixed inset-0 z-[100]">
        <!-- 遮罩 -->
        <div class="absolute inset-0 bg-dark-60a" @click="$emit('close')"></div>

        <!-- modal 內容 -->
        <div
          role="dialog"
          aria-modal="true"
          class="absolute left-1/2 top-1/2 mx-auto max-h-[90vh] w-[calc(100%-24px)] max-w-[1076px] -translate-x-1/2 -translate-y-1/2 overflow-y-auto"
        >
          <!-- 關閉 modal 的按鈕 -->
          <div class="sticky top-0 flex justify-end bg-neutral-0 px-3 py-2 md:px-6 md:py-3">
            <button
              class="size-11 p-3 md:size-12"
              aria-label="關閉專案視窗"
              @click="$emit('close')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#404040"
                class="size-5 md:size-6"
              >
                <path
                  d="M256-227.69 227.69-256l224-224-224-224L256-732.31l224 224 224-224L732.31-704l-224 224 224 224L704-227.69l-224-224-224 224Z"
                />
              </svg>
            </button>
          </div>
          <!-- 專案圖片 -->
          <div
            class="h-[294px] bg-[image:var(--project-modal-mobile-image)] bg-cover bg-center md:bg-[image:var(--project-modal-desktop-image)]"
            :style="{
              '--project-modal-mobile-image': `url(${project.images.mobile})`,
              '--project-modal-desktop-image': `url(${project.images.desktop})`
            }"
          ></div>
          <!-- 專案介紹 -->
          <main
            class="space-y-5 bg-neutral-0 px-3 py-6 text-paragraph-small md:space-y-6 md:p-10 md:text-paragraph-medium"
          >
            <!-- 標籤與時間 -->
            <div class="flex justify-between">
              <ul
                class="flex flex-wrap [&>li:not(:last-child)::after]:mx-0.5 [&>li:not(:last-child)::after]:content-['·'] md:[&>li:not(:last-child)::after]:mx-1"
              >
                <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
              </ul>
              <time :datetime="project.datetime">{{ project.date }} </time>
            </div>
            <!-- 名稱與描述 -->
            <div class="text-balance">
              <h2 class="mb-2 text-heading-small md:mb-3 md:text-heading-medium">
                {{ project.title }}
              </h2>
              <p>{{ project.description }}</p>
            </div>
            <!-- 內容、設計原則、開發方式 -->
            <div class="flex flex-col items-center gap-5 text-neutral-500 md:flex-row md:gap-6">
              <p class="md:max-w-[638px]">
                我們將大自然的平靜感轉化為數位語彙，透過揉合大地色系與極簡排版，為「PLANTIQUE
                LIFE」建構出專屬的視覺靈魂。在開發過程中，我們秉持對細節的極致追求，確保從品牌 Logo
                到每一個組件的轉場，皆展現像素級的精準。
              </p>
              <div class="hidden h-12 border-l border-neutral-500 md:block"></div>
              <hr class="w-full border-neutral-500 md:hidden" />
              <ul class="space-y-1 self-start md:self-center md:whitespace-nowrap">
                <li>設計原則：植栽藝術、日系風格、暖陽視覺</li>
                <li>開發方式：Bootstrap、Javascript</li>
              </ul>
            </div>
          </main>
          <!-- 專案完整截圖 -->
          <section class="bg-primary-50 px-3 py-10 md:py-20">
            <img
              src="/img/project/project_modal_pic.webp"
              :alt="project.title"
              class="mx-auto block"
            />
          </section>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
