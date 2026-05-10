import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FDF7F1',
          100: '#FDE6CF',
          500: '#F5B87B',
          900: '#24140B',
          DEFAULT: '#24140B'
        },
        neutral: {
          0: '#ffffff',
          500: '#737373',
          700: '#404040',
          DEFAULT: '#404040',
          900: '#1E1E1E'
        },
        dark: {
          '40a': 'rgb(0 0 0 / 40%)',
          '60a': 'rgb(0 0 0 / 60%)'
        }
      },
      fontFamily: {
        sans: ['"Noto Sans TC"', '"Noto Sans"', 'sans-serif']
      },
      fontSize: {
        display: ['300px', { lineHeight: '1.2', fontWeight: '700' }],
        'display-2': ['160px', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-xxx-large': ['80px', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-xx-large': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-x-large': ['40px', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-large': ['32px', { lineHeight: '1.5', fontWeight: '700' }],
        'heading-medium': ['28px', { lineHeight: '1.5', fontWeight: '700' }],
        'heading-small': ['24px', { lineHeight: '1.5', fontWeight: '700' }],
        'heading-x-small': ['20px', { lineHeight: '1.5', fontWeight: '700' }],
        'heading-xx-small': ['18px', { lineHeight: '1.5', fontWeight: '700' }],
        'heading-xxx-small': ['16px', { lineHeight: '1.5', fontWeight: '700' }],
        'heading-xxxx-small': ['14px', { lineHeight: '1.5', fontWeight: '700' }],
        'label-medium': ['16px', { lineHeight: '1.5', fontWeight: '500' }],
        'label-small': ['14px', { lineHeight: '1.5', fontWeight: '500' }],
        'label-x-small': ['13px', { lineHeight: '1.5', fontWeight: '500' }],
        'paragraph-medium': ['16px', { lineHeight: '1.5', fontWeight: '500' }],
        'paragraph-small': ['14px', { lineHeight: '1.5', fontWeight: '500' }],
        'paragraph-x-small': ['13px', { lineHeight: '1.5', fontWeight: '500' }]
      },
      fontWeight: {
        medium: '500',
        bold: '700'
      }
    }
  },
  plugins: []
}
