'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  MapPin, Phone, Mail, ExternalLink, Share2, Play, Briefcase,
  ChevronRight, Send, CheckCircle, AlertCircle, HeartPulse
} from 'lucide-react';
import { siteConfig } from '@/config/site';

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

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const WhatsappIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const socials = [
  { icon: FacebookIcon, label: "Facebook", href: siteConfig.socials.facebook, id: "footer-facebook" },
  { icon: TwitterIcon, label: "Twitter/X", href: siteConfig.socials.twitter, id: "footer-twitter" },
  { icon: LinkedinIcon, label: "LinkedIn", href: siteConfig.socials.linkedin, id: "footer-linkedin" },
  { icon: WhatsappIcon, label: "WhatsApp", href: siteConfig.socials.whatsapp, id: "footer-whatsapp" },
];

// --- Google Sheets Integration ---
const GOOGLE_SCRIPT_URL = '/api/submit-form';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    setStatus('loading');

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'newsletter',
          name,
          email,
          date: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setName('');
      } else {
        setStatus('error');
      }
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
                  <div className="footer-logo-name">{siteConfig.name}</div>
                  <div className="footer-logo-sub">Institut Supérieur des Sciences<br />de la Santé de Ngong</div>
                </div>
              </Link>

              <p className="footer-desc">
                Formant les professionnels de santé de demain au Cameroun et en Afrique, avec excellence et engagement.
              </p>

              <div className="footer-contact-list">
                <div className="footer-contact-item" id="footer-address">
                  <MapPin size={16} />
                  <span>{siteConfig.address}</span>
                </div>
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="footer-contact-item" id="footer-phone">
                  <Phone size={16} />
                  <span>{siteConfig.phone}</span>
                </a>
                <a href={`mailto:${siteConfig.email}`} className="footer-contact-item" id="footer-email-link">
                  <Mail size={16} />
                  <span>{siteConfig.email}</span>
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
          <p>© {new Date().getFullYear()} {siteConfig.name} — {siteConfig.fullName}. Tous droits réservés.</p>
          <div className="footer-bottom-links">
            <Link href="/mentions-legales" id="footer-mentions-legales">Mentions légales</Link>
            <Link href="/politique-confidentialite" id="footer-politique">Politique de confidentialité</Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
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
