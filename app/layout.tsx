import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "I3SN — Institut Supérieur des Sciences de la Santé de Ngong",
    template: "%s | I3SN",
  },
  description:
    "L'Institut Supérieur des Sciences de la Santé de Ngong (I3SN) forme les professionnels de santé du Cameroun : Infirmiers Diplômés d'Etat (IDE), Sages-Femmes (SFM), Agents et Techniciens Médico-Sanitaires (ATMS / TMS), Aides-Soignants et Techniciens de Gestion Sanitaire (TGS).",
  keywords: [
    "I3SN",
    "Institut Supérieur des Sciences de la Santé de Ngong",
    "formation médicale Cameroun",
    "infirmier diplômé d'état IDE",
    "sage-femme SFM",
    "ATMS analyse médicale",
    "TMS kinésithérapie",
    "TGS gestion sanitaire",
    "aide soignant",
    "école médecine Ngong",
    "Probitas Scientiarum Excellentiam",
  ],
  authors: [{ name: "I3SN" }],
  creator: "I3SN",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://i3sn.cm",
    siteName: "I3SN",
    title: "I3SN — Institut Supérieur des Sciences de la Santé de Ngong",
    description:
      "Probitas • Scientiarum • Excellentiam — Formant les professionnels de santé du Cameroun depuis Ngong.",
  },
  twitter: {
    card: "summary_large_image",
    title: "I3SN — Institut Supérieur des Sciences de la Santé de Ngong",
    description: "Formation médicale d'excellence au Cameroun. Probitas-Scientiarum-Excellentiam.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
