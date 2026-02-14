/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F05829', 
          purple: '#5D45DB', 
          dark: '#1A1A1A',
          bg: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse-slow': 'spin-reverse 15s linear infinite',
        'rain': 'rain 8s linear infinite',
        // --- Added Animations ---
        'ping-slow': 'ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        'spin-reverse': {
          'from': { transform: 'rotate(360deg)' },
          'to': { transform: 'rotate(0deg)' },
        },
        'rain': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        // --- Added Keyframes ---
        'ping-slow': {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '80%, 100%': { transform: 'scale(2.5)', opacity: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-10px) translateX(5px)' },
        }
      }
    },
  },
  plugins: [],
};