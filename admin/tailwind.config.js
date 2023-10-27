/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors : {
        'primary-blue' : "#1c2434",
        'primary-bg' : "#f1f5f9",
        'primary' : "#3C50E0"
      },
      boxShadow : {
        default: '0px 8px 13px -3px rgba(0, 0, 0, 0.07)'
      }
    },
  },
  plugins: [],
}
