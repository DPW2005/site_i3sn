'use client';

import { useState } from 'react';
import { Camera } from 'lucide-react';

const galleryCategories = ["Tous", "Infrastructures", "Laboratoires", "Vie du Campus", "Événements", "Simulation"];

const galleryImages = [
  { id: 1, title: "Amphithéâtre Principal", category: "Infrastructures", gradient: "linear-gradient(135deg, #0B4F9E, #1a73e8)" },
  { id: 2, title: "Laboratoire de Biologie", category: "Laboratoires", gradient: "linear-gradient(135deg, #1a8a4a, #2ecc71)" },
  { id: 3, title: "Centre de Simulation Médicale", category: "Simulation", gradient: "linear-gradient(135deg, #073a75, #0B4F9E)" },
  { id: 4, title: "Bibliothèque Universitaire", category: "Infrastructures", gradient: "linear-gradient(135deg, #8e44ad, #9b59b6)" },
  { id: 5, title: "Cérémonie de Remise de Diplômes", category: "Événements", gradient: "linear-gradient(135deg, #e67e22, #f39c12)" },
  { id: 6, title: "Laboratoire de Pharmacie", category: "Laboratoires", gradient: "linear-gradient(135deg, #16a085, #1abc9c)" },
  { id: 7, title: "Foyer des Étudiants", category: "Vie du Campus", gradient: "linear-gradient(135deg, #c0392b, #e74c3c)" },
  { id: 8, title: "Salle Informatique", category: "Infrastructures", gradient: "linear-gradient(135deg, #2c3e50, #34495e)" },
  { id: 9, title: "Terrain de Sport", category: "Vie du Campus", gradient: "linear-gradient(135deg, #27ae60, #2ecc71)" },
  { id: 10, title: "Portes Ouvertes 2026", category: "Événements", gradient: "linear-gradient(135deg, #0B4F9E, #073a75)" },
  { id: 11, title: "Cafétéria du Campus", category: "Vie du Campus", gradient: "linear-gradient(135deg, #d35400, #e67e22)" },
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
              <div className="gallery-page-bg" style={{ background: img.gradient }}>
                <Camera size={36} color="rgba(255,255,255,0.2)" />
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
