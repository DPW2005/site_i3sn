'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Probitas \u2022 Scientiarum \u2022 Excellentiam",
    subtitle: "Institut Supérieur des Sciences de la Santé de Ngong",
    description: "L'I3SN forme les professionnels de santé du Cameroun : Infirmiers Diplômés d'État, Sages-Femmes, Techniciens Médico-Sanitaires et Aides-Soignants. Une formation d'excellence ancrée dans les réalités africaines.",
    cta: { label: "Découvrir nos filières", href: "/formations" },
    ctaSecondary: { label: "Candidater 2026–2027", href: "/admissions" },
    bg: "linear-gradient(135deg, #10492a 0%, #1a6b3c 55%, #27ae60 100%)",
  },
  {
    id: 2,
    title: "5 Départements, 9 Filières Médicales",
    subtitle: "Une offre de formation complète et reconnue",
    description: "De la Sage-Femme à l'Infirmier Diplômé d'État, des Agents Techniques Médico-Sanitaires aux Techniciens de Gestion Sanitaire — l'I3SN couvre tous les métiers de la santé pour répondre aux besoins du Cameroun.",
    cta: { label: "Voir toutes les filières", href: "/formations" },
    ctaSecondary: { label: "Nous contacter", href: "/contact" },
    bg: "linear-gradient(135deg, #1a6b3c 0%, #2a9d5c 60%, #27ae60 100%)",
  },
  {
    id: 3,
    title: "Concours d'Entrée 2026-2027",
    subtitle: "Les inscriptions sont ouvertes — Places limitées",
    description: "Rejoignez la prochaine promotion de l'I3SN. Constituez votre dossier, passez le concours d'entrée et construisez votre avenir dans les sciences de la santé au Cameroun et en Afrique.",
    cta: { label: "Conditions d'admission", href: "/admissions" },
    ctaSecondary: { label: "Préparer mon dossier", href: "/admissions#dossier" },
    bg: "linear-gradient(135deg, #0d2b1a 0%, #1a6b3c 50%, #2a9d5c 100%)",
  },
];


