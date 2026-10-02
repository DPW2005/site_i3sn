export interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl?: string;
  category: string;
}

export const partners: Partner[] = [
  {
    id: "1",
    name: "Hôpital Régional de Garoua",
    logoUrl: "/images/partners/hopital-garoua.png",
    websiteUrl: "https://minsante.cm", // Usually public hospitals in Cameroon fall under MINSANTE website
    category: "Hospitalier",
  },
  {
    id: "2",
    name: "Ministère de la Santé Publique",
    logoUrl: "/images/partners/minsante.png",
    websiteUrl: "https://minsante.cm",
    category: "Gouvernemental",
  },
  {
    id: "3",
    name: "Université de Garoua",
    logoUrl: "/images/partners/univ-garoua.png",
    websiteUrl: "https://univ-garoua.cm",
    category: "Académique",
  },
  {
    id: "4",
    name: "Organisation Mondiale de la Santé",
    logoUrl: "/images/partners/who.png",
    websiteUrl: "https://who.int",
    category: "International",
  },
  {
    id: "5",
    name: "Croix-Rouge Camerounaise",
    logoUrl: "/images/partners/croixrouge.png",
    websiteUrl: "https://croixrouge-cameroun.org",
    category: "Humanitaire",
  },
  {
    id: "6",
    name: "Ordre National des Médecins",
    logoUrl: "/images/partners/ordre-medecins.png",
    category: "Professionnel",
  },
];
