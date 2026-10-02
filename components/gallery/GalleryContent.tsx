'use client';

import { useState } from 'react';
import { Camera } from 'lucide-react';

const galleryCategories = ["Tous", "Infrastructures", "Laboratoires", "Vie du Campus", "Événements", "Simulation"];

const galleryImages = [
  { id: 1, title: "Amphithéâtre Principal", category: "Infrastructures", src: "/galerie/amphitheatre.jpeg" },
  { id: 2, title: "Laboratoire de Biologie", category: "Laboratoires", src: "/galerie/laboratoire_biologie.jpg" },
  { id: 3, title: "Centre de Simulation Médicale", category: "Simulation", src: "/galerie/smulation.jpg" },
  { id: 4, title: "Bibliothèque Universitaire", category: "Infrastructures", src: "/galerie/bibliotheque.jpg" },
  { id: 5, title: "Cérémonie de Remise de Diplômes", category: "Événements", src: "/galerie/remise_diplome.jpg" },
  { id: 6, title: "Laboratoire de Pharmacie", category: "Laboratoires", src: "/galerie/laboratoire_pharmacie.jpg" },
  { id: 7, title: "Foyer des Étudiants", category: "Vie du Campus", src: "/galerie/foyer_etudiant.jpg" },
  { id: 8, title: "Salle Informatique", category: "Infrastructures", src: "/galerie/salle_info.jpg" },
  { id: 9, title: "Terrain de Sport", category: "Vie du Campus", src: "/galerie/terrain_sport.jpg" },
  { id: 10, title: "Portes Ouvertes 2026", category: "Événements", src: "/galerie/portes_ouvertes.jpg" },
  { id: 11, title: "Cafétéria du Campus", category: "Vie du Campus", src: "/galerie/cafetaria.jpg" },
];

export default function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredImages = activeCategory === "Tous"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section className="section" id="gallery-main">
      <div className="container">
        <div className="gallery-filters" role="navigation" aria-label="Filtres de la galerie">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`gallery-filter-tag${cat === activeCategory ? " gallery-filter-active" : ""}`}
              id={`gallery-filter-${cat.toLowerCase().replace(/\s/g, "-")}`}
              style={{
                fontFamily: 'inherit',
                fontSize: 'inherit',
                outline: 'none'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery-page-grid" aria-label="Galerie de l'I3SN">
          {filteredImages.map((img) => (
            <div key={img.id} className="gallery-page-item" id={`gallery-img-${img.id}`} role="img" aria-label={img.title}>
              <div className="gallery-page-bg" style={{ 
                backgroundImage: `url(${img.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}>
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.2)' }} />
              </div>
              <div className="gallery-page-overlay">
                <span className="gallery-page-cat">{img.category}</span>
                <h3 className="gallery-page-title">{img.title}</h3>
              </div>
            </div>
          ))}
          {filteredImages.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--color-gray)', gridColumn: '1 / -1' }}>
              Aucune image dans cette catégorie pour le moment.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
