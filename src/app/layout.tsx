import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { MemberstackProvider } from '@memberstack/nextjs/client';
import { Navbar } from '@/app/components/navbar';
import { Footer } from '@/app/components/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Template Memberstack Next.js',
  description: 'A quick start for your next Memberstack project.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MemberstackProvider
          config={{
            publicKey: process.env.NEXT_PUBLIC_MEMBERSTACK_PUBLIC_KEY as string,
          }}
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </MemberstackProvider>
      </body>
    </html>
  );
}
