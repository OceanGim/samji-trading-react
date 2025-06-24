import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'mobile': {'max': '767px'},
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#002768',
          light: '#003d94',
          dark: '#001a44',
          50: '#E6F0FF',
          100: '#BFDBFF',
          200: '#7FB7FF',
          300: '#3F93FF',
          400: '#0070FF',
          500: '#0056CC',
          600: '#002768',
          700: '#001A44',
          800: '#001333',
          900: '#000C22',
        },
        secondary: {
          DEFAULT: '#F8F9FA',
          50: '#FFFFFF',
          100: '#FCFCFD',
          200: '#F8F9FA',
          300: '#E9ECEF',
          400: '#DEE2E6',
          500: '#CED4DA',
          600: '#ADB5BD',
          700: '#6C757D',
          800: '#495057',
          900: '#343A40',
        },
        accent: {
          DEFAULT: '#0066cc',
          hover: '#0052a3',
          light: '#3385d6',
          dark: '#004499',
        },
        success: '#00a651',
        warning: '#ff9500',
        error: '#dc2626',
        gray: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#6c757d',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
      },
      animation: {
        shine: 'shine 3s infinite',
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-100%) skewX(-12deg)' },
          '100%': { transform: 'translateX(200%) skewX(-12deg)' },
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(135deg, #002768 0%, #003d94 100%)',
        'gradient-overlay': 'linear-gradient(to right, rgba(0,0,0,0.7), transparent)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '50': '12.5rem',
      },
    },
  },
  plugins: [],
};

export default config;