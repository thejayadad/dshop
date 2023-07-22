/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        
            "primary": "#4793f7",
                    
            "secondary": "#81bfd3",
                    
            "accent": "#05ff0d",
                    
            "neutral": "#151923",
                    
            "base-100": "#364453",
                    
            "info": "#7e95e7",
                    
            "success": "#165f52",
                    
            "warning": "#954f04",
                    
            "error": "#e84f5c",
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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
}
