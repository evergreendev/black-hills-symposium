import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      serif: ['Inika','serif'],
      sans: ['Inter','sans-serif']
    },
    extend: {
      colors: {
        'primary-100':'#E0E9D9',
        'primary-200':'#C2CFB8',
        'primary-300':'#869479',
        'primary-400':'#58664B',
        'primary-500':'#45513B',
        'primary-600':'#2A381D',
        'primary-700':'#1A2312',
        'primary-800':'#131A0D',
        'primary-900':'#11140F',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
