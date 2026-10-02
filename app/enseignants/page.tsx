import type { Metadata } from "next";
import Link from "next/link";
import { User, Mail, ArrowRight, Phone } from "lucide-react";
import { teachers } from "@/data/teachers";

export const metadata: Metadata = {
  title: "Corps Enseignant",
  description: "Découvrez le corps enseignant de l'I3SN : médecins, chercheurs et spécialistes reconnus dans les sciences de la santé.",
};

export default function EnseignantsPage() {
  const departments = [...new Set(teachers.map((t) => t.department))];

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          <nav aria-label="Fil d'Ariane" className="breadcrumb">
            <Link href="/" id="teachers-breadcrumb-home">Accueil</Link>
            <span>/</span>
            <span>Corps Enseignant</span>
          </nav>
          <h1>Notre Corps Enseignant</h1>
          <p>Des professeurs, docteurs et spécialistes de haut niveau, engagés à former les professionnels de santé de demain.</p>
        </div>
      </div>

      <section className="section" id="teachers-list">
        <div className="container">
          {departments.map((dept) => (
            <div key={dept} className="dept-group" id={`dept-${dept.toLowerCase().replace(/[\s()]/g, "-")}`}>
              <h2 className="dept-title">
                <span className="dept-dot" />{dept}
              </h2>
              <div className="teachers-grid-page">
                {teachers.filter((t) => t.department === dept).map((teacher) => (
                  <article key={teacher.id} className="teacher-page-card" id={`teacher-page-${teacher.id}`}>
                    <div className="teacher-page-avatar" style={{ backgroundImage: `url(${teacher.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'top center' }}>
                    </div>
                    <div className="teacher-page-info">
                      <span className="teacher-page-title-badge">{teacher.title}</span>
                      <h3 className="teacher-page-name">{teacher.name}</h3>
                      <p className="teacher-page-specialty">{teacher.specialty}</p>
                      <p className="teacher-page-bio">{teacher.bio}</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
                        {teacher.email && (
                          <a href={`mailto:${teacher.email}`} className="teacher-page-email" id={`teacher-page-email-${teacher.id}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Mail size={14} />{teacher.email}
                          </a>
                        )}
                        {teacher.phone && (
                          <a href={`tel:${teacher.phone.replace(/\\s+/g, '')}`} className="teacher-page-email" id={`teacher-page-phone-${teacher.id}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Phone size={14} />{teacher.phone}
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-sm cta-light" id="teachers-cta">
        <div className="container cta-center">
          <h2 className="cta-title">Rejoignez notre équipe</h2>
          <p className="cta-desc">L&apos;I3SN recrute régulièrement des enseignants-chercheurs qualifiés.</p>
          <Link href="/contact" className="btn btn-primary" id="teachers-cta-contact">
            Soumettre une candidature <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
