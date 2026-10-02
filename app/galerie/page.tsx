import type { Metadata } from "next";
import Link from "next/link";
import GalleryContent from "@/components/gallery/GalleryContent";

export const metadata: Metadata = {
  title: "Galerie",
  description: "Découvrez les infrastructures modernes, les campus et la vie estudiantine de l'I3SN en images.",
};

export default function GaleriePage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          <nav aria-label="Fil d'Ariane" className="breadcrumb">
            <Link href="/" id="gallery-breadcrumb-home">Accueil</Link>
            <span>/</span>
            <span>Galerie</span>
          </nav>
          <h1>Galerie Photos</h1>
          <p>Découvrez l&apos;environnement d&apos;apprentissage exceptionnel, les infrastructures modernes et la vie estudiantine dynamique de l&apos;I3SN.</p>
        </div>
      </div>

      <GalleryContent />
    </>
  );
}
