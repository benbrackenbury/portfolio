/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      background: '#f5f5f5',
      foreground: '#222222',
      backgroundDark: '#222222',
      foregroundDark: '#f5f5f5',
      accent: '#FF4F00',
    },
  },
  plugins: [],
}
