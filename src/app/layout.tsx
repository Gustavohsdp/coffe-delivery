import { Header } from "@/components/Header";
import { Providers } from "@/providers";
import { Metadata } from "next";
import { Baloo_2, Open_Sans, Roboto } from "next/font/google";
import { ReactNode } from "react";
import "../styles/global.css";

export const metadata: Metadata = {
  applicationName: "E-commerce",
  keywords: [
    "Ecommerce",
    "React",
    "Next.js",
    "Node.js",
    "Tailwindcss",
    "Radix UI",
  ],
  authors: [
    { name: "Gustavo Henrique", url: "https://github.com/Gustavohsdp" },
  ],
  colorScheme: "light",
  creator: "Gustavo Henrique",
  publisher: "Gustavo Henrique",
  openGraph: {
    title: "E-commerce",
    description: "Projeto de E-commerce para teste técnico.",
    url: "https://google.com",
    siteName: "E-commerce",
    locale: "pt-BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  title: {
    default: "Coffe delivery",
    template: "%s | Coffe delivery",
  },
  description: "E-commerce delivery coffe.",
  icons: {
    icon: "/assets/favicon.ico",
  },
};

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const baloo_2 = Baloo_2({
  variable: "--font-baloo_2",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt"
      className={`${openSans.variable} ${roboto.variable} ${baloo_2.variable} scroll-smooth`}
    >
      <body>
        <div className="pb-28">
          <Header />
        </div>

        <div className="mx-auto max-w-[1120px]">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
