import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, GraduationCap, CheckCircle } from "lucide-react";
import { programs } from "@/data/programs";
import { programCourses } from "@/data/courses";
import { siteConfig } from "@/config/site";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) return { title: "Formation non trouvée" };

  return {
    title: `${program.shortTitle} | Formations I3SN`,
    description: program.shortDescription,
  };
}

export function generateStaticParams() {
  return programs.map((program) => ({
    slug: program.slug,
  }));
}

export default async function ProgramPage({ params }: PageProps) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) notFound();

  const courses = programCourses[program.id];

  return (
    <>
      <div className="page-hero" style={{ background: `linear-gradient(135deg, ${program.color}dd, #0B4F9E)` }}>
        <div className="container page-hero-content" style={{ paddingBottom: '4rem' }}>
          <nav aria-label="Fil d'Ariane" className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <Link href="/formations">Formations</Link>
            <span>/</span>
            <span>{program.shortTitle}</span>
          </nav>
          <h1>{program.title}</h1>
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '50px', fontSize: '0.9rem' }}>
              <Clock size={16} /> {program.duration}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '50px', fontSize: '0.9rem' }}>
              <GraduationCap size={16} /> {program.degree}
            </span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <Link href="/formations" className="btn btn-outline" style={{ marginBottom: '2rem' }}>
            <ArrowLeft size={16} /> Retour aux formations
          </Link>

          <div style={{ display: 'grid', gap: '3rem' }} className="formation-details-grid">

            <div className="formation-main-content">
              <h2>Présentation de la filière</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem', color: 'var(--text-secondary)' }}>{program.description}</p>

              <h3>Conditions d&apos;admission</h3>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                {program.requirements.map((req, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.5rem', alignItems: 'flex-start' }}>
                    <CheckCircle size={20} color={program.color} style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>

              {courses && (
                <>
                  <h3 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Unités d&apos;Enseignement par niveau</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {Object.entries(courses).map(([level, units]) => (
                      <div key={level} className="course-level-card" style={{ background: 'white', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                        <h4 style={{ color: program.color, marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>Niveau {level}</h4>
                        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '0.5rem 1rem', listStyle: 'none', padding: 0 }}>
                          {(units as string[]).map((ue, i) => (
                            <li key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                              <span style={{ width: '6px', height: '6px', background: program.color, borderRadius: '50%', flexShrink: 0 }} />
                              {ue}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="formation-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.25rem' }}>Intéressé(e) ?</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Les inscriptions pour l&apos;année académique {siteConfig.schoolYear} sont ouvertes.</p>
                <Link href="/admissions" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Candidater maintenant
                </Link>
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                  Nous contacter
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
