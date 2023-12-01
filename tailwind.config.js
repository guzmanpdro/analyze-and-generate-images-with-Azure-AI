/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'appBgImage': "url('/src/assets/layered-waves-haikei.svg')"
      }
    },
  },
  plugins: [],
}

