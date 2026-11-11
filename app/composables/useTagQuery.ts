export const ALL_TAGS_LABEL = '全部'

// 分類 tab 以網址的 tag 參數為準；「全部」不寫進網址，讓列表頁維持乾淨的預設網址。
export const useTagQuery = () => {
  const route = useRoute()
  const router = useRouter()

  const activeTag = computed(() => {
    const tag = route.query.tag

    return typeof tag === 'string' && tag ? tag : ALL_TAGS_LABEL
  })

  // 切換時保留其它 query，切回「全部」則移除 tag 參數。
  const setTag = (tag: string) => {
    const query = { ...route.query }

    if (tag === ALL_TAGS_LABEL) {
      delete query.tag
    } else {
      query.tag = tag
    }

    router.push({ query })
  }

  return { activeTag, setTag }
}
