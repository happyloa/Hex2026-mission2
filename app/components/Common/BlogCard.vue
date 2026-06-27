<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true
  },
  variant: {
    type: String,
    default: 'list',
    validator: (value) => ['list', 'related'].includes(value)
  }
})

const formattedDate = computed(() => {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(`${props.post.date}T00:00:00`))
})

const articleClass = computed(() => {
  if (props.variant === 'related') {
    return ''
  }

  return 'flex flex-col gap-2 md:items-center md:gap-6 lg:flex-row'
})

const imageClass = computed(() => {
  if (props.variant === 'related') {
    return 'mb-2 block h-[150px] md:h-[240px] md:mb-3'
  }

  return 'h-[200px] lg:h-[256px] lg:max-w-[526px]'
})
</script>

<template>
  <NuxtLink :to="post.path">
    <article :class="articleClass">
      <img :src="post.image" :alt="post.title" class="w-full object-cover" :class="imageClass" />
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
          class="flex flex-wrap justify-between gap-2 whitespace-nowrap text-paragraph-x-small md:text-paragraph-small lg:gap-6"
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
