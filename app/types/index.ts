export interface ProjectModal {
  image: string
  content: string
  designPrinciple: string
  development: string
}

export interface Project {
  id: number
  images: {
    mobile: string
    desktop: string
  }
  datetime: string
  date: string
  tags: string[]
  title: string
  description: string
  modal: ProjectModal
}

export interface ServiceStep {
  id: number
  title: string
  content: string
}

export interface ServiceItem {
  key: string
  eyebrow: string
  title: string
  summary: string
  iconPath: string
  steps: ServiceStep[]
}
