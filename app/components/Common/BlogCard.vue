<script setup lang="ts">
import type { BlogSummary } from '~/composables/useBlogIndex'

const {
  post,
  variant = 'list',
  eager = false
} = defineProps<{
  post: BlogSummary
  variant?: 'list' | 'related'
  eager?: boolean
}>()

const formattedDate = computed(() => formatPostDate(post.date))

const articleClass = computed(() => {
  if (variant === 'related') {
    return ''
  }

  return 'flex flex-col gap-2 md:items-center md:gap-6 lg:flex-row'
})

const imageClass = computed(() => {
  if (variant === 'related') {
    return 'mb-2 block h-37.5 md:h-60 md:mb-3'
  }

  return 'h-50 lg:h-64 lg:max-w-131.5'
})
</script>

<template>
  <NuxtLink :to="getArticlePath(post.path)">
    <article :class="articleClass">
      <CommonSiteImage
        :src="post.image"
        :alt="post.title"
        :loading="eager ? 'eager' : 'lazy'"
        :sizes="
          variant === 'related'
            ? '(min-width: 768px) 416px, 72vw'
            : '(min-width: 1024px) 526px, (min-width: 768px) calc(100vw - 244px), calc(100vw - 24px)'
        "
        class="w-full object-cover"
        :class="imageClass"
      />
      <div class="space-y-2 md:space-y-3">
        <!-- 文章標籤 -->
        <ul class="tag-list flex flex-wrap text-paragraph-small md:text-paragraph-medium">
          <li v-for="tag in post.tags" :key="tag">{{ tag }}</li>
        </ul>
        <!-- 標題 -->
        <component
          :is="variant === 'related' ? 'h3' : 'h2'"
          class="text-heading-x-small md:text-heading-small"
        >
          {{ post.title }}
        </component>
        <!-- meta -->
        <div
          class="flex flex-wrap justify-between gap-2 text-paragraph-x-small whitespace-nowrap md:text-paragraph-small lg:gap-6"
        >
          <time :datetime="post.date">{{ formattedDate }}</time>
          <!-- 觀看數與分享數 -->
          <div class="flex flex-wrap gap-2 md:gap-3">
            <span class="flex items-center gap-1">
              <AtomIconEye class="size-5" />
              {{ post.views }} views</span
            >
            <span class="flex items-center gap-1">
              <AtomIconShare class="size-5" />
              {{ post.shares }} shares</span
            >
          </div>
        </div>
      </div>
    </article>
  </NuxtLink>
</template>
