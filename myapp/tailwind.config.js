/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#a33a1a",
                  
          "secondary": "#db04cc",
                  
          "accent": "#4d78af",
                  
          "neutral": "#2e1f32",
                  
          "base-100": "#3b3442",
                  
          "info": "#197beb",
                  
          "success": "#60d7b3",
                  
          "warning": "#cd7e0e",
                  
          "error": "#f6235b",
                  },
                },
              ],
            },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "wh-10": "#F4F4F4",
        "wh-50": "#FBFBFB",
        "wh-100": "#C9C9C9",
        "wh-300": "#939393",
        "wh-500": "#595959",
        "wh-900": "#0F0F0F",
        "accent-red": "#EA9648",
        "accent-orange": "#F6CF68",
        "accent-green": "#C2E9B4",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [
    
    require("daisyui"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),


],
}
