import type { Metadata } from 'next';
import './globals.scss';
import Theme from '@/app/_components/atoms/Theme';

export const metadata: Metadata = {
  title: '디자인 시스템',
  description: '디자인 시스템 연습하기',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={'ko'}>
      <head></head>
      <body suppressHydrationWarning={true}>
        <Theme />
        {children}
      </body>
    </html>
  );
}
