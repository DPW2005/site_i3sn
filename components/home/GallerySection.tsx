'use client';

import Link from 'next/link';
import { Camera, ArrowRight, Images } from 'lucide-react';

const galleryItems = [
  { id: 1, title: "Amphithéâtre Principal", category: "Infrastructure", size: "large" },
  { id: 2, title: "Laboratoire de Biologie", category: "Laboratoires", size: "small" },
  { id: 3, title: "Salle de Simulation Médicale", category: "Simulation", size: "small" },
  { id: 4, title: "Bibliothèque Universitaire", category: "Infrastructure", size: "small" },
  { id: 5, title: "Centre de Recherche", category: "Recherche", size: "small" },
  { id: 6, title: "Cérémonie de Remise de Diplômes", category: "Vie du campus", size: "small" },
];

const gradients = [
  "linear-gradient(135deg, #0B4F9E, #1a73e8)",
  "linear-gradient(135deg, #1a8a4a, #2ecc71)",
  "linear-gradient(135deg, #073a75, #0B4F9E)",
  "linear-gradient(135deg, #8e44ad, #9b59b6)",
  "linear-gradient(135deg, #e67e22, #f39c12)",
  "linear-gradient(135deg, #16a085, #1abc9c)",
];

export default function GallerySection() {
  return (
    <section id="galerie" className="section" style={{ background: 'var(--color-gray-faint)' }} aria-labelledby="gallery-title">
      <div className="container">
        <div className="section-title">
          <span className="label">Galerie</span>
          <h2 id="gallery-title">
            Vie sur le <span>Campus</span>
          </h2>
          <p>
            Découvrez les infrastructures modernes et l&apos;environnement d&apos;apprentissage exceptionnel de l&apos;I3SN à Ngong.
          </p>
        </div>

        {/* Gallery Masonry-like Grid */}
        <div className="gallery-grid" aria-label="Galerie photos de l'I3SN">
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className={`gallery-item ${item.size === 'large' ? 'gallery-item-large' : ''}`}
              id={`gallery-item-${item.id}`}
              role="img"
              aria-label={item.title}
            >
              <div className="gallery-img" style={{ background: gradients[i] }}>
                <Camera size={40} color="rgba(255,255,255,0.25)" aria-hidden="true" />
              </div>
              <div className="gallery-overlay">
                <div className="gallery-info">
                  <span className="gallery-category">{item.category}</span>
                  <h3 className="gallery-title-text">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="gallery-cta">
          <Link href="/galerie" className="btn btn-primary" id="gallery-see-all">
            <Images size={18} />
            Voir toute la galerie
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, 240px);
          gap: 16px;
          margin-bottom: 48px;
        }

        .gallery-item {
          border-radius: var(--radius-md);
          overflow: hidden;
          position: relative;
          cursor: pointer;
        }

        .gallery-item-large {
          grid-row: span 2;
        }

        .gallery-img {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.5s ease;
        }

        .gallery-item:hover .gallery-img {
          transform: scale(1.08);
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: flex-end;
          padding: 20px;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .gallery-info {
          color: white;
          transform: translateY(10px);
          transition: transform 0.3s ease;
        }

        .gallery-item:hover .gallery-info {
          transform: translateY(0);
        }

        .gallery-category {
          display: block;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.7);
          margin-bottom: 4px;
        }

        .gallery-title-text {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 700;
          color: white;
          margin: 0;
        }

        .gallery-cta {
          text-align: center;
        }

        @media (max-width: 900px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
          }
          .gallery-item-large { grid-row: span 1; }
        }

        @media (max-width: 640px) {
          .gallery-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
