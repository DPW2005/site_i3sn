export interface Program {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  department: string;
  description: string;
  shortDescription: string;
  duration: string;
  degree: string;
  levels: string[];
  icon: string;
  color: string;
  requirements: string[];
}

export const departments = [
  {
    id: "sfm",
    name: "Sages-Femmes / Maïeuticiens",
    description: "Formation aux soins obstétricaux et à l'accompagnement de la femme enceinte.",
    coordonnateur: "À définir",
  },
  {
    id: "atms",
    name: "Agents Techniques Médico-Sanitaires (ATMS)",
    description: "Formation technique aux analyses médicales, sciences pharmaceutiques et services de morgue.",
    coordonnateur: "À définir",
  },
  {
    id: "aides-soignants",
    name: "Aides Soignants",
    description: "Formation aux soins de base auprès des patients en milieu hospitalier et communautaire.",
    coordonnateur: "À définir",
  },
  {
    id: "soins-infirmiers",
    name: "Soins Infirmiers",
    description: "Formation complète en soins infirmiers diplômés d'État.",
    coordonnateur: "À définir",
  },
  {
    id: "tms",
    name: "Techniques Médico-Sanitaires (TMS)",
    description: "Formation avancée aux techniques médicales spécialisées, kinésithérapie et gestion sanitaire.",
    coordonnateur: "À définir",
  },
];

