import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora, Varela_Round } from "next/font/google";
import "../styles/index.css";
import Provider from "../context";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300","400","500","600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const varelaRound = Varela_Round({
  variable: "--font-varela-round",
  subsets: ["latin"],
  weight: ["400"], // Varela Round only has 400 weight
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://shelltedpete.truetradepros.com/";

export const metadata: Metadata = {
  title: "Shelltedpete Asheville Handyman",
  description: `Bathroom Remodel
Our bathroom (shower + bath) remodeling services in Asheville NC include:
Ceiling Upgrades: Installation of moisture-resistant materials and modern finishes.
Flooring Replacement: Durable, waterproof flooring options like tiles, luxury vinyl, or stone.
Wall Renovation: Fresh paint`,
  icons: {
    icon: [
      // { rel: "icon", url: "/assets/images/favicon/favicon-32x32.png", sizes: "32x32" },
      // { rel: "icon", url: "/assets/images/favicon/favicon-16x16.png", sizes: "16x16" },
      { rel: "icon", url: "/assets/images/logo.jpg" },
    ],
    // apple: "/assets/images/favicon/apple-icon.png",
  },
  openGraph: {
    title: "Sheet - Your Website Name",
    description: "This is the sheet page for managing your content.",
    url: `${siteUrl}`,
    siteName: "Your Website Name",
    images: [`${siteUrl}/assets/images/logo.jpg`], //recomened sizes 1200x630, 1080 × 566, 600 × 315 | aspect ratio 1.91:1
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sheet - Your Website Name",
    description: "This is the sheet page for managing your content.",
    images: [`${siteUrl}/assets/images/logo.jpg`], //recomened sizes 1200x630, 1080 × 566, 600 × 315 | aspect ratio 1.91:1
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KPY0ZTZS0Z"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KPY0ZTZS0Z');
            `,
          }}
        />
      </head>
      <body className={`  ${lora.variable} ${varelaRound.variable} ${geistSans.variable} antialiased`}>
        <Provider>
          {children}
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
