/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eff9ff',
          100: '#def2ff',
          200: '#b6e7ff',
          300: '#75d4ff',
          400: '#2cbeff',
          500: '#00a3f5',
          600: '#0082d4',
          700: '#0067aa',
          800: '#04588a',
          900: '#0a4a72',
          950: '#072f4d',
        },
        nature: {
          50: '#effdf6',
          100: '#d8fae9',
          200: '#b3f3d4',
          300: '#79e6b3',
          400: '#3ed089',
          500: '#1bb56d',
          600: '#109254',
          700: '#0e7446',
          800: '#0f5c3a',
          900: '#0d4b31',
          950: '#022a1c',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease-out both',
        'fade-in': 'fadeIn 0.8s ease-out both',
        'wave': 'wave 8s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.5s ease-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        wave: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(-3%) translateY(2%)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '80%, 100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'wave-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1440' height='180' viewBox='0 0 1440 180'%3E%3Cpath fill='%23def2ff' fill-opacity='0.5' d='M0 96c80-32 160-48 240-48s160 16 240 32 160 32 240 16 160-48 240-48 160 32 240 48v84H0z'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
