import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"), // Fallback, update to real domain when deploying
  title: {
    default: "AURA AESTHETIC | Kecantikan Anda, Prioritas Kami",
    template: "%s | AURA AESTHETIC",
  },
  description: "Menghadirkan standar baru dalam perawatan kecantikan medis di Indonesia dengan memadukan presisi dan kemewahan.",
  keywords: ["Klinik Kecantikan", "Aesthetic Clinic", "Perawatan Medis", "Aura Aesthetic", "Kecantikan Jakarta"],
  openGraph: {
    title: "AURA AESTHETIC | Medical Artistry",
    description: "Menghadirkan standar baru dalam perawatan kecantikan medis di Indonesia dengan memadukan presisi dan kemewahan.",
    url: "/",
    siteName: "Aura Aesthetic",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AURA AESTHETIC",
    description: "Kecantikan Anda, Prioritas Kami.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${notoSerif.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link 
          rel="preload" 
          as="style" 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
        />
        <link
          rel="stylesheet"
          media="print"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <script dangerouslySetInnerHTML={{
          __html: `
            document.querySelectorAll('link[media="print"]').forEach(function(link) {
              link.media = 'all';
            });
          `
        }}></script>
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          />
        </noscript>
      </head>
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
