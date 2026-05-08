import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/components/AuthProvider/AuthProvider';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

// export const metadata: Metadata = {
//   title: 'Welcome to E-Pharmacy',
//   description:
//     'E-Pharmacy is a simple and efficient application designed for booking necessary medication.',
//   icons: { icon: '/pill.png' },
//   openGraph: {
//     title: 'Welcome to E-Pharmacy ',
//     description:
//       'E-Pharmacy is a simple and efficient application designed for booking necessary medication.',
//     images: [
//       {
//         url: 'e-pharmacy-frontend-client-p1f4.vercel.app',
//         width: 1200,
//         height: 630,
//         alt: 'Welcome to E-Pharmacy',
//       },
//     ],
//     url: 'e-pharmacy-frontend-client-p1f4.vercel.app',
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
