import type { Metadata, Viewport } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#E83E8C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "CYBER PINK 🎀 | Le Cyber Quiz du CSI (Octobre Rose)",
  description:
    "Teste tes réflexes en cybersécurité et découvre si tu es prêt à déjouer les pièges du numérique. Quiz interactif par le Club Scientifique Informatique (CSI) pour Octobre Rose 2026.",
  keywords: [
    "CSI",
    "Cybersecurity",
    "Octobre Rose",
    "Cyber Pink",
    "Quiz Cybersécurité",
    "Club Scientifique Informatique",
    "Sécurité Informatique"
  ],
  authors: [{ name: "CSI - Club Scientifique Informatique" }],
  openGraph: {
    title: "CYBER PINK 🎀 | Le Cyber Quiz du CSI",
    description: "Teste tes réflexes en cybersécurité pour Octobre Rose 2026 !",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${outfit.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0B1020] text-slate-100 font-sans selection:bg-pink-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
