/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  daisyui: {
    themes: ["wireframe"],
    fontFamily: {
      poppins: ["Poppins"],
    },
  },
  plugins: [require("daisyui")],
};
