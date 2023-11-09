/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        quickSand: "'Quicksand', sans-serif",
        GilroyBlack: 'Gilroy-Black',
        Gilroy: 'Gilroy'
      },
      colors: {
        yellow: '#F8C65D',
        textColor: '#02030F',
        blurColor: '#031A5E',
        yellowHover: '#ffb10c'
      }
    }
  },
  plugins: []
};
