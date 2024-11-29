/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        topblack: "#1A1A1A",
        bordercolor: "#464646",
        navbar: "#373737",
        gradstart: "#8800FF",
        gradend: "#FF00C8",
        graytext: "#6F6F6F",
      },
    },
  },
  plugins: [],
};
