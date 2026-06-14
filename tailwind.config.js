/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        pulse: "#F04F9A",
        cyan: "#19B9F1",
        spark: "#FFD21F",
        ink: "#211F27",
        paper: "#FFFEFC",
        mist: "#F6F3F5"
      },
      fontFamily: {
        sans: ["Arial", "PingFang SC", "Microsoft YaHei", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(33,31,39,.10)"
      }
    }
  },
  plugins: []
};
