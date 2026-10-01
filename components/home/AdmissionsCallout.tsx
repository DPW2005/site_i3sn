'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle, Calendar, FileText, Phone } from 'lucide-react';

const steps = [
  { icon: FileText, label: "Constituer le dossier", desc: "Bac/BEPC, acte de naissance, photos d'identité, certificat médical, reçus de paiement" },
  { icon: Calendar, label: "Déposer le dossier", desc: "Soumettez votre dossier au secrétariat avant la date limite — places limitées" },
  { icon: CheckCircle, label: "Passer le concours", desc: "Épreuves écrites (examen régional) et entretien oral. Note minimale : 12/20 (14 pour le stage)" },
  { icon: ArrowRight, label: "Validation & inscription", desc: "Le comptable valide votre inscription définitive après vérification de votre dossier complet" },
];


export default function AdmissionsCallout() {
  return (
    <section id="admissions-callout" className="callout-section" aria-labelledby="callout-title">
      <div className="callout-bg" aria-hidden="true" />
      <div className="callout-overlay" aria-hidden="true" />

      <div className="container callout-inner">
        <div className="callout-text">
          <span className="callout-badge">Admissions 2026–2027</span>
          <h2 id="callout-title" className="callout-title">
            Rejoignez l&apos;I3SN — Les Inscriptions sont Ouvertes
          </h2>
          <p className="callout-desc">
            Le concours d&apos;entrée à l&apos;Institut Supérieur des Sciences de la Santé de Ngong est ouvert. Soumettez votre candidature dès maintenant et faites partie de la prochaine génération de professionnels de santé.
          </p>

          <div className="callout-steps">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="callout-step">
                  <div className="step-number">{i + 1}</div>
                  <div className="step-content">
                    <div className="step-label">
                      <Icon size={14} />
                      {step.label}
                    </div>
                    <p className="step-desc">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="callout-actions">
            <Link href="/admissions" className="btn btn-primary btn-lg" id="callout-cta-admissions">
              Candidater maintenant
              <ArrowRight size={18} />
            </Link>
            <a href="tel:+237699000000" className="btn btn-outline btn-lg" id="callout-cta-phone">
              <Phone size={18} />
              Nous contacter
            </a>
          </div>
        </div>

        <div className="callout-card">
          <div className="deadline-card">
            <div className="deadline-header">
              <Calendar size={20} />
              <span>Dates Importantes</span>
            </div>
            <div className="deadline-list">
              {[
                { event: "Ouverture des inscriptions", date: "01 Septembre 2026", done: true },
                { event: "Clôture du dossier", date: "30 Novembre 2026", done: false },
                { event: "Épreuves écrites", date: "15 Janvier 2027", done: false },
                { event: "Épreuves orales", date: "01 Février 2027", done: false },
                { event: "Publication des résultats", date: "15 Février 2027", done: false },
              ].map((item, i) => (
                <div key={i} className={`deadline-item ${item.done ? 'deadline-done' : ''}`}>
                  <div className="deadline-dot" />
                  <div>
                    <div className="deadline-event">{item.event}</div>
                    <div className="deadline-date">{item.date}</div>
                  </div>
                  {item.done && <CheckCircle size={16} className="deadline-check" />}
                </div>
              ))}
            </div>
            <Link href="/admissions" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} id="callout-dates-cta">
              Voir toutes les conditions
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .callout-section {
          position: relative;
          overflow: hidden;
          padding: 100px 0;
          color: white;
        }

        .callout-bg {
          position: absolute;
          inset: 0;
          background: var(--gradient-hero);
        }

        .callout-overlay {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .callout-inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .callout-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 100px;
          padding: 6px 18px;
          font-size: 0.8rem;
          font-weight: 600;
          color: rgba(255,255,255,0.9);
          margin-bottom: 20px;
          backdrop-filter: blur(8px);
        }

        .callout-title {
          font-family: var(--font-heading);
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 800;
          color: white;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .callout-desc {
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.8);
          margin-bottom: 36px;
        }

        .callout-steps {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 36px;
        }

        .callout-step {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .step-number {
          width: 32px;
          height: 32px;
          background: rgba(255,255,255,0.2);
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-size: 0.875rem;
          font-weight: 700;
          color: white;
          flex-shrink: 0;
        }

        .step-content {
          flex: 1;
        }

        .step-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
          font-size: 0.9rem;
          color: white;
          margin-bottom: 3px;
        }

        .step-desc {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.65);
          line-height: 1.5;
        }

        .callout-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        /* Deadline Card */
        .callout-card {
          display: flex;
          justify-content: center;
        }

        .deadline-card {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: var(--radius-lg);
          padding: 32px;
          width: 100%;
          max-width: 360px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.2);
        }

        .deadline-header {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 700;
          color: white;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.15);
        }

        .deadline-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 28px;
        }

        .deadline-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          position: relative;
          opacity: 0.85;
          transition: opacity 0.2s;
        }

        .deadline-item:hover {
          opacity: 1;
        }

        .deadline-done {
          opacity: 0.6;
        }

        .deadline-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255,255,255,0.4);
          margin-top: 4px;
          flex-shrink: 0;
          border: 2px solid rgba(255,255,255,0.6);
        }

        .deadline-done .deadline-dot {
          background: #2ecc71;
          border-color: #2ecc71;
        }

        .deadline-event {
          font-size: 0.85rem;
          font-weight: 600;
          color: white;
          margin-bottom: 2px;
        }

        .deadline-date {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.6);
        }

        .deadline-check {
          color: #2ecc71;
          margin-left: auto;
          flex-shrink: 0;
          margin-top: 2px;
        }

        @media (max-width: 1024px) {
          .callout-inner { grid-template-columns: 1fr; gap: 48px; }
          .callout-card { display: none; }
        }

        @media (max-width: 640px) {
          .callout-section { padding: 60px 0; }
          .callout-actions { flex-direction: column; }
        }
      `}</style>
    </section>
  );
}
