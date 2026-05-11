<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'filled',
    validator: (value) => ['filled', 'outline'].includes(value)
  },
  color: {
    type: String,
    default: 'neutral',
    validator: (value) => ['neutral', 'white'].includes(value)
  },
  type: {
    type: String,
    default: 'button',
    validator: (value) => ['button', 'submit', 'reset'].includes(value)
  },
  full: {
    type: Boolean,
    default: false
  }
})

const baseClass =
  'rounded-full px-5 py-3 text-label-small transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 md:px-6 md:text-label-medium'

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

const buttonClass = computed(() => [
  baseClass,
  variantClasses[props.variant][props.color],
  props.full && 'w-full'
])
</script>

<template>
  <button :type="type" :class="buttonClass">
    <slot />
  </button>
</template>
