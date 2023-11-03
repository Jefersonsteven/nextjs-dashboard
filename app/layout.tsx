import '@/app/ui/global.css';
import { leagueSpartan } from './ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.className} antialiased`}>{children}</body>
    </html>
  );
}
