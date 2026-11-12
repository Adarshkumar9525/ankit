/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Approved VISUALS Brand Palette (Design Brief Page 8)
        paper: {
          DEFAULT: '#F6F4EF',
          50: '#FDFCFB',
          100: '#F6F4EF',
          200: '#EDE9DF',
          300: '#DFD9CB',
        },
        ink: {
          DEFAULT: '#202522',
          900: '#131715',
          800: '#202522',
          700: '#2E3632',
          600: '#424C46',
        },
        'confident-blue': {
          DEFAULT: '#315FCE',
          hover: '#254BB8',
          active: '#1E3F9E',
          light: '#EEF3FF',
          muted: '#527AE0',
        },
        'muted-slate': {
          DEFAULT: '#66716B',
          light: '#85928B',
          dark: '#4B544F',
          subtle: '#9EABA4',
        },
        'soft-sage': {
          DEFAULT: '#E7EDE7',
          50: '#F4F7F4',
          100: '#E7EDE7',
          200: '#D5DFD5',
          300: '#BFCFBF',
        },
        'warm-amber': {
          DEFAULT: '#E9B64A',
          hover: '#D8A336',
          light: '#FCF6E8',
          subtle: '#F7E7C2',
        },

        // Shorthand direct aliases matching brief nomenclature
        'warm-paper': '#F6F4EF',
        'deep-ink': '#202522',
        
        // Legacy fallback palettes to preserve backward compatibility during incremental migration
        gold: {
          50: '#FBF8F0',
          100: '#F7F1DE',
          200: '#EFE1BC',
          300: '#E4CC93',
          400: '#D5AF63',
          500: '#C89B3C',
          600: '#B0802B',
          700: '#8E6221',
          accent: '#E5BD70',
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
        // Approved typography: Manrope for headings, Inter for body/UI
        manrope: ['Manrope', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'sans-serif'],
        // Legacy fonts retained
        syne: ['Syne', 'sans-serif'],
      },
      maxWidth: {
        // 1180–1220px content width limit per Brief Page 8
        'content': '1220px',
      },
      boxShadow: {
        // Restrained subtle shadows per Brief Page 9 ("Use subtle borders and restrained shadows. Avoid heavy glow effects.")
        'subtle': '0 1px 3px 0 rgba(32, 37, 34, 0.05), 0 1px 2px -1px rgba(32, 37, 34, 0.05)',
        'card-warm': '0 4px 20px -2px rgba(32, 37, 34, 0.06), 0 2px 6px -1px rgba(32, 37, 34, 0.03)',
        'card-hover': '0 12px 28px -4px rgba(32, 37, 34, 0.10), 0 4px 10px -2px rgba(32, 37, 34, 0.04)',
        'button-blue': '0 4px 14px 0 rgba(49, 95, 206, 0.30)',
        'button-blue-hover': '0 6px 20px 0 rgba(49, 95, 206, 0.40)',
      },
      borderRadius: {
        'card': '16px',
        'pill': '9999px',
      }
    },
  },
  plugins: [],
}
