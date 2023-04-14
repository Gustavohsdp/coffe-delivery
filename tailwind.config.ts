import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: ' #FAFAFA',
        white: '#FFFFFF',

        yellow: {
          100: '#F1E9C9',
          400: '#DBAC2C',
          900: '#C47F17'
        },
        purple: {
          100: '#EBE5F9',
          400: '#8047F8',
          900: '#4B2995'
        },
        brown: {
          100: '#F3F2F2',
          200: '#EDEDED',
          300: '#E6E5E5',
          400: '#D7D5D5',
          500: '#8D8686',
          600: '#574F4D',
          700: '#403937',
          900: '#272221',
        },
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'sans-serif', ...fontFamily.sans],
        baloo2: ['var(--font-baloo_2)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} satisfies Config
