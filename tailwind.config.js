/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontWeight: {
        bold: 700,
      },
      colors: {
        primary: '#e7702b',
        secondary: '#2b5ae7',
        modalBg: 'rgba(0,0,0,0.5)',

        gameNavAction: 'rgb(7, 54, 100)',
        gameNavActionLight: 'rgb(36, 101, 167)',
        gameNavInventory: 'rgb(82, 15, 111)',
        gameNavInventoryLight: 'rgb(142, 46, 183)',
        gameNavQuests: 'rgb(4, 70, 38)',
        gameNavQuestsLight: 'rgb(31, 131, 82)',
        gameNavPlayer: 'rgb(111, 15, 15)',
        gameNavPlayerLight: 'rgb(179, 50, 50)',
      },
      boxShadow: {
        sm: '0 0 10px 6px rgba(0, 0, 0, 0.9)',
        xl: '0 0 16px 3px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        damageText: 'damageTextKeyframes 0.5s normal forwards linear',
      },
      keyframes: {
        damageTextKeyframes: {
          '0%': { transform: 'translateY(0)', opacity: 0 },
          '25%': { transform: 'translateY(-1rem)', opacity: 1 },
          '75%': { transform: 'translateY(-2rem)', opacity: 1 },
          '100%': { transform: 'translateY(-3rem)', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
