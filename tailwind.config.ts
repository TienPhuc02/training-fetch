import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      sm: '375px',//done
      md: '768px',//
      sx: '992px',//done
      lg: '1024px',//done
      xl: '1280px',//done
      xxl: '1440px'//done
    },
    extend: {
      colors: {
        primary: '#FAFAFD',
        secondary: '#BCBBCA'
      },
      fontFamily: {
        primary: ['var(--font-inter)'],
        secondary: ['var(--font-cabinet-grotesk-extrabold)']
      },
      backgroundColor: {
        primary: '#6966FF',
        backgroundPrimary: '#1A1A27',
        backgroundSecondary: '#151521' //footer
      }
    }
  },
  plugins: []
};
export default config;
