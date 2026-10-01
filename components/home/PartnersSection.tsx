'use client';

import { Building2 } from 'lucide-react';
import { partners } from '@/data/partners';

export default function PartnersSection() {
  return (
    <section id="partenaires" className="section-sm" aria-labelledby="partners-title">
      <div className="container">
        <div className="partners-header">
          <div className="divider-line" aria-hidden="true" />
          <h2 id="partners-title" className="partners-title">
            Nos Partenaires & Institutions
          </h2>
          <div className="divider-line" aria-hidden="true" />
        </div>

        <div className="partners-track-wrapper" aria-label="Liste des partenaires de l'I3SN">
          <div className="partners-track">
            {[...partners, ...partners].map((partner, i) => (
              <div key={`${partner.id}-${i}`} className="partner-logo" aria-label={partner.name}>
                <div className="partner-placeholder" aria-hidden="true">
                  <Building2 size={32} color="var(--color-gray)" />
                </div>
                <span className="partner-name">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .partners-header {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-bottom: 48px;
        }

        .divider-line {
          flex: 1;
          height: 1px;
          background: var(--color-gray-light);
        }

        .partners-title {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-gray);
          white-space: nowrap;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .partners-track-wrapper {
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        .partners-track {
          display: flex;
          gap: 32px;
          animation: scroll-track 30s linear infinite;
          width: max-content;
        }

        .partners-track:hover {
          animation-play-state: paused;
        }

        @keyframes scroll-track {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .partner-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 20px 28px;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-gray-light);
          background: white;
          transition: all 0.3s ease;
          min-width: 160px;
          cursor: default;
        }

        .partner-logo:hover {
          border-color: var(--color-primary-faint);
          box-shadow: var(--shadow-md);
          transform: translateY(-3px);
        }

        .partner-placeholder {
          width: 64px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.5;
          transition: opacity 0.2s;
        }

        .partner-logo:hover .partner-placeholder {
          opacity: 0.8;
        }

        .partner-name {
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--color-gray);
          text-align: center;
          line-height: 1.3;
          transition: color 0.2s;
        }

        .partner-logo:hover .partner-name {
          color: var(--color-primary);
        }
      `}</style>
    </section>
  );
}
