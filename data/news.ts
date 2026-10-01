export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  slug: string;
  author: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "Ouverture des inscriptions pour l'année académique 2026-2027",
    excerpt: "L'I3SN annonce l'ouverture officielle des inscriptions pour l'année académique 2026-2027. Les candidats sont invités à soumettre leurs dossiers avant le 30 novembre 2026.",
    date: "2026-09-15",
    category: "Admissions",
    imageUrl: "/images/news/inscriptions.jpg",
    slug: "ouverture-inscriptions-2026-2027",
    author: "Direction des Études",
  },
  {
    id: "2",
    title: "Journée Portes Ouvertes : Découvrez l'I3SN",
    excerpt: "L'Institut Supérieur des Sciences de la Santé de Ngong organise sa journée portes ouvertes le 20 octobre 2026. Venez rencontrer nos enseignants et découvrir nos infrastructures.",
    date: "2026-09-10",
    category: "Événements",
    imageUrl: "/images/news/portes-ouvertes.jpg",
    slug: "journee-portes-ouvertes-2026",
    author: "Service Communication",
  },
  {
    id: "3",
    title: "Signature d'un partenariat avec l'Hôpital Central de Yaoundé",
    excerpt: "L'I3SN renforce ses capacités de formation pratique grâce à un accord de partenariat signé avec l'Hôpital Central de Yaoundé, offrant des stages cliniques à nos étudiants.",
    date: "2026-08-28",
    category: "Partenariats",
    imageUrl: "/images/news/partenariat.jpg",
    slug: "partenariat-hopital-central",
    author: "Direction Générale",
  },
  {
    id: "4",
    title: "Résultats du concours d'entrée — Promotion 2026",
    excerpt: "Les résultats du concours d'entrée à l'I3SN pour la promotion 2026 sont disponibles. Félicitations à tous les candidats retenus !",
    date: "2026-08-05",
    category: "Admissions",
    imageUrl: "/images/news/resultats.jpg",
    slug: "resultats-concours-2026",
    author: "Service des Admissions",
  },
];

export const newsCategories = ["Tous", "Admissions", "Événements", "Partenariats", "Recherche", "Vie du Campus"];
