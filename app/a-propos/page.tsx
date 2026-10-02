import type { Metadata } from "next";
import Link from "next/link";
import { Target, Eye, Heart, Award, Users, ArrowRight } from "lucide-react";
import { departments, programs } from "@/data/programs";

export const metadata: Metadata = {
  title: "À Propos",
  description: "Découvrez l'histoire, la mission et la vision de l'Institut Supérieur des Sciences de la Santé de Ngong (I3SN).",
};

const values = [
  { icon: Award, title: "Probitas", desc: "L'intégrité et la droiture sont au cœur de notre éthique. Nous formons des professionnels de santé qui exercent avec honnêteté et rigueur morale." },
  { icon: Heart, title: "Scientiarum", desc: "La maîtrise du savoir scientifique est notre engagement. Nos programmes allient théorie rigoureuse et pratique clinique intensive." },
  { icon: Target, title: "Excellentiam", desc: "Nous visons l'excellence dans chaque filière : notes minimales de 12/20, 14/20 en stage, pour garantir des diplômés de haut niveau." },
  { icon: Users, title: "Service", desc: "Former des professionnels au service des populations camerounaises et africaines, prioritairement dans les zones les plus en besoin." },
];

export default function AProposPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          <nav aria-label="Fil d'Ariane" className="breadcrumb">
            <Link href="/" id="about-breadcrumb-home">Accueil</Link>
            <span>/</span>
            <span>À Propos</span>
          </nav>
          <h1>À Propos de l&apos;I3SN</h1>
          <p>Découvrez l&apos;histoire, la mission et les valeurs de l&apos;Institut Supérieur des Sciences de la Santé de Ngong.</p>
        </div>
      </div>

      {/* Histoire */}
      <section className="section" id="histoire">
        <div className="container">
          <div className="about-two-col">
            <div className="about-img-col">
              <div className="about-img-placeholder">
                <div className="about-img-inner" style={{ background: "var(--gradient-primary)" }}>
                  <div className="about-year-badge">Depuis 2023</div>
                </div>
              </div>
            </div>
            <div className="about-text-col">
              <span className="label">Notre Histoire</span>
              <h2 className="about-h2">{departments.length} Départements, {programs.length} Filières Reconnues</h2>
              <p className="about-p">L’Institut Supérieur des Sciences de la Santé de Ngong (I3SN) est un établissement d’enseignement supérieur spécialisé dans les sciences de la santé, situé à Ngong au Cameroun. Sa devise officielle, <strong>Probitas-Scientiarum-Excellentiam</strong>, reflète les valeurs qui guident sa mission éducative.</p>
              <p className="about-p">L’école est organisée en <strong>{departments.length} départements</strong> : Sages-Femmes / Maïeuticiens (SFM), Agents Techniques Médico-Sanitaires (ATMS), Aides-Soignants, Soins Infirmiers (IDE) et Techniques Médico-Sanitaires (TMS). Chaque département est encadré par un coordonnateur responsable de la qualité pédagogique.</p>
              <p className="about-p">Le système académique est structuré en deux semestres (S1 et S2) avec un Contrôle Continu (CC à 30%) et un examen régional (70%). La note minimale de passage est de <strong>10/20</strong> dans toutes les unités d’enseignement, et de <strong>14/20</strong> pour la note de stage.</p>
              <Link href="/formations" className="btn btn-primary" id="about-discover-formations">
                Nos formations <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-sm bg-faint" id="mission">
        <div className="container">
          <div className="about-mv-grid">
            <div className="about-mv-card" id="mission-card">
              <div className="about-mv-icon mv-icon-primary"><Target size={32} /></div>
              <h2 className="about-mv-h2">Notre Mission</h2>
              <p className="about-mv-p">Former des professionnels de santé compétents, éthiques et engagés, capables de répondre aux besoins sanitaires de la population camerounaise et africaine, en proposant des formations médicales de haute qualité alliant théorie et pratique clinique.</p>
            </div>
            <div className="about-mv-card" id="vision-card">
              <div className="about-mv-icon mv-icon-secondary"><Eye size={32} /></div>
              <h2 className="about-mv-h2">Notre Vision</h2>
              <p className="about-mv-p">Devenir l&apos;institution de référence en matière de formation médicale en Afrique centrale, reconnue pour l&apos;excellence de ses diplômés, la qualité de sa recherche et sa contribution au développement des systèmes de santé africains.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mot du Directeur */}
      <section className="section" id="directeur">
        <div className="container">
          <div className="director-block">
            <div className="director-photo">
              <div className="director-photo-bg">
                <Users size={64} color="rgba(255,255,255,0.3)" />
              </div>
            </div>
            <div className="director-content">
              <span className="label">Mot du Directeur</span>
              <blockquote className="director-quote">
                <p>&ldquo;L&apos;I3SN est né d&apos;une conviction profonde : l&apos;Afrique a besoin de professionnels de santé formés chez elle, ancrés dans ses réalités et porteurs de solutions adaptées à ses défis. Chaque étudiant que nous accueillons est un futur pilier du système de santé de notre continent. Nous mettons tout en œuvre pour les préparer à cette noble mission.&rdquo;</p>
              </blockquote>
              <div className="director-name">Le Directeur Général de l&apos;I3SN</div>
              <div className="director-role">Institut Supérieur des Sciences de la Santé de Ngong — Ngong, Cameroun</div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="section bg-faint" id="valeurs">
        <div className="container">
          <div className="section-title">
            <span className="label">Nos Valeurs</span>
            <h2>Notre Devise : <span>Probitas-Scientiarum-Excellentiam</span></h2>
            <p>Intégrité, Maîtrise du savoir, Excellence — trois piliers qui guident chaque étudiant, chaque enseignant et chaque acte de formation à l&apos;I3SN.</p>
          </div>
          <div className="values-grid">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div key={val.title} className="value-card" id={`value-${val.title.toLowerCase()}`}>
                  <div className="value-icon"><Icon size={28} /></div>
                  <h3 className="value-title">{val.title}</h3>
                  <p className="value-desc">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
