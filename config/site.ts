import { departments, programs } from '@/data/programs';

const PHONE_NUMBER = "+237 699 000 000";

export const siteConfig = {
  name: "I3SN",
  fullName: "Institut Supérieur des Sciences de la Santé de Ngong",
  motto: "Probitas · Scientiarum · Excellentiam",

  // Contact
  phone: PHONE_NUMBER,
  phoneSecondary: "+237 699 000 001",
  email: "contact@i3sn.cm",
  emailAdmissions: "admissions@i3sn.cm",
  address: "Ngong, Cameroun",
  fullAddress: "Institut Supérieur des Sciences de la Santé de Ngong\nNgong, Région de l'Adamaoua\nCameroun",

  // Admissions
  schoolYear: "2026–2027",

  // Statistics
  stats: {
    studentsTrained: "1 000+",
    activeStudents: "500+",
    insertionRate: "95%",
    yearsExperience: "10+",
    academicSemesters: "2",
    qualityEngagement: "100%",

    // Dynamic stats based on actual data
    departmentsCount: departments.length.toString(),
    programsCount: programs.length.toString(),
  },

  // Social links (placeholders)
  socials: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    // Remove spaces and '+' if needed, but WhatsApp API works fine with digits only or '+'
    whatsapp: `https://wa.me/${PHONE_NUMBER.replace(/\D/g, '')}`,
  }
};
