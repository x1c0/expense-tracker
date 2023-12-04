import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00736A',
        default: '#373A36',
        'default-light': '#7A7A7A',
        line: '#7A7A7A',
        divider: '#e3e3e3',
        'table-row-hover': '#efede6',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-lora)'],
      },
    },
  },
  plugins: [],
}
export default config
