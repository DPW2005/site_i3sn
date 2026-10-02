export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  slug: string;
  author: string;
  content: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "Ouverture des inscriptions pour l'année académique 2026-2027",
    excerpt: "L'I3SN annonce l'ouverture officielle des inscriptions pour l'année académique 2026-2027. Les candidats sont invités à soumettre leurs dossiers avant le 30 novembre 2026.",
    date: "2026-09-15",
    category: "Admissions",
    imageUrl: "/actualite/ouverture_inscriptions.jpg",
    slug: "ouverture-inscriptions-2026-2027",
    author: "Direction des Études",
    content: `
      <h2>Une nouvelle année académique commence</h2>
      <p>L'Institut Supérieur des Sciences de la Santé de Ngong (I3SN) est ravi d'annoncer l'ouverture officielle des inscriptions pour l'année académique 2026-2027. Les candidats désireux de rejoindre l'une de nos prestigieuses filières sont invités à soumettre leurs dossiers complets.</p>
      <h3>Conditions d'admission</h3>
      <ul>
        <li>Copie certifiée de l'acte de naissance</li>
        <li>Copie certifiée du diplôme requis (Baccalauréat, GCE AL ou équivalent)</li>
        <li>Certificat médical d'aptitude</li>
        <li>Frais d'étude de dossier</li>
      </ul>
      <p>Les dossiers doivent être déposés à la scolarité de l'institut avant le 30 novembre 2026. Pour plus d'informations, n'hésitez pas à nous contacter.</p>
    `,
  },
  {
    id: "2",
    title: "Journée Portes Ouvertes : Découvrez l'I3SN",
    excerpt: "L'Institut Supérieur des Sciences de la Santé de Ngong organise sa journée portes ouvertes le 20 octobre 2026. Venez rencontrer nos enseignants et découvrir nos infrastructures.",
    date: "2026-09-10",
    category: "Événements",
    imageUrl: "/actualite/portes_ouvertes.jpg",
    slug: "journee-portes-ouvertes-2026",
    author: "Service Communication",
    content: `
      <h2>Venez découvrir notre campus</h2>
      <p>L'Institut Supérieur des Sciences de la Santé de Ngong organise sa journée portes ouvertes le 20 octobre 2026. C'est l'occasion idéale pour les futurs étudiants et leurs parents de découvrir notre environnement d'apprentissage exceptionnel.</p>
      <h3>Au programme :</h3>
      <ul>
        <li>Visite guidée des infrastructures (Amphithéâtres, Bibliothèques)</li>
        <li>Découverte de nos laboratoires ultra-modernes</li>
        <li>Démonstrations au centre de simulation médicale</li>
        <li>Rencontre avec le corps enseignant et les étudiants actuels</li>
      </ul>
      <p>Nous vous attendons nombreux dès 09h00 sur notre campus principal à Ngong. L'entrée est libre et gratuite.</p>
    `,
  },
  {
    id: "3",
    title: "Signature d'un partenariat avec l'Hôpital Central de Yaoundé",
    excerpt: "L'I3SN renforce ses capacités de formation pratique grâce à un accord de partenariat signé avec l'Hôpital Central de Yaoundé, offrant des stages cliniques à nos étudiants.",
    date: "2026-08-28",
    category: "Partenariats",
    imageUrl: "/actualite/signature_partenariat.jpg",
    slug: "partenariat-hopital-central",
    author: "Direction Générale",
    content: `
      <h2>Un nouveau partenariat stratégique</h2>
      <p>Dans sa quête perpétuelle d'excellence, l'I3SN vient de signer un accord de partenariat majeur avec l'Hôpital Général de Garoua. Cette collaboration stratégique vise à renforcer les capacités pratiques de nos étudiants.</p>
      <p>Grâce à ce partenariat, nos étudiants bénéficieront de :</p>
      <ul>
        <li>Stages cliniques encadrés par des professionnels expérimentés</li>
        <li>Accès à des équipements médicaux de pointe</li>
        <li>Participation à des projets de recherche conjoints</li>
      </ul>
      <p>Ce partenariat s'inscrit dans notre vision de former des professionnels de santé compétents, directement opérationnels sur le marché de l'emploi.</p>
    `,
  },
  {
    id: "4",
    title: "Résultats du concours d'entrée — Promotion 2026",
    excerpt: "Les résultats du concours d'entrée à l'I3SN pour la promotion 2026 sont disponibles. Félicitations à tous les candidats retenus !",
    date: "2026-08-05",
    category: "Admissions",
    imageUrl: "/actualite/resultats_concours.jpg",
    slug: "resultats-concours-2026",
    author: "Service des Admissions",
    content: `
      <h2>Félicitations aux admis !</h2>
      <p>La Direction Générale de l'I3SN informe le public que les résultats du concours d'entrée pour l'année académique 2026-2027 sont désormais disponibles.</p>
      <p>Les candidats peuvent consulter les listes des admis sur les tableaux d'affichage du campus ou contacter directement le service de la scolarité. Les admis sont priés de se présenter pour remplir les formalités d'inscription définitives dans les plus brefs délais.</p>
      <p>Félicitations à tous les candidats retenus et bienvenue à l'Institut Supérieur des Sciences de la Santé de Ngong !</p>
    `,
  },
];

export const newsCategories = ["Tous", "Admissions", "Événements", "Partenariats", "Recherche", "Vie du Campus"];
