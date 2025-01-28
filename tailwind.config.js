/** @type {import('tailwindcss').Config} */

import tailwindscrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'san': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [tailwindscrollbar],
}