/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        editorial: {
          50: '#FAF9F6',
          100: '#F5F2EB',
          200: '#EFECE4',
          DEFAULT: '#F1EEE9',
          border: '#E3DFD5',
        },
        beige: {
          50: '#FBF9F4',
          100: '#F6F0E5',
          200: '#EFE5D8',
          300: '#E4D5C2',
          400: '#D5BA93',
          DEFAULT: '#EDE4D8',
        },
        gold: {
          50: '#FBF8F0',
          100: '#F7F1DE',
          200: '#EFE1BC',
          300: '#E4CC93',
          400: '#D5AF63',
          500: '#C89B3C',
          600: '#B0802B',
          700: '#8E6221',
          800: '#734E1E',
          900: '#5F3F1C',
          accent: '#E5BD70',
          light: '#F5E4B7',
          dark: '#936D26',
        },
        dark: {
          950: '#070709',
          900: '#0D0D11',
          850: '#121217',
          800: '#181820',
          700: '#22222D',
          600: '#323242',
        }
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['Syne', '"Plus Jakarta Sans"', 'sans-serif'],
        script: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        'gold-glow': '0 0 35px -5px rgba(213, 175, 99, 0.25)',
        'gold-glow-lg': '0 0 60px -10px rgba(229, 189, 112, 0.35)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F5E4B7 0%, #D5AF63 50%, #B0802B 100%)',
        'gold-text': 'linear-gradient(135deg, #FFF1D2 0%, #E5BD70 50%, #C89B3C 100%)',
        'dark-card': 'linear-gradient(180deg, rgba(24, 24, 32, 0.7) 0%, rgba(13, 13, 17, 0.85) 100%)',
      }
    },
  },
  plugins: [],
}
