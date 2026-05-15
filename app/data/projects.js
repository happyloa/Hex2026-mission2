// 專案卡片與 modal 共用資料；首頁與專案列表頁都從這裡取用，避免重複維護。
const defaultProjectModal = {
  image: '/img/project/project_modal_pic.webp',
  content:
    '我們將大自然的平靜感轉化為數位語彙，透過揉合大地色系與極簡排版，為「PLANTIQUE LIFE」建構出專屬的視覺靈魂。在開發過程中，我們秉持對細節的極致追求，確保從品牌 Logo 到每一個組件的轉場，皆展現像素級的精準。',
  designPrinciple: '植栽藝術、日系風格、暖陽視覺',
  development: 'Bootstrap、Javascript'
}

export const projects = [
  {
    id: 1,
    images: {
      mobile: '/img/project/mobile/project_1.webp',
      desktop: '/img/project/desktop/project_1.webp'
    },
    datetime: '2025-10-16',
    date: 'Oct 16, 2025',
    tags: ['平面設計', '網頁設計'],
    title: '品牌視覺與電商整合，多肉植物品牌電商建置',
    description: '從品牌識別設計到 RWD 網站開發，打造療癒系植栽購物體驗',
    modal: { ...defaultProjectModal }
  },
  {
    id: 2,
    images: {
      mobile: '/img/project/mobile/project_2.webp',
      desktop: '/img/project/desktop/project_2.webp'
    },
    datetime: '2025-10-16',
    date: 'Oct 16, 2025',
    tags: ['平面設計', '網頁設計', '前端切版'],
    title: '數位產品 UI/UX 設計，個人化財務視覺化軟體',
    description: '運用數據視覺化邏輯，將複雜的財務數據轉化為直覺的操作介面',
    modal: { ...defaultProjectModal }
  },
  {
    id: 3,
    images: {
      mobile: '/img/project/mobile/project_3.webp',
      desktop: '/img/project/desktop/project_3.webp'
    },
    datetime: '2025-10-16',
    date: 'Oct 16, 2025',
    tags: ['前端切版', '後端開發'],
    title: '品牌識別與包裝設計，法式甜點品牌視覺重塑',
    description: '以溫暖、輕盈的視覺語言，精準定位高質感甜點市場的品牌形象',
    modal: { ...defaultProjectModal }
  },
  {
    id: 4,
    images: {
      mobile: '/img/project/mobile/project_4.webp',
      desktop: '/img/project/desktop/project_4.webp'
    },
    datetime: '2025-10-16',
    date: 'Oct 16, 2025',
    tags: ['網頁設計', '前端切版', '後端開發'],
    title: '金融科技系統設計，Open Bank API 數據整合平台',
    description: '串接第三方 API 並規劃穩定的後端架構，建構安全的資產管理後台。',
    modal: { ...defaultProjectModal }
  }
]
