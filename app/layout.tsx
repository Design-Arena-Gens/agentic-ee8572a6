import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pine ML Indicator Builder',
  description:
    'High-accuracy, non-repainting Pine Script machine learning indicator with configurable parameters and export-ready code.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
