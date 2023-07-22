/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        
            "primary": "#b4f986",
                    
            "secondary": "#cac6ff",
                    
            "accent": "#5fb733",
                    
            "neutral": "#1f2529",
                    
            "base-100": "#eff2f5",
                    
            "info": "#4c78f0",
                    
            "success": "#10564c",
                    
            "warning": "#fcce45",
                    
            "error": "#ec3418",
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
