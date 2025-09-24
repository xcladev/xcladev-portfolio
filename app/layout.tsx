import "./globals.css";
import "@/styles/index.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://xcladev.com"),
  title: {
    default: "Sergi Cladera — Portfolio",
    template: "%s | Sergi Cladera",
  },
  description: "Desarrollador backend. Proyectos, experiencia y contacto.",
  alternates: {
    canonical: "/",
    languages: {
      es: "/",
      "es-ES": "/",
      en: "/en",
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Sergi Cladera — Portfolio",
    siteName: "Sergi Cladera",
    description: "Desarrollador backend. Proyectos, experiencia y contacto.",
    locale: "es_ES",
    images: [
      {
        url: "/foto-portfolio.webp",
        width: 1200,
        height: 630,
        alt: "Sergi Cladera — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@xcladev",
    creator: "@xcladev",
    title: "Sergi Cladera — Portfolio",
    description: "Desarrollador backend. Proyectos, experiencia y contacto.",
    images: ["/foto-portfolio.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0f" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sergi Cladera",
    url: "https://xcladev.com",
    jobTitle: "Desarrollador Web",
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sergi Cladera — Portfolio",
    url: "https://xcladev.com/",
  };
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
