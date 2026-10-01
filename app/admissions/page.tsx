import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, FileText, CheckCircle, ArrowRight, Download, Phone, Mail, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Admissions",
  description: "Conditions d'admission, concours d'entrée et procédure d'inscription à l'I3SN pour l'année académique 2026-2027.",
};

const conditions = [
  "Être titulaire du Baccalauréat série C, D ou F (selon la filière)",
  "Avoir au maximum 25 ans au 31 décembre de l'année du concours",
  "Jouir d'une bonne santé physique et mentale (attestée par un certificat médical)",
  "Être de nationalité camerounaise ou étrangère résidant légalement au Cameroun",
  "Posséder le cas échéant les diplômes équivalents reconnus par le Ministère de l'Enseignement Supérieur",
];

const dossierItems = [
  { doc: "Demande manuscrite adressée au Directeur de l'I3SN", required: true },
  { doc: "Photocopie légalisée du Baccalauréat ou équivalent", required: true },
  { doc: "Extrait d'acte de naissance", required: true },
  { doc: "Certificat médical de bonne santé", required: true },
  { doc: "4 photos d'identité récentes format 4x4", required: true },
  { doc: "Photocopie de la carte nationale d'identité ou passeport", required: true },
  { doc: "Attestation de paiement des frais de dossier", required: true },
  { doc: "Relevés de notes du Baccalauréat", required: false },
];

const timeline = [
  { date: "01 Sep 2026", event: "Ouverture des inscriptions", status: "done" },
  { date: "30 Nov 2026", event: "Clôture du dépôt des dossiers", status: "current" },
  { date: "15 Jan 2027", event: "Épreuves écrites", status: "upcoming" },
  { date: "01 Fév 2027", event: "Épreuves orales", status: "upcoming" },
  { date: "15 Fév 2027", event: "Publication des résultats", status: "upcoming" },
  { date: "01 Mar 2027", event: "Début des cours", status: "upcoming" },
];

const filieres = [
  { filiere: "Médecine Générale", serie: "C, D", frais: "50 000 FCFA" },
  { filiere: "Pharmacie", serie: "C, D", frais: "45 000 FCFA" },
  { filiere: "Sciences Infirmières", serie: "C, D, F", frais: "35 000 FCFA" },
  { filiere: "Maïeutique", serie: "C, D, F", frais: "35 000 FCFA" },
  { filiere: "Génie Biomédical", serie: "C, F", frais: "40 000 FCFA" },
  { filiere: "Santé Publique", serie: "C, D, A4", frais: "35 000 FCFA" },
];

export default function AdmissionsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          <nav aria-label="Fil d'Ariane" className="breadcrumb">
            <Link href="/" id="admissions-breadcrumb-home">Accueil</Link>
            <span>/</span>
            <span>Admissions</span>
          </nav>
          <h1>Admissions &amp; Concours d&apos;Entrée</h1>
          <p>Tout ce que vous devez savoir pour candidater à l&apos;Institut Supérieur des Sciences de la Santé de Ngong pour l&apos;année académique 2026-2027.</p>
          <div className="hero-btns">
            <a href="#dossier" className="btn btn-primary btn-lg" id="admissions-hero-dossier">
              <FileText size={18} /> Préparer mon dossier
            </a>
            <a href="#contact-admissions" className="btn btn-outline btn-lg" id="admissions-hero-contact">
              <Phone size={18} /> Nous contacter
            </a>
          </div>
        </div>
      </div>

      <div className="adm-alert" id="admissions-alert" role="alert">
        <div className="container adm-alert-inner">
          <AlertCircle size={20} />
          <strong>Inscriptions ouvertes !</strong> Déposez votre dossier avant le 30 novembre 2026. Places limitées par filière.
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="admissions-layout">
            <div>
              <div className="adm-block" id="conditions">
                <h2 className="adm-block-title"><CheckCircle size={22} /> Conditions d&apos;Admission</h2>
                <ul className="adm-list">
                  {conditions.map((c, i) => (
                    <li key={i} className="adm-list-item"><CheckCircle size={16} className="adm-check" />{c}</li>
                  ))}
                </ul>
              </div>

              <div className="adm-block" id="filieres-frais">
                <h2 className="adm-block-title"><FileText size={22} /> Frais de Dossier par Filière</h2>
                <div className="adm-table-wrapper">
                  <table className="adm-table" aria-label="Frais de dossier par filière">
                    <thead>
                      <tr><th>Filière</th><th>Série Bac</th><th>Frais de dossier</th></tr>
                    </thead>
                    <tbody>
                      {filieres.map((f, i) => (
                        <tr key={i}>
                          <td><strong>{f.filiere}</strong></td>
                          <td>{f.serie}</td>
                          <td className="adm-price">{f.frais}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="adm-block" id="dossier">
                <h2 className="adm-block-title"><FileText size={22} /> Constitution du Dossier</h2>
                <ul className="adm-dossier-list">
                  {dossierItems.map((item, i) => (
                    <li key={i} className={`adm-dossier-item${item.required ? "" : " adm-optional"}`}>
                      <span className={`adm-badge ${item.required ? "badge-required" : "badge-optional"}`}>
                        {item.required ? "Obligatoire" : "Optionnel"}
                      </span>
                      <span>{item.doc}</span>
                    </li>
                  ))}
                </ul>
                <a href="#" className="btn btn-primary" id="admissions-download-dossier" style={{ marginTop: "20px" }}>
                  <Download size={16} /> Télécharger la fiche de dossier
                </a>
              </div>
            </div>

            <div>
              <div className="adm-sidebar-block" id="timeline">
                <h3 className="adm-sidebar-title"><Calendar size={18} /> Calendrier du Concours</h3>
                <div className="adm-timeline">
                  {timeline.map((item, i) => (
                    <div key={i} className={`timeline-item timeline-${item.status}`}>
                      <div className="timeline-dot">
                        {item.status === "done" && <CheckCircle size={14} />}
                      </div>
                      <div className="timeline-content">
                        <div className="timeline-date">{item.date}</div>
                        <div className="timeline-event">{item.event}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="adm-sidebar-block adm-contact-block" id="contact-admissions">
                <h3 className="adm-sidebar-title"><Phone size={18} /> Service des Admissions</h3>
                <div className="adm-contact-list">
                  <a href="tel:+237699000000" className="adm-contact-item" id="admissions-phone">
                    <div className="adm-contact-icon"><Phone size={16} /></div>
                    <div><div className="adm-contact-label">Téléphone</div><div className="adm-contact-value">+237 699 000 000</div></div>
                  </a>
                  <a href="mailto:admissions@i3sn.cm" className="adm-contact-item" id="admissions-email">
                    <div className="adm-contact-icon"><Mail size={16} /></div>
                    <div><div className="adm-contact-label">Email</div><div className="adm-contact-value">admissions@i3sn.cm</div></div>
                  </a>
                </div>
                <p className="adm-hours">Lundi – Vendredi : 8h00 – 17h00<br />Samedi : 8h00 – 12h00</p>
              </div>

              <Link href="/contact" className="btn btn-secondary" style={{ width: "100%", justifyContent: "center" }} id="admissions-contact-link">
                Nous envoyer un message <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
