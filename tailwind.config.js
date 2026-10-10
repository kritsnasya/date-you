/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Main palette
        blush: '#FFE4EC',
        rose: {
          hot: '#FF4D8D',
          light: '#FFB3CC',
          pale: '#FFF0F5',
        },
        plum: '#4A1D3F',
        cream: '#FFF8F0',
      },
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        nunito: ['Nunito', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'heart-float': 'heartFloat 4s ease-in-out infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        heartFloat: {
          '0%': { transform: 'translateY(100vh) scale(0)', opacity: '1' },
          '100%': { transform: 'translateY(-10vh) scale(1)', opacity: '0' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(-4px)' },
          '50%': { transform: 'translateY(4px)' },
        },
      },
    },
  },
  plugins: [],
}
