/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-red': '#FF0000',
        'accent-white': '#FDFDFD',
        'accent-gray': '#656565',
        'button-black': '#0E0E0E',
        'gradient-start': '#FF1462',
        'gradient-middle': '#FFE53F',
        'gradient-end': '#E50004'
      },
      boxShadow: {
        'glow': '0px 0px 39px 0px rgba(227, 227, 227, 0.20)'
      },
      gradientColorStops: {
        'start:': '#FF5757',
        'middle:': '#FFE53F',
        'end:': '#FF1462',
      }
    }
  },
  plugins: []
}
