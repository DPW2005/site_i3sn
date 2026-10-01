'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  MapPin, Phone, Mail, ExternalLink, Share2, Play, Briefcase,
  ChevronRight, Send, CheckCircle, AlertCircle, HeartPulse
} from 'lucide-react';

const footerLinks = {
  ecole: [
    { label: "À Propos de l'I3SN", href: "/a-propos" },
    { label: "Mot du Directeur", href: "/a-propos#directeur" },
    { label: "Notre Mission & Vision", href: "/a-propos#mission" },
    { label: "Vie sur le Campus", href: "/galerie" },
    { label: "Corps Enseignant", href: "/enseignants" },
  ],
  formations: [
    { label: "Médecine Générale", href: "/formations/medecine-generale" },
    { label: "Pharmacie", href: "/formations/pharmacie" },
    { label: "Sciences Infirmières", href: "/formations/sciences-infirmieres" },
    { label: "Maïeutique", href: "/formations/maieutique" },
    { label: "Génie Biomédical", href: "/formations/genie-biomedical" },
    { label: "Santé Publique", href: "/formations/sante-publique" },
  ],
  utiles: [
    { label: "Admissions & Concours", href: "/admissions" },
    { label: "Actualités", href: "/actualites" },
    { label: "Galerie Photos", href: "/galerie" },
    { label: "Contact", href: "/contact" },
  ],
};

const socials = [
  { icon: ExternalLink, label: "Facebook", href: "https://facebook.com", id: "footer-facebook" },
  { icon: Share2, label: "Twitter/X", href: "https://twitter.com", id: "footer-twitter" },
  { icon: Play, label: "YouTube", href: "https://youtube.com", id: "footer-youtube" },
  { icon: Briefcase, label: "LinkedIn", href: "https://linkedin.com", id: "footer-linkedin" },
];

