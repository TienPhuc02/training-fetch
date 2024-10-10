//Intel,Cabinet Grotesk Variable
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});
export const cabinetGroteskExtraBold = localFont({
  src: '../../public/fonts/CabinetGrotesk/CabinetGrotesk-Extrabold.otf',
  variable: '--font-cabinet-grotesk-extrabold'
});
