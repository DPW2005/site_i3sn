'use client';

import Link from 'next/link';
import { ArrowRight, Clock, GraduationCap, Stethoscope, Pill, HeartPulse, Baby, Microscope, Activity } from 'lucide-react';
import { programs } from '@/data/programs';

const iconMap: Record<string, React.ElementType> = {
  stethoscope: Stethoscope,
  pill: Pill,
  'heart-pulse': HeartPulse,
  baby: Baby,
  microscope: Microscope,
  activity: Activity,
};

export default function ProgramsSection() {
  return (
    <section id="formations" className="section" aria-labelledby="programs-title">
      <div className="container">
        {/* Section Header */}
        <div className="section-title">
          <span className="label">Nos Formations</span>
          <h2 id="programs-title">
            Des Filières Médicales <span>d&apos;Excellence</span>
          </h2>
          <p>
            L&apos;I3SN propose 6 filières médicales spécialisées, conçues pour répondre aux besoins de santé de l&apos;Afrique et former les professionnels de demain.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="programs-grid">
          {programs.map((program) => {
            const Icon = iconMap[program.icon] || Stethoscope;
            return (
              <article key={program.id} className="program-card" id={`program-${program.id}`}>
                <div className="program-icon-wrapper" style={{ background: `${program.color}15` }}>
                  <div className="program-icon" style={{ background: program.color }}>
                    <Icon size={28} color="white" />
                  </div>
                </div>

                <div className="program-body">
                  <h3 className="program-title">{program.title}</h3>
                  <p className="program-desc">{program.shortDescription}</p>

                  <div className="program-meta">
                    <div className="program-meta-item">
                      <Clock size={14} />
                      <span>{program.duration}</span>
                    </div>
                    <div className="program-meta-item">
                      <GraduationCap size={14} />
                      <span>{program.degree}</span>
                    </div>
                  </div>
                </div>

                <div className="program-footer">
                  <Link
                    href={`/formations/${program.slug}`}
                    className="program-link"
                    id={`program-link-${program.id}`}
                    aria-label={`En savoir plus sur ${program.title}`}
                  >
                    En savoir plus
                    <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Color accent bar */}
                <div className="program-accent" style={{ background: program.color }} />
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="programs-cta">
          <Link href="/formations" className="btn btn-outline-primary btn-lg" id="programs-see-all">
            Voir toutes les formations
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .programs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-bottom: 48px;
        }

        .program-card {
          background: white;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--color-gray-light);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          position: relative;
        }

        .program-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: transparent;
        }

        .program-accent {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          transform: scaleX(0);
          transition: transform 0.3s ease;
          transform-origin: left;
        }

        .program-card:hover .program-accent {
          transform: scaleX(1);
        }

        .program-icon-wrapper {
          padding: 28px 28px 0;
        }

        .program-icon {
          width: 60px;
          height: 60px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          transition: transform 0.3s ease;
        }

        .program-card:hover .program-icon {
          transform: scale(1.1) rotate(-3deg);
        }

        .program-body {
          padding: 20px 28px;
          flex: 1;
        }

        .program-title {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-dark);
          margin-bottom: 10px;
          line-height: 1.3;
        }

        .program-desc {
          font-size: 0.875rem;
          color: var(--color-gray);
          line-height: 1.65;
          margin-bottom: 16px;
        }

        .program-meta {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .program-meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: var(--color-gray);
        }

        .program-meta-item svg {
          color: var(--color-primary-light);
          flex-shrink: 0;
        }

        .program-footer {
          padding: 16px 28px 24px;
          border-top: 1px solid var(--color-gray-light);
          margin-top: auto;
        }

        .program-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-primary);
          text-decoration: none;
          transition: gap 0.2s;
        }

        .program-link:hover {
          gap: 10px;
        }

        .programs-cta {
          text-align: center;
        }

        @media (max-width: 1024px) {
          .programs-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .programs-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
