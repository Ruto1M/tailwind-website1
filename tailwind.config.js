// tailwind.config.js
export default {
  content: ["./dist/**/*.{html,js}"],

  theme: {
    extend: {
        fontFamily: {
            rubik: ['Rubik','sans-serif'],
            gilroy: ['Gilroy','sans-serif']
        },
        perspective: {
          none: 'none',
          1000: '1000px'
        }
    },
  },

  plugins: [],
}