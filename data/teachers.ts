export interface Teacher {
  id: string;
  name: string;
  title: string;
  specialty: string;
  department: string;
  imageUrl: string;
  email?: string;
  bio: string;
}

export const teachers: Teacher[] = [
  {
    id: "1",
    name: "Pr. Jean-Baptiste NKOLO",
    title: "Professeur Titulaire",
    specialty: "Médecine Interne & Cardiologie",
    department: "Médecine Générale",
    imageUrl: "/images/teachers/teacher-1.jpg",
    email: "jb.nkolo@i3sn.cm",
    bio: "Professeur titulaire avec plus de 20 ans d'expérience en médecine interne et cardiologie. Ancien chef de service à l'Hôpital Central de Yaoundé.",
  },
  {
    id: "2",
    name: "Dr. Marcelline ESSOMBA",
    title: "Maître de Conférences",
    specialty: "Pharmacologie & Biochimie",
    department: "Pharmacie",
    imageUrl: "/images/teachers/teacher-2.jpg",
    email: "m.essomba@i3sn.cm",
    bio: "Spécialiste en pharmacologie clinique et biochimie, Dr Essomba est également chercheuse active dans le domaine des plantes médicinales africaines.",
  },
  {
    id: "3",
    name: "Dr. Paul FOTSO",
    title: "Maître de Conférences",
    specialty: "Chirurgie Générale",
    department: "Médecine Générale",
    imageUrl: "/images/teachers/teacher-3.jpg",
    email: "p.fotso@i3sn.cm",
    bio: "Chirurgien reconnu, Dr Fotso enseigne les techniques chirurgicales et la sémiologie. Il dirige également le laboratoire de simulation médicale de l'I3SN.",
  },
  {
    id: "4",
    name: "Pr. Céline ABENA",
    title: "Professeur Associée",
    specialty: "Obstétrique & Gynécologie",
    department: "Maïeutique",
    imageUrl: "/images/teachers/teacher-4.jpg",
    email: "c.abena@i3sn.cm",
    bio: "Experte en obstétrique, Pr Abena est une pionnière de la formation des sages-femmes au Cameroun. Elle coordonne les stages cliniques en maternité.",
  },
  {
    id: "5",
    name: "Dr. Hervé MBOUNA",
    title: "Docteur-Ingénieur",
    specialty: "Génie Biomédical & Imagerie",
    department: "Génie Biomédical",
    imageUrl: "/images/teachers/teacher-5.jpg",
    email: "h.mbouna@i3sn.cm",
    bio: "Ingénieur biomédical spécialisé dans les équipements d'imagerie médicale, Dr Mbouna a travaillé pour plusieurs hôpitaux internationaux avant de rejoindre l'I3SN.",
  },
  {
    id: "6",
    name: "Dr. Florence NGAH",
    title: "Maître Assistante",
    specialty: "Épidémiologie & Santé Publique",
    department: "Santé Publique",
    imageUrl: "/images/teachers/teacher-6.jpg",
    email: "f.ngah@i3sn.cm",
    bio: "Épidémiologiste formée à l'OMS, Dr Ngah enseigne les méthodes d'investigation épidémiologique et la gestion des programmes de santé publique.",
  },
];
