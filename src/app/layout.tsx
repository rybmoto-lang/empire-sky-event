import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Imperia Sky Event — премиальные мероприятия в Москва-Сити',
  description:
    'Организация корпоративных и частных мероприятий под ключ: корпоративы, конференции, свадьбы, техническое обеспечение.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  );
}
