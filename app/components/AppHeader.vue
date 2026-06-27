<script setup>
const navLinks = [
  { label: '服務項目', to: '/service' },
  { label: '專案作品', to: '/project' },
  { label: '部落格', to: '/blog' }
]

const navLinkClass = 'px-3 py-1 text-label-medium transition hover:text-primary'

const isMenuOpen = ref(false)

// 保存原本的 body overflow，避免關閉選單時覆蓋頁面其他地方的設定。
let originalBodyOverflow = ''

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const lockBodyScroll = () => {
  if (import.meta.server) return

  originalBodyOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'
}

const unlockBodyScroll = () => {
  if (import.meta.server) return

  document.body.style.overflow = originalBodyOverflow
}

// 手機選單打開時鎖住背景捲動，關閉或離開元件時恢復。
const syncBodyScrollLock = (shouldLock) => {
  if (shouldLock) {
    lockBodyScroll()
  } else {
    unlockBodyScroll()
  }
}

const handleKeydown = (event) => {
  if (event.key === 'Escape' && isMenuOpen.value) {
    closeMenu()
  }
}

watch(isMenuOpen, syncBodyScrollLock)

// 閱讀進度條相關邏輯
const route = useRoute()
// 判斷當前頁面是否為部落格單頁 (例如: /blog/ai-interface-design-workflow)
const isBlogSinglePage = computed(() => route.path.startsWith('/blog/'))

const scrollPercent = ref(0)
let isListening = false

// 計算當前的捲動進度百分比
const updateScrollProgress = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  if (docHeight > 0) {
    scrollPercent.value = Math.min((scrollTop / docHeight) * 100, 100)
  } else {
    scrollPercent.value = 0
  }
}

// 註冊捲動接聽器 (限客戶端)
const addScrollListener = () => {
  if (isListening || import.meta.server) return
  window.addEventListener('scroll', updateScrollProgress, { passive: true })
  isListening = true
  updateScrollProgress()
}

// 移除捲動接聽器並重設進度百分比
const removeScrollListener = () => {
  if (!isListening || import.meta.server) return
  window.removeEventListener('scroll', updateScrollProgress)
  isListening = false
  scrollPercent.value = 0
}

// 監聽路由變化，若切換到部落格單頁則註冊捲動接聽，切出則移除
watch(
  isBlogSinglePage,
  (isSingle) => {
    if (isSingle) {
      if (import.meta.client) {
        nextTick(() => {
          addScrollListener()
        })
      }
    } else {
      removeScrollListener()
    }
  }
)

onMounted(() => {
  // 讓鍵盤使用者可以用 Esc 關閉已打開的手機選單。
  window.addEventListener('keydown', handleKeydown)
  
  // 若初始進入即為部落格單頁，則啟動捲動監聽
  if (isBlogSinglePage.value) {
    addScrollListener()
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  // 卸載元件時確保移除捲動接聽器，避免記憶體洩漏
  removeScrollListener()
  unlockBodyScroll()
})
</script>

<template>
  <header class="sticky top-0 z-50 bg-primary-50 px-3 py-2 md:py-3">
    <nav class="mx-auto flex max-w-[1296px] items-center justify-between">
      <!-- logo -->
      <NuxtLink to="/" aria-label="回到首頁" @click="closeMenu">
        <picture>
          <source media="(min-width: 768px)" srcset="/img/common/desktop/logo.svg" />
          <img src="/img/common/mobile/logo.svg" alt="Nelson 網站 logo" />
        </picture>
      </NuxtLink>

      <!-- 電腦版選單 -->
      <ul class="hidden gap-6 md:flex">
        <li v-for="link in navLinks" :key="link.to">
          <NuxtLink :to="link.to" :class="navLinkClass" active-class="text-primary">
            {{ link.label }}
          </NuxtLink>
        </li>
        <li>
          <a :class="navLinkClass" href="#footer">與我聯絡</a>
        </li>
      </ul>

      <!-- 手機版選單按鈕 -->
      <button
        class="flex size-11 items-center justify-center rounded-full border-neutral md:hidden"
        :class="{ border: isMenuOpen }"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        aria-label="開關選單"
        @click="toggleMenu"
      >
        <!-- 漢堡圖示 -->
        <div class="flex size-5 flex-col justify-center gap-[5px]" aria-hidden="true">
          <div class="h-px bg-neutral"></div>
          <div class="h-px bg-neutral"></div>
          <div class="h-px bg-neutral"></div>
        </div>
      </button>
    </nav>

    <!-- 遮罩 -->
    <Transition
      enter-active-class="transition-opacity duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 top-16 z-40 bg-dark-60a md:hidden"
        aria-hidden="true"
        @click="closeMenu"
      ></div>
    </Transition>

    <!-- 手機版選單 -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="-translate-y-2 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <nav
        v-if="isMenuOpen"
        id="mobile-menu"
        class="absolute left-0 right-0 top-full z-50 bg-primary-50 py-3 md:hidden"
      >
        <ul class="flex flex-col items-center gap-3">
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="block px-3 py-1 text-label-small transition hover:text-primary"
              active-class="text-primary"
              @click="closeMenu"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
          <li>
            <a
              class="block px-3 py-1 text-label-small transition hover:text-primary"
              href="#footer"
              @click="closeMenu"
            >
              與我聯絡
            </a>
          </li>
        </ul>
      </nav>
    </Transition>
    <!-- 閱讀進度條 -->
    <div
      v-if="isBlogSinglePage"
      class="absolute bottom-0 left-0 h-1 bg-primary transition-all duration-75"
      :style="{ width: `${scrollPercent}%` }"
    ></div>
  </header>
</template>
