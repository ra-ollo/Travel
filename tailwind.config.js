// tailwind.config.cjs
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};
