import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
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
