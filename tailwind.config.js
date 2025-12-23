/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pastelPink: '#F7D6E0',
        pastelBlue: '#D5EAF8',
        pastelLavender: '#E6D9FA',
        pastelGreen: '#D9F2E6',
        ink: '#1f2937',
      },
      fontFamily: {
        perandory: ['Perandory-Regular', 'sans-serif'],
        amoresa: ['Amoresa', 'sans-serif'],
        times: ['"Times New Roman"', 'Times', 'serif'],
      },

    },
  },
  plugins: [],
};
