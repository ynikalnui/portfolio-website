import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-slab': ['Roboto Slab', 'sans-serif']
      },
      colors: {
        'main-bg': '#201A17',
        'secondary-bg': '#4A403B',
        'main-text': '#FFFFFF',
        'secondary-text': '#B9B9B9',
        'accent': '#AF9D84'
      },
      fontSize: {
        'sm': '0.938rem',
        'base': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.875rem',
        '4xl': '2.188rem',
        '5xl': '2.5rem'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
} satisfies Config;