export const programs: Program[] = [
  // --- Département Sages-Femmes / Maïeuticiens ---
  {
    id: "sfm",
    slug: "sages-femmes-maieuticiens",
    title: "Sages-Femmes / Maïeuticiens (SFM)",
    shortTitle: "SFM",
    department: "Sages-Femmes / Maïeuticiens",
    description:
      "La formation en Sages-Femmes / Maïeuticiens prépare des professionnels de santé spécialisés dans le suivi de la grossesse, l'accouchement et les soins post-nataux. Le programme s'étend sur 3 niveaux et allie cours théoriques, travaux pratiques et stages cliniques en maternité.",
    shortDescription:
      "Accompagnement de la femme enceinte, accouchements et soins post-nataux. Formation sur 3 niveaux.",
    duration: "3 ans (Niveaux 1, 2 et 3)",
    degree: "Diplôme d'État de Sage-Femme / Maïeuticien",
    levels: ["Niveau 1", "Niveau 2", "Niveau 3"],
    icon: "baby",
    color: "#9b59b6",
    requirements: ["Baccalauréat série C, D ou F", "Âge maximum 25 ans", "Bonne condition physique"],
  },

  // --- Département ATMS ---
  {
    id: "atms-am",
    slug: "atms-analyse-medicale",
    title: "ATMS — Analyse Médicale (ATMS AM)",
    shortTitle: "ATMS AM",
    department: "Agents Techniques Médico-Sanitaires (ATMS)",
    description:
      "L'ATMS option Analyse Médicale forme des techniciens capables de réaliser des prélèvements biologiques et des analyses de laboratoire (hématologie, biochimie, microbiologie, parasitologie). Formation en 1 niveau avec nombreux stages pratiques.",
    shortDescription:
      "Analyses de laboratoire, prélèvements biologiques et diagnostic biologique. Formation niveau 1.",
    duration: "1 an (Niveau 1)",
    degree: "Brevet d'Agent Technique Médico-Sanitaire — Analyse Médicale",
    levels: ["Niveau 1"],
    icon: "microscope",
    color: "#e67e22",
    requirements: ["Baccalauréat série C ou D", "Âge maximum 25 ans"],
  },
  {
    id: "atms-pm",
    slug: "atms-prepose-morgue",
    title: "ATMS — Préposé de Morgue (ATMS PM)",
    shortTitle: "ATMS PM",
    department: "Agents Téchniques Médico-Sanitaires (ATMS)",
    description:
      "L'ATMS option Préposé de Morgue prépare des techniciens aux soins mortuaires, à la conservation des corps et aux procédures médico-légales. Formation pratique encadrée en milieu hospitalier.",
    shortDescription:
      "Soins mortuaires, conservation des corps et procédures médico-légales. Formation niveau 1.",
    duration: "1 an (Niveau 1)",
    degree: "Brevet d'Agent Technique Médico-Sanitaire — Préposé de Morgue",
    levels: ["Niveau 1"],
    icon: "activity",
    color: "#7f8c8d",
    requirements: ["Baccalauréat série C, D ou F", "Âge maximum 25 ans"],
  },
  {
    id: "atms-sp",
    slug: "atms-sciences-pharmaceutiques",
    title: "ATMS — Sciences Pharmaceutiques (ATMS SP)",
    shortTitle: "ATMS SP",
    department: "Agents Techniques Médico-Sanitaires (ATMS)",
    description:
      "L'ATMS option Sciences Pharmaceutiques prépare aux activités de dispensation et de gestion des médicaments en officine ou en hôpital. Les étudiants apprennent la pharmacologie de base, la gestion des stocks et le conseil aux patients.",
    shortDescription:
      "Gestion et dispensation des médicaments en officine ou hôpital. Formation niveau 1.",
    duration: "1 an (Niveau 1)",
    degree: "Brevet d'Agent Technique Médico-Sanitaire — Sciences Pharmaceutiques",
    levels: ["Niveau 1"],
    icon: "pill",
    color: "#16a085",
    requirements: ["Baccalauréat série C ou D", "Âge maximum 25 ans"],
  },

  // --- Département Aides Soignants ---
  {
    id: "aide-soignant-generaliste",
    slug: "aide-soignant-generaliste",
    title: "Aide Soignant Généraliste",
    shortTitle: "AS Généraliste",
    department: "Aides Soignants",
    description:
      "La formation d'Aide Soignant Généraliste prépare à l'assistance des infirmiers dans les soins quotidiens aux patients hospitalisés : hygiène, confort, alimentation et soutien moral. Formation pratique intensive en milieu hospitalier.",
    shortDescription:
      "Soins de base et assistance aux patients hospitalisés en milieu général. Formation niveau 1.",
    duration: "1 an (Niveau 1)",
    degree: "Brevet d'Aide Soignant Généraliste",
    levels: ["Niveau 1"],
    icon: "heart-pulse",
    color: "#e74c3c",
    requirements: ["BEPC minimum", "Baccalauréat apprécié", "Âge maximum 30 ans"],
  },
  {
    id: "aide-soignant-communautaire",
    slug: "aide-soignant-communautaire",
    title: "Aide Soignant Communautaire",
    shortTitle: "AS Communautaire",
    department: "Aides Soignants",
    description:
      "L'Aide Soignant Communautaire est formé pour intervenir auprès des populations dans les zones rurales et communautés éloignées, en promouvant la santé préventive et en assurant des soins de proximité essentiels.",
    shortDescription:
      "Soins de proximité et promotion de la santé dans les communautés rurales. Formation niveau 1.",
    duration: "1 an (Niveau 1)",
    degree: "Brevet d'Aide Soignant Communautaire",
    levels: ["Niveau 1"],
    icon: "stethoscope",
    color: "#2980b9",
    requirements: ["BEPC minimum", "Baccalauréat apprécié", "Âge maximum 35 ans"],
  },

  // --- Département Soins Infirmiers ---
  {
    id: "ide",
    slug: "infirmier-diplome-etat",
    title: "Infirmier Diplômé d'État (IDE)",
    shortTitle: "IDE",
    department: "Soins Infirmiers",
    description:
      "La formation d'Infirmier Diplômé d'État (IDE) est le programme phare de l'I3SN. Sur 3 niveaux, les étudiants acquièrent toutes les compétences cliniques, techniques et relationnelles pour exercer en autonomie dans tout établissement de santé.",
    shortDescription:
      "Formation complète en soins infirmiers pour exercer en autonomie. Programme sur 3 niveaux.",
    duration: "3 ans (Niveaux 1, 2 et 3)",
    degree: "Diplôme d'État d'Infirmier (IDE)",
    levels: ["Niveau 1", "Niveau 2", "Niveau 3"],
    icon: "heart-pulse",
    color: "#1a6b3c",
    requirements: ["Baccalauréat série C, D ou F", "Âge maximum 25 ans", "Certificat médical"],
  },

  // --- Département TMS ---
  {
    id: "tms-am",
    slug: "tms-analyse-medicale",
    title: "TMS — Analyse Médicale (TMS AM)",
    shortTitle: "TMS AM",
    department: "Techniques Médico-Sanitaires (TMS)",
    description:
      "La formation TMS Analyse Médicale offre un niveau avancé de technicien en analyses biologiques. Sur 3 niveaux, les étudiants maîtrisent les techniques de laboratoire les plus pointues : cytologie, biologie moléculaire, immunologie et sérologie.",
    shortDescription:
      "Technicien avancé en analyses biologiques : cytologie, immunologie, biologie moléculaire. 3 niveaux.",
    duration: "3 ans (Niveaux 1, 2 et 3)",
    degree: "Diplôme de Technicien Médico-Sanitaire — Analyse Médicale",
    levels: ["Niveau 1", "Niveau 2", "Niveau 3"],
    icon: "microscope",
    color: "#8e44ad",
    requirements: ["Baccalauréat série C ou D", "Âge maximum 25 ans"],
  },
  {
    id: "tms-kine",
    slug: "tms-kinesitherapie",
    title: "TMS — Kinésithérapie (TMS Kiné)",
    shortTitle: "TMS Kiné",
    department: "Techniques Médico-Sanitaires (TMS)",
    description:
      "La filière TMS Kinésithérapie forme des techniciens spécialisés en rééducation physique et fonctionnelle. Le programme sur 3 niveaux couvre la physiothérapie, le massage thérapeutique, la rééducation post-opératoire et le sport-santé.",
    shortDescription:
      "Rééducation physique, physiothérapie et massage thérapeutique. Formation sur 3 niveaux.",
    duration: "3 ans (Niveaux 1, 2 et 3)",
    degree: "Diplôme de Technicien en Kinésithérapie",
    levels: ["Niveau 1", "Niveau 2", "Niveau 3"],
    icon: "activity",
    color: "#2980b9",
    requirements: ["Baccalauréat série C, D ou F", "Âge maximum 25 ans", "Aptitude physique"],
  },
  {
    id: "tgs",
    slug: "tgs",
    title: "TGS — Technicien de Gestion Sanitaire",
    shortTitle: "TGS",
    department: "Techniques Médico-Sanitaires (TMS)",
    description:
      "Le TGS (Technicien de Gestion Sanitaire) forme des professionnels capables d'administrer et de gérer les structures de santé : gestion des ressources humaines, comptabilité hospitalière, planification sanitaire et management des unités de soins.",
    shortDescription:
      "Administration et gestion des structures de santé, management hospitalier. Formation sur 3 niveaux.",
    duration: "3 ans (Niveaux 1, 2 et 3)",
    degree: "Diplôme de Technicien de Gestion Sanitaire (TGS)",
    levels: ["Niveau 1", "Niveau 2", "Niveau 3"],
    icon: "stethoscope",
    color: "#d4a017",
    requirements: ["Baccalauréat série A4, C, D ou F", "Âge maximum 25 ans"],
  },
];
