'use client';

import Link from 'next/link';
import { ArrowRight, Mail, User } from 'lucide-react';
import { teachers } from '@/data/teachers';

export default function TeachersSection() {
  const featured = teachers.slice(0, 4);

  return (
    <section id="enseignants" className="section" aria-labelledby="teachers-title">
      <div className="container">
        <div className="teachers-header">
          <div className="section-title" style={{ textAlign: 'left', marginBottom: 0 }}>
            <span className="label">Corps Enseignant</span>
            <h2 id="teachers-title">
              Nos <span>Experts</span>
            </h2>
            <p>Un corps professoral de haut niveau, composé de médecins, chercheurs et spécialistes reconnus.</p>
          </div>
          <Link href="/enseignants" className="btn btn-outline-primary" id="teachers-see-all">
            Voir tous les enseignants
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="teachers-grid">
          {featured.map((teacher) => (
            <article key={teacher.id} className="teacher-card" id={`teacher-${teacher.id}`}>
              <div className="teacher-avatar" aria-hidden="true">
                <div className="teacher-avatar-placeholder">
                  <User size={48} color="rgba(255,255,255,0.5)" />
                </div>
                <div className="teacher-avatar-overlay" />
              </div>

              <div className="teacher-info">
                <div className="teacher-department">{teacher.department}</div>
                <h3 className="teacher-name">{teacher.name}</h3>
                <div className="teacher-title-badge">{teacher.title}</div>
                <p className="teacher-specialty">{teacher.specialty}</p>

                {teacher.email && (
                  <a
                    href={`mailto:${teacher.email}`}
                    className="teacher-email"
                    id={`teacher-email-${teacher.id}`}
                    aria-label={`Envoyer un email à ${teacher.name}`}
                  >
                    <Mail size={14} />
                    {teacher.email}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .teachers-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .teachers-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .teacher-card {
          background: white;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--color-gray-light);
          transition: all 0.3s ease;
          cursor: default;
        }

        .teacher-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg);
          border-color: transparent;
        }

        .teacher-avatar {
          height: 200px;
          position: relative;
          overflow: hidden;
        }

        .teacher-avatar-placeholder {
          position: absolute;
          inset: 0;
          background: var(--gradient-primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .teacher-avatar-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(11,79,158,0.5) 0%, transparent 60%);
        }

        .teacher-card:hover .teacher-avatar-placeholder {
          transform: scale(1.05);
          transition: transform 0.4s ease;
        }

        .teacher-info {
          padding: 20px;
        }

        .teacher-department {
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-primary-light);
          margin-bottom: 6px;
        }

        .teacher-name {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-dark);
          line-height: 1.3;
          margin-bottom: 8px;
        }

        .teacher-title-badge {
          display: inline-block;
          background: var(--color-primary-faint);
          color: var(--color-primary);
          font-size: 0.72rem;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 100px;
          margin-bottom: 10px;
        }

        .teacher-specialty {
          font-size: 0.8rem;
          color: var(--color-gray);
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .teacher-email {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          color: var(--color-gray);
          text-decoration: none;
          transition: color 0.2s;
          word-break: break-all;
        }

        .teacher-email:hover {
          color: var(--color-primary);
        }

        .teacher-email svg {
          flex-shrink: 0;
          color: var(--color-primary-light);
        }

        @media (max-width: 1100px) {
          .teachers-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .teachers-grid { grid-template-columns: 1fr; }
          .teachers-header { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </section>
  );
}
