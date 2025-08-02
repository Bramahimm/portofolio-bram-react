// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'bg-color': 'var(--bg-color)',
        'text-color': 'var(--text-color)',
        'main-color': 'var(--main-color)',
        'white-color': 'var(--white-color)',
        'black-color': 'var(--black-color)',
        'shadow-color': 'var(--shadow-color)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      keyframes: {
        // PERBAIKAN: Keyframes ini sekarang MENCERMINKAN putaran bertahap dari CSS asli Anda.
        professionRotateAnimation: {
          '0%, 20%': { transform: 'rotate(0deg)' },
          '25%, 45%': { transform: 'rotate(-90deg)' },
          '50%, 70%': { transform: 'rotate(-180deg)' },
          '75%, 95%': { transform: 'rotate(-270deg)' },
          '100%': { transform: 'rotate(-360deg)' }, // -360deg = 0deg, untuk loop
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'profession-animate': 'professionRotateAnimation 13s linear infinite', // Nama animasi baru
        'spin-slow': 'spinSlow 2s linear infinite',
      },
    },
  },
  plugins: [],
}