// tailwind.config.cjs
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 7s linear infinite',
      }
    },
  },
  plugins: [],
};
