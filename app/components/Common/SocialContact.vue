<script setup>
defineProps({
  size: {
    type: String,
    default: 'sm',
    validator: (v) => ['sm', 'md'].includes(v)
  }
})

const socialLinks = [
  { label: 'Instagram', icon: 'simple-icons:instagram', to: '#' },
  { label: 'LINE', icon: 'simple-icons:line', to: '#' },
  { label: 'LinkedIn', icon: 'simple-icons:linkedin', to: '#' },
  {
    label: 'GitHub',
    icon: 'simple-icons:github',
    to: 'https://github.com/happyloa/Hex2026-mission2'
  }
]
</script>

<template>
  <ul
    :class="['flex gap-3', size === 'md' ? 'mb-6' : 'mb-3 flex-wrap']"
    aria-label="社群連結"
  >
    <li v-for="link in socialLinks" :key="link.label">
      <a
        :href="link.to"
        target="_blank"
        rel="noopener noreferrer"
        :class="[
          'flex items-center justify-center rounded-full border border-neutral-0 text-neutral-0 transition hover:bg-neutral-0 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-0',
          size === 'md' ? 'size-12' : 'size-11'
        ]"
        :aria-label="link.label"
      >
        <Icon :name="link.icon" class="size-4" />
      </a>
    </li>
  </ul>
  <a
    href="mailto:service@hexschool.com"
    :class="[
      'flex items-center gap-2 transition hover:text-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-0',
      size === 'md' ? 'w-fit text-paragraph-medium' : 'text-paragraph-small'
    ]"
  >
    <Icon name="lucide:mail-open" :class="size === 'md' ? 'size-6' : 'size-4'" />
    service@hexschool.com
  </a>
</template>