// --- Google Sheets Integration ---
const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    setStatus('loading');

    try {
      if (!GOOGLE_SCRIPT_URL) {
        // Simulation si pas de script URL configuré
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setStatus('success');
        setEmail('');
        setName('');
        return;
      }

      const formData = new FormData();
      formData.append('type', 'newsletter');
      formData.append('name', name);
      formData.append('email', email);
      formData.append('date', new Date().toISOString());

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });

      setStatus('success');
      setEmail('');
      setName('');
    } catch {
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <footer id="footer" role="contentinfo">
      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand">
              <Link href="/" className="footer-logo" id="footer-logo">
                <div className="footer-logo-icon">
                  <HeartPulse size={24} color="white" />
                </div>
                <div>
                  <div className="footer-logo-name">I3SN</div>
                  <div className="footer-logo-sub">Institut Supérieur des Sciences<br />de la Santé de Ngong</div>
                </div>
              </Link>

              <p className="footer-desc">
                Formant les professionnels de santé de demain au Cameroun et en Afrique, avec excellence et engagement.
              </p>

              <div className="footer-contact-list">
                <div className="footer-contact-item" id="footer-address">
                  <MapPin size={16} />
                  <span>Ngong, Région de l&apos;Adamaoua, Cameroun</span>
                </div>
                <a href="tel:+237699000000" className="footer-contact-item" id="footer-phone">
                  <Phone size={16} />
                  <span>+237 699 000 000</span>
                </a>
                <a href="mailto:contact@i3sn.cm" className="footer-contact-item" id="footer-email-link">
                  <Mail size={16} />
                  <span>contact@i3sn.cm</span>
                </a>
              </div>

              {/* Socials */}
              <div className="footer-socials">
                {socials.map(({ icon: Icon, label, href, id }) => (
                  <a
                    key={id}
                    href={href}
                    id={id}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="footer-social-btn"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="footer-links-col">
              <h3 className="footer-col-title">L&apos;École</h3>
              <ul className="footer-links-list">
                {footerLinks.ecole.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link" id={`footer-link-${link.label.toLowerCase().replace(/\s|'|'/g, '-').slice(0, 30)}`}>
                      <ChevronRight size={14} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-col">
              <h3 className="footer-col-title">Formations</h3>
              <ul className="footer-links-list">
                {footerLinks.formations.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link" id={`footer-link-${link.label.toLowerCase().replace(/\s|'|'/g, '-').slice(0, 30)}`}>
                      <ChevronRight size={14} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="footer-newsletter-col">
              <h3 className="footer-col-title">Restez Informé</h3>
              <p className="footer-newsletter-desc">
                Inscrivez-vous à notre newsletter pour recevoir les dernières nouvelles et annonces de l&apos;I3SN.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="newsletter-form" id="footer-newsletter-form">
                <input
                  type="text"
                  placeholder="Votre nom complet"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="newsletter-input"
                  id="newsletter-name"
                  aria-label="Votre nom"
                />
                <div className="newsletter-email-row">
                  <input
                    type="email"
                    placeholder="Votre adresse email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="newsletter-input"
                    id="newsletter-email"
                    aria-label="Votre email"
                  />
                  <button
                    type="submit"
                    className="newsletter-btn"
                    id="newsletter-submit"
                    disabled={status === 'loading'}
                    aria-label="S'abonner"
                  >
                    {status === 'loading' ? (
                      <div className="spinner" />
                    ) : (
                      <Send size={18} />
                    )}
                  </button>
                </div>

                {status === 'success' && (
                  <div className="newsletter-message success" role="alert">
                    <CheckCircle size={16} />
                    Merci ! Vous êtes bien inscrit.
                  </div>
                )}
                {status === 'error' && (
                  <div className="newsletter-message error" role="alert">
                    <AlertCircle size={16} />
                    Erreur. Réessayez plus tard.
                  </div>
                )}
              </form>

              {/* Quick Links */}
              <div className="footer-quick-links">
                <h4 className="footer-quick-title">Liens Utiles</h4>
                {footerLinks.utiles.map((link) => (
                  <Link key={link.href} href={link.href} className="footer-link" id={`footer-quick-${link.label.toLowerCase().replace(/\s|'|'/g, '-').slice(0, 20)}`}>
                    <ChevronRight size={14} />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} I3SN — Institut Supérieur des Sciences de la Santé de Ngong. Tous droits réservés.</p>
          <div className="footer-bottom-links">
            <Link href="/mentions-legales" id="footer-mentions-legales">Mentions légales</Link>
            <Link href="/politique-confidentialite" id="footer-politique">Politique de confidentialité</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        footer {
          font-family: var(--font-body);
        }

        .footer-main {
          background: var(--color-dark);
          padding: 80px 0 60px;
          color: rgba(255,255,255,0.8);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.3fr;
          gap: 48px;
        }

        /* Brand */
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          text-decoration: none;
        }

        .footer-logo-icon {
          width: 48px;
          height: 48px;
          background: var(--gradient-primary);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .footer-logo-name {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.5rem;
          color: white;
          line-height: 1;
        }

        .footer-logo-sub {
          font-size: 0.65rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.4;
          margin-top: 2px;
        }

        .footer-desc {
          font-size: 0.875rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.6);
          margin-bottom: 24px;
        }

        .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 24px;
        }

        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.875rem;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-contact-item:hover {
          color: white;
        }

        .footer-contact-item svg {
          margin-top: 2px;
          flex-shrink: 0;
          color: var(--color-primary-light);
        }

        .footer-socials {
          display: flex;
          gap: 10px;
        }

        .footer-social-btn {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.7);
          transition: all 0.2s;
          text-decoration: none;
        }

        .footer-social-btn:hover {
          background: var(--color-primary);
          color: white;
          transform: translateY(-2px);
        }

        /* Links */
        .footer-col-title {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 700;
          color: white;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 2px solid var(--color-primary);
          display: inline-block;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .footer-link {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 0;
          font-size: 0.875rem;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          transition: all 0.2s;
        }

        .footer-link:hover {
          color: white;
          padding-left: 6px;
        }

        .footer-link svg {
          color: var(--color-primary-light);
          flex-shrink: 0;
          transition: transform 0.2s;
        }

        .footer-link:hover svg {
          transform: translateX(3px);
        }

        /* Newsletter */
        .footer-newsletter-desc {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 28px;
        }

        .newsletter-email-row {
          display: flex;
          gap: 8px;
        }

        .newsletter-input {
          flex: 1;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: var(--radius-sm);
          padding: 11px 16px;
          font-size: 0.875rem;
          color: white;
          font-family: var(--font-body);
          transition: all 0.2s;
          width: 100%;
        }

        .newsletter-input::placeholder {
          color: rgba(255,255,255,0.35);
        }

        .newsletter-input:focus {
          outline: none;
          border-color: var(--color-primary-light);
          background: rgba(255,255,255,0.12);
        }

        .newsletter-btn {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          background: var(--gradient-primary);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.2s;
          box-shadow: var(--shadow-primary);
        }

        .newsletter-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(11,79,158,0.4);
        }

        .newsletter-btn:disabled {
          opacity: 0.7;
        }

        .newsletter-message {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          animation: fadeInUp 0.3s ease;
        }

        .newsletter-message.success {
          background: rgba(26,138,74,0.15);
          color: #2ecc71;
          border: 1px solid rgba(26,138,74,0.3);
        }

        .newsletter-message.error {
          background: rgba(192,57,43,0.15);
          color: #e74c3c;
          border: 1px solid rgba(192,57,43,0.3);
        }

        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .footer-quick-links {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .footer-quick-title {
          font-size: 0.8rem;
          font-weight: 600;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 8px;
        }

        /* Bottom bar */
        .footer-bottom {
          background: #111827;
          padding: 18px 0;
        }

        .footer-bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        .footer-bottom p {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.4);
        }

        .footer-bottom-links {
          display: flex;
          gap: 24px;
        }

        .footer-bottom-links a {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-bottom-links a:hover {
          color: rgba(255,255,255,0.8);
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 640px) {
          .footer-main { padding: 50px 0 40px; }
          .footer-grid { grid-template-columns: 1fr; gap: 32px; }
          .footer-bottom-inner { flex-direction: column; text-align: center; }
          .footer-bottom-links { gap: 16px; }
        }
      `}</style>
    </footer>
  );
}
