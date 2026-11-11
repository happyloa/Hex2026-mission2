const postDateFormatter = new Intl.DateTimeFormat('en', {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
})

// YYYY-MM-DD 以本地午夜解析，避免以 UTC 解析時在負時區顯示成前一天。
export const formatPostDate = (date: string) =>
  postDateFormatter.format(new Date(`${date}T00:00:00`))
