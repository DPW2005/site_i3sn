import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Tag, ArrowRight, Newspaper } from "lucide-react";
import { newsArticles, newsCategories } from "@/data/news";

export const metadata: Metadata = {
  title: "Actualités",
  description: "Suivez toutes les dernières nouvelles, événements et annonces de l'Institut Supérieur des Sciences de la Santé de Ngong.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

const categoryColors: Record<string, string> = {
  Admissions: "#0B4F9E", Événements: "#1a8a4a", Partenariats: "#e67e22", Recherche: "#8e44ad", "Vie du Campus": "#16a085",
};

export default function ActualitesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          <nav aria-label="Fil d'Ariane" className="breadcrumb">
            <Link href="/" id="news-breadcrumb-home">Accueil</Link>
            <span>/</span>
            <span>Actualités</span>
          </nav>
          <h1>Actualités &amp; Événements</h1>
          <p>Restez informé de toutes les nouvelles, événements et annonces de l&apos;Institut Supérieur des Sciences de la Santé de Ngong.</p>
        </div>
      </div>

      <section className="section" id="news-list">
        <div className="container">
          <div className="news-filters" role="navigation" aria-label="Filtres par catégorie">
            {newsCategories.map((cat) => (
              <span key={cat} className={`news-filter-tag${cat === "Tous" ? " news-filter-active" : ""}`} id={`filter-${cat.toLowerCase().replace(/\s/g, "-")}`}>
                {cat}
              </span>
            ))}
          </div>

          <div className="news-grid">
            {newsArticles.map((article, i) => (
              <article key={article.id} className={`news-article-card${i === 0 ? " news-article-featured" : ""}`} id={`article-${article.id}`}>
                <div className="news-article-image" style={{ backgroundImage: `url(${article.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <span className="news-article-cat" style={{ background: categoryColors[article.category] || "#0B4F9E" }}>
                    <Tag size={11} />{article.category}
                  </span>
                </div>
                <div className="news-article-body">
                  <div className="news-article-meta">
                    <Calendar size={13} />
                    <time dateTime={article.date}>{formatDate(article.date)}</time>
                    <span className="meta-sep">•</span>
                    <span>{article.author}</span>
                  </div>
                  <h2 className="news-article-title">
                    <Link href={`/actualites/${article.slug}`} id={`article-title-${article.id}`}>{article.title}</Link>
                  </h2>
                  <p className="news-article-excerpt">{article.excerpt}</p>
                  <Link href={`/actualites/${article.slug}`} className="btn btn-outline-primary btn-sm" id={`article-read-${article.id}`}>
                    Lire l&apos;article <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
