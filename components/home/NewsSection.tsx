'use client';

import Link from 'next/link';
import { Calendar, Tag, ArrowRight, Newspaper } from 'lucide-react';
import { newsArticles } from '@/data/news';

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

const categoryColors: Record<string, string> = {
  Admissions: "#0B4F9E",
  Événements: "#1a8a4a",
  Partenariats: "#e67e22",
  Recherche: "#8e44ad",
  "Vie du Campus": "#16a085",
};

export default function NewsSection() {
  const featured = newsArticles[0];
  const rest = newsArticles.slice(1, 4);

  return (
    <section id="actualites" className="section" style={{ background: 'var(--color-gray-faint)' }} aria-labelledby="news-title">
      <div className="container">
        <div className="section-title">
          <span className="label">Actualités</span>
          <h2 id="news-title">
            Restez <span>Informé</span>
          </h2>
          <p>
            Suivez toutes les dernières nouvelles, événements et annonces de l&apos;Institut Supérieur des Sciences de la Santé de Ngong.
          </p>
        </div>

        <div className="news-layout">
          {/* Featured Article */}
          <article className="news-featured" id={`news-featured-${featured.id}`} aria-label="Article à la une">
            <div className="news-featured-image">
              <div className="news-placeholder-img" aria-hidden="true">
                <Newspaper size={64} color="rgba(255,255,255,0.3)" />
              </div>
              <div className="news-featured-overlay" />
              <div className="news-featured-content">
                <div className="news-category" style={{ background: categoryColors[featured.category] || "#0B4F9E" }}>
                  <Tag size={12} />
                  {featured.category}
                </div>
                <h3 className="news-featured-title">{featured.title}</h3>
                <div className="news-meta">
                  <Calendar size={14} />
                  <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                  <span className="news-meta-sep">•</span>
                  <span>{featured.author}</span>
                </div>
                <p className="news-featured-excerpt">{featured.excerpt}</p>
                <Link
                  href={`/actualites/${featured.slug}`}
                  className="btn btn-outline btn-sm"
                  id={`news-link-featured-${featured.id}`}
                >
                  Lire l&apos;article
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </article>

          {/* Side Articles */}
          <div className="news-side">
            {rest.map((article) => (
              <article key={article.id} className="news-card" id={`news-card-${article.id}`}>
                <div className="news-card-image">
                  <div className="news-card-placeholder" aria-hidden="true">
                    <Newspaper size={32} color="rgba(255,255,255,0.3)" />
                  </div>
                  <div className="news-card-category" style={{ background: categoryColors[article.category] || "#0B4F9E" }}>
                    {article.category}
                  </div>
                </div>
                <div className="news-card-content">
                  <div className="news-card-meta">
                    <Calendar size={12} />
                    <time dateTime={article.date}>{formatDate(article.date)}</time>
                  </div>
                  <h3 className="news-card-title">
                    <Link href={`/actualites/${article.slug}`} id={`news-title-link-${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="news-card-excerpt">{article.excerpt}</p>
                  <Link
                    href={`/actualites/${article.slug}`}
                    className="news-read-more"
                    id={`news-read-more-${article.id}`}
                    aria-label={`Lire l'article : ${article.title}`}
                  >
                    Lire la suite <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="news-cta">
          <Link href="/actualites" className="btn btn-primary" id="news-see-all">
            Toutes les actualités
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .news-layout {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 28px;
          margin-bottom: 48px;
        }

        /* Featured */
        .news-featured-image {
          border-radius: var(--radius-lg);
          overflow: hidden;
          height: 100%;
          min-height: 480px;
          position: relative;
          display: flex;
        }

        .news-placeholder-img {
          position: absolute;
          inset: 0;
          background: var(--gradient-primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .news-featured-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%);
        }

        .news-featured-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 36px;
          color: white;
          z-index: 1;
        }

        .news-category {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 600;
          color: white;
          margin-bottom: 12px;
        }

        .news-featured-title {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          line-height: 1.3;
          margin-bottom: 12px;
        }

        .news-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.7);
          margin-bottom: 16px;
        }

        .news-meta svg { flex-shrink: 0; }

        .news-meta-sep { opacity: 0.4; }

        .news-featured-excerpt {
          font-size: 0.875rem;
          line-height: 1.65;
          color: rgba(255,255,255,0.8);
          margin-bottom: 20px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Side Cards */
        .news-side {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .news-card {
          background: white;
          border-radius: var(--radius-md);
          overflow: hidden;
          display: grid;
          grid-template-columns: 130px 1fr;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--color-gray-light);
          transition: all 0.3s ease;
        }

        .news-card:hover {
          transform: translateX(4px);
          box-shadow: var(--shadow-md);
          border-color: var(--color-primary-faint);
        }

        .news-card-image {
          position: relative;
          background: var(--gradient-secondary);
          min-height: 130px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .news-card-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gradient-primary);
          opacity: 0.7;
        }

        .news-card-category {
          position: absolute;
          top: 10px;
          left: 10px;
          padding: 3px 10px;
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 600;
          color: white;
          z-index: 1;
        }

        .news-card-content {
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
        }

        .news-card-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          color: var(--color-gray);
          margin-bottom: 8px;
        }

        .news-card-title {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-dark);
          line-height: 1.35;
          margin-bottom: 8px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .news-card-title a {
          text-decoration: none;
          color: inherit;
          transition: color 0.2s;
        }

        .news-card-title a:hover {
          color: var(--color-primary);
        }

        .news-card-excerpt {
          font-size: 0.8rem;
          color: var(--color-gray);
          line-height: 1.55;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: 10px;
        }

        .news-read-more {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-primary);
          text-decoration: none;
          margin-top: auto;
          transition: gap 0.2s;
        }

        .news-read-more:hover {
          gap: 8px;
        }

        .news-cta {
          text-align: center;
        }

        @media (max-width: 900px) {
          .news-layout { grid-template-columns: 1fr; }
          .news-featured-image { min-height: 340px; }
        }

        @media (max-width: 640px) {
          .news-card { grid-template-columns: 1fr; }
          .news-card-image { min-height: 120px; }
        }
      `}</style>
    </section>
  );
}
