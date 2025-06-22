import '@/app/ui/global.css';
import { inter } from './ui/font';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head 
      ><meta name="google-site-verification" content="y3p2TNqKxkcGblcqTQMNfIj2JVukb5Y-ypTUr_ODiVw" /></head>
      <body className={`${inter.className}`}>
        {children}</body>
    </html>
  );
}
