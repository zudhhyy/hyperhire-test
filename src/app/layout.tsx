import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Hyperhire',
  description: '우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
