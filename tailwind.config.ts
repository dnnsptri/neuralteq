import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-manrope)', 'Manrope', 'sans-serif'],
      },
      colors: {
        primary: {
          dark: '#021019',
          light: '#ECFBFA',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}

export default config 