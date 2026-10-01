import type { Metadata } from "next";
import Link from "next/link";
import { Clock, GraduationCap, ArrowRight, Stethoscope, Pill, HeartPulse, Baby, Microscope, Activity } from "lucide-react";
import { programs } from "@/data/programs";

export const metadata: Metadata = {
  title: "Formations",
  description: "Découvrez les 6 filières médicales de l'I3SN : Médecine Générale, Pharmacie, Sciences Infirmières, Maïeutique, Génie Biomédical et Santé Publique.",
};

const iconMap: Record<string, React.ElementType> = {
  stethoscope: Stethoscope,
  pill: Pill,
  "heart-pulse": HeartPulse,
  baby: Baby,
  microscope: Microscope,
  activity: Activity,
};

export default function FormationsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          <nav aria-label="Fil d'Ariane" className="breadcrumb">
            <Link href="/" id="formations-breadcrumb-home">Accueil</Link>
            <span>/</span>
            <span>Formations</span>
          </nav>
          <h1>Nos Formations Médicales</h1>
          <p>L&apos;I3SN propose 6 filières médicales de haut niveau, conçues pour répondre aux besoins en santé de l&apos;Afrique. Chaque programme combine théorie rigoureuse, stages cliniques et formation pratique.</p>
        </div>
      </div>

      <section className="section" id="formations-list">
        <div className="container">
          <div className="formations-grid">
            {programs.map((program) => {
              const Icon = iconMap[program.icon] || Stethoscope;
              return (
                <article key={program.id} className="formation-card" id={`formation-${program.id}`}>
                  <div className="formation-card-header" style={{ background: `linear-gradient(135deg, ${program.color}dd, ${program.color}99)` }}>
                    <div className="formation-icon">
                      <Icon size={36} color="white" />
                    </div>
                    <div className="formation-header-info">
                      <div className="formation-duration"><Clock size={14} />{program.duration}</div>
                      <div className="formation-degree"><GraduationCap size={14} />{program.degree}</div>
                    </div>
                  </div>
                  <div className="formation-card-body">
                    <h2 className="formation-title">{program.title}</h2>
                    <p className="formation-desc">{program.description}</p>
                    <Link href={`/formations/${program.slug}`} className="btn btn-outline-primary" id={`formation-link-${program.id}`}>
                      Voir le programme <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-sm cta-light" id="formations-cta">
        <div className="container cta-center">
          <h2 className="cta-title">Prêt à vous lancer ?</h2>
          <p className="cta-desc">Candidatez au concours d&apos;entrée de l&apos;I3SN et débutez votre parcours médical dès la prochaine rentrée.</p>
          <Link href="/admissions" className="btn btn-primary btn-lg" id="formations-cta-link">
            Voir les conditions d&apos;admission <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