export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const goToNext = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <section id="hero" aria-label="Bannière principale" className="hero-section">
      {/* Slide backgrounds */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`hero-bg ${i === currentSlide ? 'hero-bg-active' : ''}`}
          style={{ background: s.bg }}
          aria-hidden="true"
        />
      ))}

      {/* Overlay pattern */}
      <div className="hero-pattern" aria-hidden="true" />

      {/* Floating shapes */}
      <div className="hero-shapes" aria-hidden="true">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>

      {/* Content */}
      <div className="container hero-content">
        <div className="hero-text" key={currentSlide}>
          <div className="hero-label">
            <span className="hero-label-dot" />
            {slide.subtitle}
          </div>
          <h1 className="hero-title">{slide.title}</h1>
          <p className="hero-description">{slide.description}</p>

          <div className="hero-ctas">
            <Link href={slide.cta.href} className="btn btn-primary btn-lg" id={`hero-cta-primary-${slide.id}`}>
              {slide.cta.label}
              <ArrowRight size={18} />
            </Link>
            <Link href={slide.ctaSecondary.href} className="btn btn-outline btn-lg" id={`hero-cta-secondary-${slide.id}`}>
              {slide.ctaSecondary.label}
            </Link>
          </div>
        </div>

        {/* Stats mini */}
        <div className="hero-stats">
          {[
            { value: "1 000+", label: "Étudiants formés" },
            { value: "6", label: "Filières médicales" },
            { value: "95%", label: "Taux d'insertion" },
          ].map((stat) => (
            <div key={stat.label} className="hero-stat">
              <div className="hero-stat-value">{stat.value}</div>
              <div className="hero-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="hero-dots" role="tablist" aria-label="Navigation des diapositives">
        {slides.map((s, i) => (
          <button
            key={s.id}
            id={`hero-dot-${i + 1}`}
            role="tab"
            aria-selected={i === currentSlide}
            aria-label={`Diapositive ${i + 1} : ${s.title}`}
            className={`hero-dot ${i === currentSlide ? 'hero-dot-active' : ''}`}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll" aria-hidden="true">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Défiler</span>
      </div>

      {/* Breadcrumb / nav hint */}
      <nav className="hero-breadcrumb" aria-label="Fil d'Ariane">
        <Link href="/" className="hero-breadcrumb-link" id="hero-breadcrumb-home">Accueil</Link>
        <ChevronRight size={14} color="rgba(255,255,255,0.5)" />
        <span className="hero-breadcrumb-current">{slide.subtitle}</span>
      </nav>

      <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          color: white;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.8s ease;
          z-index: 0;
        }

        .hero-bg-active {
          opacity: 1;
        }

        .hero-pattern {
          position: absolute;
          inset: 0;
          z-index: 1;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .hero-shapes {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.04);
          animation: float 8s ease-in-out infinite;
        }

        .shape-1 {
          width: 600px;
          height: 600px;
          top: -200px;
          right: -100px;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 300px;
          height: 300px;
          bottom: 100px;
          left: 15%;
          animation-delay: 3s;
        }

        .shape-3 {
          width: 200px;
          height: 200px;
          top: 30%;
          right: 20%;
          animation-delay: 1.5s;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          padding-top: 120px;
          padding-bottom: 120px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
        }

        .hero-text {
          max-width: 700px;
          animation: fadeInUp 0.7s ease;
        }

        .hero-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 100px;
          padding: 8px 20px;
          font-size: 0.85rem;
          font-weight: 500;
          color: rgba(255,255,255,0.9);
          margin-bottom: 24px;
          backdrop-filter: blur(8px);
        }

        .hero-label-dot {
          width: 8px;
          height: 8px;
          background: #2ecc71;
          border-radius: 50%;
          animation: pulse-ring 2s ease-out infinite;
          flex-shrink: 0;
        }

        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }

        .hero-title {
          font-family: var(--font-heading);
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 900;
          line-height: 1.08;
          color: white;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }

        .hero-description {
          font-size: clamp(1rem, 2vw, 1.15rem);
          line-height: 1.75;
          color: rgba(255,255,255,0.82);
          margin-bottom: 40px;
          max-width: 580px;
        }

        .hero-ctas {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .hero-stats {
          display: flex;
          gap: 40px;
          flex-wrap: wrap;
        }

        .hero-stat {
          position: relative;
        }

        .hero-stat::before {
          content: '';
          position: absolute;
          left: -20px;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 40px;
          background: rgba(255,255,255,0.2);
        }

        .hero-stat:first-child::before {
          display: none;
        }

        .hero-stat-value {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          font-weight: 800;
          color: white;
          line-height: 1;
          margin-bottom: 4px;
        }

        .hero-stat-label {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.65);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        /* Dots */
        .hero-dots {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 3;
        }

        .hero-dot {
          width: 8px;
          height: 8px;
          border-radius: 4px;
          background: rgba(255,255,255,0.4);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .hero-dot-active {
          width: 28px;
          background: white;
        }

        /* Scroll indicator */
        .hero-scroll {
          position: absolute;
          bottom: 36px;
          right: 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          z-index: 3;
          opacity: 0.6;
        }

        .hero-scroll span {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.7);
          writing-mode: vertical-rl;
        }

        .scroll-mouse {
          width: 24px;
          height: 38px;
          border: 2px solid rgba(255,255,255,0.4);
          border-radius: 12px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 4px;
        }

        .scroll-wheel {
          width: 3px;
          height: 8px;
          background: rgba(255,255,255,0.7);
          border-radius: 2px;
          animation: scroll-anim 2s ease-in-out infinite;
        }

        @keyframes scroll-anim {
          0%, 100% { opacity: 1; transform: translateY(0); }
          50% { opacity: 0.3; transform: translateY(8px); }
        }

        /* Breadcrumb */
        .hero-breadcrumb {
          position: absolute;
          top: 120px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 3;
          width: 100%;
          max-width: var(--container-max);
          padding: 0 24px;
        }

        .hero-breadcrumb-link {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          transition: color 0.2s;
        }

        .hero-breadcrumb-link:hover {
          color: white;
        }

        .hero-breadcrumb-current {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.4);
        }

        @media (max-width: 768px) {
          .hero-content { padding-top: 140px; padding-bottom: 100px; }
          .hero-stats { gap: 24px; }
          .hero-stat-value { font-size: 1.8rem; }
          .hero-scroll { display: none; }
          .hero-breadcrumb { top: 90px; }
          .hero-title { font-size: clamp(2rem, 8vw, 3rem); }
        }
      `}</style>
    </section>
  );
}
