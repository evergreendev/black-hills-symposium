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
        'white':'#FFFFFF',
        'primary-100':'#E0E9D9',
        'primary-200':'#C2CFB8',
        'primary-300':'#869479',
        'primary-400':'#58664B',
        'primary-500':'#45513B',
        'primary-600':'#2A381D',
        'primary-700':'#1A2312',
        'primary-800':'#131A0D',
        'primary-900':'#11140F',
        'straw-500': '#beb188',
        'straw-400': '#e4d4a3'
      },
      backgroundImage: {
        "logo": "url('../public/logo.png')",
        "hero": "url('../public/cover-image.jpg')",
        "exhibitor": "url('../public/exhibitor-bg.jpg')",
        "volunteer": "url('../public/volunteer.jpg')",
        "gettingAround": "url('../public/rushmore.jpg')",
        "about": "url('../public/about.jpg')",
        "dark": "linear-gradient(180deg, rgba(13, 14, 12, 0.85) 76%, rgba(13, 14, 12, 0) 100%);",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
