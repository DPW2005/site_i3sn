'use client';

import { useState } from "react";
import Link from "next/link";
import {
  MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle
} from "lucide-react";

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      if (!GOOGLE_SCRIPT_URL) {
        await new Promise(resolve => setTimeout(resolve, 1200));
        setStatus('success');
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
        return;
      }

      const formData = new FormData();
      formData.append('type', 'contact');
      Object.entries(form).forEach(([k, v]) => formData.append(k, v));
      formData.append('date', new Date().toISOString());

      await fetch(GOOGLE_SCRIPT_URL, { method: 'POST', body: formData, mode: 'no-cors' });
      setStatus('success');
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          <nav aria-label="Fil d'Ariane" className="breadcrumb">
            <Link href="/" id="contact-breadcrumb-home">Accueil</Link>
            <span>/</span>
            <span>Contact</span>
          </nav>
          <h1>Contactez-Nous</h1>
          <p>
            Notre équipe est à votre disposition pour répondre à toutes vos questions concernant les formations, les admissions ou la vie à l&apos;I3SN.
          </p>
        </div>
      </div>

      <section className="section" id="contact-main">
        <div className="container">
          <div className="contact-layout">

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2 className="contact-section-title">Envoyer un Message</h2>
              <p className="contact-section-sub">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </p>

              <form onSubmit={handleSubmit} id="contact-form" noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">Nom complet *</label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      className="form-input"
                      placeholder="Jean Dupont"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">Adresse email *</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      className="form-input"
                      placeholder="jean@exemple.cm"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-phone" className="form-label">Téléphone</label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      className="form-input"
                      placeholder="+237 6XX XXX XXX"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-subject" className="form-label">Objet *</label>
                    <select
                      id="contact-subject"
                      name="subject"
                      className="form-input form-select"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Sélectionner un objet</option>
                      <option value="admissions">Admissions & Concours</option>
                      <option value="formations">Informations sur les formations</option>
                      <option value="partenariat">Partenariat</option>
                      <option value="stage">Stage & Pratique clinique</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className="form-input form-textarea"
                    placeholder="Décrivez votre demande en détail..."
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {status === 'success' && (
                  <div className="form-alert form-alert-success" role="alert">
                    <CheckCircle size={20} />
                    <div>
                      <strong>Message envoyé avec succès !</strong>
                      <p>Nous vous répondrons dans les plus brefs délais.</p>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="form-alert form-alert-error" role="alert">
                    <AlertCircle size={20} />
                    <div>
                      <strong>Erreur d&apos;envoi</strong>
                      <p>Veuillez réessayer ou nous contacter directement par téléphone.</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  id="contact-submit"
                  disabled={status === 'loading'}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {status === 'loading' ? (
                    <><div className="spinner-white" /> Envoi en cours...</>
                  ) : (
                    <><Send size={18} /> Envoyer le message</>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <div className="contact-info-card" id="contact-address">
                <div className="contact-info-icon">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3>Adresse</h3>
                  <p>Institut Supérieur des Sciences de la Santé de Ngong<br />Ngong, Région de l&apos;Adamaoua<br />Cameroun</p>
                </div>
              </div>

              <div className="contact-info-card" id="contact-phone-card">
                <div className="contact-info-icon">
                  <Phone size={24} />
                </div>
                <div>
                  <h3>Téléphone</h3>
                  <a href="tel:+237699000000" id="contact-tel-link">+237 699 000 000</a>
                  <a href="tel:+237699000001" id="contact-tel-link-2">+237 699 000 001</a>
                </div>
              </div>

              <div className="contact-info-card" id="contact-email-card">
                <div className="contact-info-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:contact@i3sn.cm" id="contact-email-main">contact@i3sn.cm</a>
                  <a href="mailto:admissions@i3sn.cm" id="contact-email-admissions">admissions@i3sn.cm</a>
                </div>
              </div>

              <div className="contact-info-card" id="contact-hours-card">
                <div className="contact-info-icon">
                  <Clock size={24} />
                </div>
                <div>
                  <h3>Horaires d&apos;ouverture</h3>
                  <p>Lundi – Vendredi : 8h00 – 17h00</p>
                  <p>Samedi : 8h00 – 12h00</p>
                  <p style={{ color: 'var(--color-gray)', fontSize: '0.8rem' }}>Fermé les dimanches et jours fériés</p>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="contact-map" id="contact-map" aria-label="Carte de localisation de l'I3SN">
                <div className="contact-map-placeholder">
                  <MapPin size={40} color="var(--color-primary)" />
                  <span>I3SN — Ngong, Cameroun</span>
                  <a
                    href="https://maps.google.com/?q=Ngong+Cameroun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm"
                    id="contact-map-link"
                  >
                    Voir sur Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .contact-layout {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .contact-section-title {
          font-family: var(--font-heading);
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--color-dark);
          margin-bottom: 8px;
        }

        .contact-section-sub {
          color: var(--color-gray);
          font-size: 0.9rem;
          margin-bottom: 32px;
          line-height: 1.6;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 0;
        }

        .form-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-gray-dark);
        }

        .form-input {
          padding: 12px 16px;
          border: 1.5px solid var(--color-gray-light);
          border-radius: var(--radius-md);
          font-size: 0.9rem;
          font-family: var(--font-body);
          color: var(--color-dark);
          background: white;
          transition: all 0.2s;
          width: 100%;
        }

        .form-input:focus {
          outline: none;
          border-color: var(--color-primary-light);
          box-shadow: 0 0 0 3px var(--color-primary-faint);
        }

        .form-select {
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          background-size: 16px;
          padding-right: 40px;
        }

        .form-textarea {
          resize: vertical;
          min-height: 150px;
          margin-bottom: 20px;
        }

        .form-alert {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px 20px;
          border-radius: var(--radius-md);
          margin-bottom: 20px;
          animation: fadeInUp 0.3s ease;
        }

        .form-alert strong { display: block; font-weight: 600; margin-bottom: 4px; }
        .form-alert p { font-size: 0.85rem; margin: 0; }

        .form-alert-success {
          background: rgba(26,138,74,0.08);
          border: 1px solid rgba(26,138,74,0.25);
          color: var(--color-secondary-dark);
        }

        .form-alert-error {
          background: rgba(192,57,43,0.08);
          border: 1px solid rgba(192,57,43,0.25);
          color: #c0392b;
        }

        .spinner-white {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255,255,255,0.35);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          flex-shrink: 0;
        }

        /* Contact Info */
        .contact-info-card {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 20px;
          background: white;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-gray-light);
          margin-bottom: 16px;
          box-shadow: var(--shadow-sm);
          transition: all 0.2s;
        }

        .contact-info-card:hover {
          border-color: var(--color-primary-faint);
          box-shadow: var(--shadow-md);
        }

        .contact-info-icon {
          width: 48px;
          height: 48px;
          background: var(--color-primary-faint);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary);
          flex-shrink: 0;
        }

        .contact-info-card h3 {
          font-family: var(--font-heading);
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--color-dark);
          margin-bottom: 6px;
        }

        .contact-info-card p {
          font-size: 0.875rem;
          color: var(--color-gray);
          line-height: 1.6;
          margin-bottom: 4px;
        }

        .contact-info-card a {
          display: block;
          font-size: 0.875rem;
          color: var(--color-primary);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
          margin-bottom: 4px;
        }

        .contact-info-card a:hover { color: var(--color-primary-dark); }

        .contact-map {
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--color-gray-light);
          margin-top: 4px;
        }

        .contact-map-placeholder {
          height: 200px;
          background: linear-gradient(135deg, var(--color-primary-faint) 0%, var(--color-secondary-faint) 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .contact-map-placeholder span {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-primary);
        }

        @media (max-width: 1024px) {
          .contact-layout { grid-template-columns: 1fr; }
        }

        @media (max-width: 640px) {
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
