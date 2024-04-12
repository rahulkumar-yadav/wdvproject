/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "box-gradient": "linear-gradient(127deg, rgba(229,238,255,1) 58%, rgba(255,255,255,1) 100%)",
        "layout-gradient" : "linear-gradient(168deg, rgba(255,255,255,1) 97%, rgba(227,225,225,1) 2%)"
      }),
    },
  },
  plugins: [],
}

