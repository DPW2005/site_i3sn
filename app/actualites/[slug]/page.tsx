import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, User } from "lucide-react";
import { newsArticles } from "@/data/news";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Article introuvable" };
  
  return {
    title: article.title,
    description: article.excerpt,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      {/* Article Hero */}
      <div className="article-hero" style={{ backgroundImage: `url(${article.imageUrl})` }}>
        <div className="article-hero-overlay" />
        <div className="container article-hero-content">
          <nav aria-label="Fil d'Ariane" className="breadcrumb breadcrumb-light">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <Link href="/actualites">Actualités</Link>
            <span>/</span>
            <span>{article.title}</span>
          </nav>
          <div className="article-meta-top">
            <span className="article-category">
              <Tag size={14} /> {article.category}
            </span>
          </div>
          <h1>{article.title}</h1>
          <div className="article-meta-bottom">
            <div className="meta-item">
              <Calendar size={16} />
              <time dateTime={article.date}>{formatDate(article.date)}</time>
            </div>
            <div className="meta-item">
              <User size={16} />
              <span>{article.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <section className="section article-content-section">
        <div className="container">
          <div className="article-layout">
            <div className="article-main">
              <Link href="/actualites" className="back-link">
                <ArrowLeft size={16} /> Retour aux actualités
              </Link>
              <div 
                className="article-body" 
                dangerouslySetInnerHTML={{ __html: article.content }} 
              />
            </div>
            
            <aside className="article-sidebar">
              <div className="sidebar-widget">
                <h3 className="widget-title">Articles Récents</h3>
                <div className="widget-recent-posts">
                  {newsArticles.filter(a => a.id !== article.id).slice(0, 3).map(recent => (
                    <Link href={`/actualites/${recent.slug}`} key={recent.id} className="recent-post-item">
                      <div className="recent-post-img" style={{ backgroundImage: `url(${recent.imageUrl})` }} />
                      <div className="recent-post-info">
                        <h4>{recent.title}</h4>
                        <time>{formatDate(recent.date)}</time>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

    </>
  );
}
