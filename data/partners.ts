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
    name: "Hôpital Central de Yaoundé",
    logoUrl: "/images/partners/hopital-central.png",
    websiteUrl: "https://hopital-central.cm",
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
    name: "Université de Yaoundé I",
    logoUrl: "/images/partners/uy1.png",
    websiteUrl: "https://uy1.uninet.cm",
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
