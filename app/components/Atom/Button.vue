<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const {
  to,
  variant = 'filled',
  color = 'neutral',
  type = 'button',
  full = false
} = defineProps<{
  to?: RouteLocationRaw
  variant?: 'filled' | 'outline'
  color?: 'neutral' | 'white'
  type?: 'button' | 'submit' | 'reset'
  full?: boolean
}>()

const baseClass =
  'inline-flex items-center justify-center rounded-full px-5 py-3 text-label-small transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 md:px-6 md:text-label-medium'

const variantClasses = {
  filled: {
    neutral: 'bg-neutral text-neutral-0 hover:bg-neutral-900 focus-visible:outline-neutral',
    white: 'bg-neutral-0 text-neutral hover:bg-primary-50 focus-visible:outline-neutral-0'
  },
  outline: {
    neutral:
      'border border-neutral bg-transparent text-neutral hover:bg-primary-50 focus-visible:outline-neutral',
    white:
      'border border-neutral-0 bg-transparent text-neutral-0 hover:bg-neutral-900 focus-visible:outline-neutral-0'
  }
}

const buttonClass = computed(() => [baseClass, variantClasses[variant][color], full && 'w-full'])
</script>

<template>
  <NuxtLink v-if="to" :to="to" :class="buttonClass">
    <slot />
  </NuxtLink>
  <button v-else :type="type" :class="buttonClass">
    <slot />
  </button>
</template>
