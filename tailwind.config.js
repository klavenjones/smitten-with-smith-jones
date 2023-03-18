/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#b9cfdd',
        'secondary': '#8fa1ab',
        'tertiary': '#d9dbda',
        'typography': '#0c0e0d',
        'project-white': '#fafcfb',
        'background': '#f3f0eb',
        'light-blue': '#8BAFC8',
        'bone': '#ccc5b7'
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        marquee3: 'marquee3 25s linear infinite',
        marquee4: 'marquee4 25s linear infinite',
        'fade-in': 'fadeIn .5s ease-in'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marquee3: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        marquee4: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(130%)' },
          '100%': { opacity: '1', transform: 'scale(100%)' }
        }
       
      },
    }
  },
  plugins: [
    require('daisyui')
  ], 
   // daisyUI config (optional)
   daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
};
