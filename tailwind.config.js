/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#02070A',
        'midnight-50': '#0a1820',
        'midnight-100': '#0d1e28',
        'midnight-200': '#102634',
        electric: '#0297DE',
        'electric-50': '#EAF6FC',
        'electric-100': '#DDF1FA',
        'electric-200': '#b8e3f5',
        'electric-300': '#8fd0ee',
        'electric-400': '#3fb1e8',
        'electric-500': '#0297DE',
        'electric-600': '#0278b8',
        'electric-700': '#025e91',
        'electric-800': '#013f61',
        'electric-900': '#012a42',
        cantaloupe: '#FC734D',
        'cantaloupe-400': '#fd8a6a',
        'cantaloupe-500': '#FC734D',
        'cantaloupe-600': '#e85a34',
        'cantaloupe-700': '#c54320',
        offwhite: '#F7FAFC',
        iceblue: '#EAF6FC',
        paleblue: '#DDF1FA',
        neutralgrey: '#F1F5F8',
        navy: '#071B2A',
        'navy-700': '#0b2436',
        'navy-600': '#102e45',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(2, 151, 222, 0.45)',
        'glow-lg': '0 0 70px -10px rgba(2, 151, 222, 0.55)',
        soft: '0 10px 40px -15px rgba(7, 27, 42, 0.18)',
        'soft-lg': '0 25px 60px -25px rgba(7, 27, 42, 0.25)',
        orange: '0 0 30px -8px rgba(252, 115, 77, 0.5)',
      },
      backgroundImage: {
        'grid-electric': "linear-gradient(rgba(2,151,222,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(2,151,222,0.07) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'spin-slow': 'spin-slow 18s linear infinite',
      },
    },
  },
  plugins: [],
};
