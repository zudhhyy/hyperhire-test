import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          black: '#24252F',
          white: '#EFF1F6',
          'dark-blue': '#4A77FF',
          blue: '#8BC4FF',
          green: '#00C696',
          'dark-grey': '#5E626F',
          grey: '#C1C5CF',
          teal: '#40E2E8',
          yellow: '#FBFF23',
        },
        secondary: {
          black: '#343741',
          green: '#E9F7EF',
        },
        tertiary: {
          black: '#344054',
        },
      },

      backgroundImage: {
        hero: 'url("../assets/backgrounds/hero-bg.webp")',
      },

      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        'fadeIn-delay': 'fadeInDelay 0.8s ease-out forwards',
        fadeInUp: 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        fadeInDelay: {
          '0%': {
            opacity: '0',
          },
          '50%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
