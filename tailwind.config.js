/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        frs: "Concert One",
        sec: "Helvetica",
        trd: "Vina Sans",
        frt: "Gluten",
        japan: "Yuji Mai",
      },
      colors: {
        primary: "#FFD230",
      },
    },
  },
  plugins: [],
};
