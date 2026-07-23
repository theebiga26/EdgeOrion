/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#070314', // Very dark navy/purple background
        surface: '#130B29', // Slightly lighter for cards
        primary: '#D414FF', // Neon Magenta/Purple
        primaryHover: '#E14DFF',
        secondary: '#7A00E6', // True Purple (removed the blue tint)
        textBase: '#E2E8F0',
        textMuted: '#94A3B8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glow': '0 0 20px rgba(212, 20, 255, 0.3)', // Magenta glow
      }
    },
  },
  plugins: [],
}
