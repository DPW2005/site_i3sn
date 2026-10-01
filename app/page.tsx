import type { Metadata } from "next";
import HeroSlider from "@/components/home/HeroSlider";
import StatsBar from "@/components/home/StatsBar";
import ProgramsSection from "@/components/home/ProgramsSection";
import NewsSection from "@/components/home/NewsSection";
import AdmissionsCallout from "@/components/home/AdmissionsCallout";
import TeachersSection from "@/components/home/TeachersSection";
import GallerySection from "@/components/home/GallerySection";
import PartnersSection from "@/components/home/PartnersSection";

export const metadata: Metadata = {
  title: "I3SN - Institut Superieur des Sciences de la Sante de Ngong",
  description:
    "Bienvenue a l'I3SN - Probitas, Scientiarum, Excellentiam. Formation medicale d'excellence a Ngong, Cameroun : IDE, SFM, ATMS, TMS, Aides-Soignants, TGS.",
};


export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <StatsBar />
      <ProgramsSection />
      <AdmissionsCallout />
      <NewsSection />
      <TeachersSection />
      <GallerySection />
      <PartnersSection />
    </>
  );
}
