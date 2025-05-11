import type { Config } from "tailwindcss";

const config: Config = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 5s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: 'transparent',
        'woodsmoke': {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#1b1b1b',
        },
        'gold': {
          50: '#ffffe7',
          100: '#ffffc1',
          200: '#fffb86',
          300: '#fff141',
          400: '#ffe10d',
          500: '#fed100',
          600: '#d19a00',
          700: '#a66e02',
          800: '#89550a',
          900: '#74460f',
          950: '#442404',
        },
        'white': '#FFFFFF',
        'ultramarine': {
          50: '#f0f4ff',
          100: '#e4eaff',
          200: '#ccd8ff',
          300: '#a4b8ff',
          400: '#7087ff',
          500: '#374cff',
          600: '#0f1bff',
          700: '#0011ff',
          800: '#0011da',
          900: '#000ba8',
          950: '#00107a',
        },
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
  darkMode: 'class',
};
export default config;
