'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';

const navLinks = [
  { label: "Accueil", href: "/" },
  {
    label: "L'École",
    href: "/a-propos",
    children: [
      { label: "À Propos", href: "/a-propos" },
      { label: "Mot du Directeur", href: "/a-propos#directeur" },
      { label: "Notre Mission", href: "/a-propos#mission" },
    ],
  },
  {
    label: "Formations",
    href: "/formations",
    children: [
      { label: "Sages-Femmes / Maïeuticiens (SFM)", href: "/formations/sages-femmes-maieuticiens" },
      { label: "ATMS — Analyse Médicale", href: "/formations/atms-analyse-medicale" },
      { label: "ATMS — Sciences Pharmaceutiques", href: "/formations/atms-sciences-pharmaceutiques" },
      { label: "Soins Infirmiers (IDE)", href: "/formations/infirmier-diplome-etat" },
      { label: "TMS — Analyse Médicale", href: "/formations/tms-analyse-medicale" },
      { label: "TMS — Kinésithérapie", href: "/formations/tms-kinesitherapie" },
      { label: "TGS — Gestion Sanitaire", href: "/formations/tgs" },
      { label: "Aide Soignant Généraliste", href: "/formations/aide-soignant-generaliste" },
      { label: "Aide Soignant Communautaire", href: "/formations/aide-soignant-communautaire" },
    ],
  },
  { label: "Admissions", href: "/admissions" },
  { label: "Enseignants", href: "/enseignants" },
  { label: "Actualités", href: "/actualites" },
  { label: "Galerie", href: "/galerie" },
  { label: "Contact", href: "/contact" },
];

function isActive(href: string, pathname: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname.startsWith(href);
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll(); // Vérifier la position initiale au montage
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile lors d'un changement de route
  useEffect(() => {
    setIsOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  const toggleMobile = () => {
    setIsOpen(prev => !prev);
    setMobileExpanded(null);
  };

  return (
    <>
      <nav
        id="navbar"
        className={`navbar ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}
      >
        <div className="navbar-topbar">
          <div className="container topbar-inner">
            <span className="topbar-motto">{siteConfig.motto}</span>
            <div className="topbar-right">
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="topbar-link" id="topbar-phone">
                <Phone size={11} /> {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="topbar-link" id="topbar-email">
                <Mail size={11} /> {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        {/* ─── Main Navbar ─── */}
        <div className="navbar-main-row">
          <div className="container navbar-inner">

            {/* Logo */}
            <Link href="/" className="navbar-logo" id="navbar-logo">
              <img
                src="/logo.png"
                alt="Logo I3SN"
                className="navbar-logo-img"
                width={50}
                height={50}
              />
              <div className="logo-text">
                <span className="logo-name">I3SN</span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <ul className="navbar-links" role="menubar">
              {navLinks.map((link) => {
                const active = isActive(link.href, pathname);
                return (
                  <li
                    key={link.href}
                    className="nav-item"
                    role="none"
                    onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      className={`nav-link ${active ? 'nav-link-active' : ''}`}
                      role="menuitem"
                      id={`nav-${link.label.toLowerCase().replace(/[\s']/g, '-')}`}
                      aria-current={active ? 'page' : undefined}
                    >
                      {link.label}
                      {link.children && (
                        <ChevronDown
                          size={13}
                          className={`nav-chevron ${activeDropdown === link.label ? 'nav-chevron-open' : ''}`}
                        />
                      )}
                    </Link>

                    {link.children && activeDropdown === link.label && (
                      <div className="dropdown" role="menu" aria-label={`Sous-menu ${link.label}`}>
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`dropdown-item ${pathname === child.href ? 'dropdown-item-active' : ''}`}
                            role="menuitem"
                            id={`nav-${child.label.toLowerCase().replace(/[\s\/—]/g, '-').replace(/-+/g, '-')}`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* CTA + Toggle mobile */}
            <div className="navbar-actions">
              <Link href="/admissions" className="btn-inscrit" id="navbar-cta-admissions">
                S&apos;inscrire
              </Link>
              <button
                className="mobile-toggle"
                onClick={toggleMobile}
                aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                id="navbar-mobile-toggle"
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ─── Mobile overlay ─── */}
      {isOpen && (
        <div className="mobile-overlay" onClick={toggleMobile} aria-hidden="true" />
      )}

      {/* ─── Mobile Drawer ─── */}
      <div className={`mobile-drawer ${isOpen ? 'mobile-drawer-open' : ''}`} role="dialog" aria-modal="true" aria-label="Menu mobile">
        <div className="mobile-drawer-header">
          <Link href="/" className="mobile-logo" onClick={toggleMobile}>
            <img src="/logo.png" alt="Logo I3SN" width={40} height={40} />
            <span className="mobile-logo-name">I3SN</span>
          </Link>
          <button onClick={toggleMobile} aria-label="Fermer" id="navbar-mobile-close" className="mobile-close-btn">
            <X size={22} />
          </button>
        </div>

        <nav className="mobile-nav">
          {navLinks.map((link) => {
            const active = isActive(link.href, pathname);
            return (
              <div key={link.href} className="mobile-nav-group">
                {link.children ? (
                  <>
                    <button
                      className={`mobile-nav-link mobile-nav-parent ${active ? 'mobile-nav-active' : ''}`}
                      onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                      id={`mobile-nav-${link.label.toLowerCase().replace(/[\s']/g, '-')}`}
                    >
                      {link.label}
                      <ChevronDown
                        size={15}
                        className={`mobile-chevron ${mobileExpanded === link.label ? 'rotated' : ''}`}
                      />
                    </button>
                    {mobileExpanded === link.label && (
                      <div className="mobile-submenu">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`mobile-submenu-link ${pathname === child.href ? 'mobile-nav-active' : ''}`}
                            onClick={toggleMobile}
                            id={`mobile-nav-${child.label.toLowerCase().replace(/[\s\/—]/g, '-').replace(/-+/g, '-')}`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`mobile-nav-link ${active ? 'mobile-nav-active' : ''}`}
                    onClick={toggleMobile}
                    id={`mobile-nav-${link.label.toLowerCase().replace(/[\s']/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        <div className="mobile-drawer-footer">
          <Link href="/admissions" className="btn btn-primary" onClick={toggleMobile} id="mobile-cta-admissions">
            S&apos;inscrire au concours
          </Link>
          <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="btn btn-outline-primary" id="mobile-phone-link">
            <Phone size={15} /> Nous appeler
          </a>
        </div>
      </div>

      <style jsx global>{`
        /* ════════════════════════════════════════════
           NAVBAR — I3SN Design System
        ════════════════════════════════════════════ */

        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }

        /* ── Top bar ── */
        .navbar-topbar {
          background: var(--color-primary-dark);
          color: rgba(255,255,255,0.88);
          font-size: 0.72rem;
          padding: 5px 0;
          transition: max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease;
          overflow: hidden;
          max-height: 40px;
          opacity: 1;
        }

        .navbar-scrolled .navbar-topbar {
          max-height: 0;
          padding: 0;
          opacity: 0;
        }

        .topbar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .topbar-motto {
          font-style: italic;
          opacity: 0.85;
          letter-spacing: 0.03em;
        }

        .topbar-right {
          display: flex;
          gap: 20px;
        }

        .topbar-link {
          display: flex;
          align-items: center;
          gap: 4px;
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          transition: color 0.2s;
        }

        .topbar-link:hover { color: white; }

        /* ── Main row ── */
        .navbar-main-row {
          transition: background 0.3s ease;
        }

        .navbar-transparent .navbar-main-row {
          background: transparent;
        }

        .navbar-scrolled .navbar-main-row {
          background: rgba(255,255,255,0.97);
          box-shadow: 0 2px 24px rgba(26,107,60,0.12);
          backdrop-filter: blur(16px);
        }

        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
          gap: 16px;
          flex-wrap: nowrap;
        }

        /* ── Logo ── */
        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .navbar-logo-img {
          width: 50px;
          height: 50px;
          object-fit: contain;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .navbar-logo:hover .navbar-logo-img {
          transform: scale(1.06);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
        }

        .logo-name {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.3rem;
          line-height: 1;
          transition: color 0.3s;
        }

        .logo-subtitle {
          font-size: 0.5rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          max-width: 160px;
          line-height: 1.3;
          transition: color 0.3s;
        }

        /* Transparent (sur hero) — texte blanc */
        .navbar-transparent .logo-name  { color: white; }
        .navbar-transparent .logo-subtitle { color: rgba(255,255,255,0.75); }

        /* Scrolled — texte vert */
        .navbar-scrolled .logo-name  { color: var(--color-primary); }
        .navbar-scrolled .logo-subtitle { color: var(--color-gray); }

        /* ── Nav Links ── */
        .navbar-links {
          display: flex;
          align-items: center;
          align-self: stretch;
          list-style: none;
          gap: 0;
          flex: 1;
          justify-content: center;
          margin: 0;
          padding: 0;
        }

        .nav-item {
          position: relative;
          display: flex;
          align-items: center;
          align-self: stretch;
        }

        .nav-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 3px;
          padding: 0 13px;
          height: 100%;
          font-size: 0.855rem;
          font-weight: 500;
          text-decoration: none;
          white-space: nowrap;
          line-height: 1;
          border-bottom: 3px solid transparent;
          transition: color 0.2s ease, background 0.2s ease, border-color 0.2s ease;
          cursor: pointer;
        }

        /* ── Transparent (hero) : liens blancs
           Actif = soulignement blanc épais + texte blanc brillant ── */
        .navbar-transparent .nav-link {
          color: rgba(255,255,255,0.82);
          border-bottom-color: transparent;
        }

        .navbar-transparent .nav-link:hover {
          color: white;
          background: rgba(255,255,255,0.12);
          border-bottom-color: rgba(255,255,255,0.4);
        }

        .navbar-transparent .nav-link-active {
          color: white !important;
          font-weight: 700;
          background: rgba(255,255,255,0.18) !important;
          border-bottom-color: white !important;
        }

        /* ── Scrolled (fond blanc) : liens gris
           Actif = fond vert + texte blanc ── */
        .navbar-scrolled .nav-link {
          color: var(--color-gray-dark);
          border-bottom-color: transparent;
        }

        .navbar-scrolled .nav-link:hover {
          color: var(--color-primary);
          background: var(--color-primary-faint);
          border-bottom-color: var(--color-primary-light);
        }

        .navbar-scrolled .nav-link-active {
          color: white !important;
          background: var(--color-primary) !important;
          border-bottom-color: var(--color-primary-dark) !important;
          font-weight: 700;
        }

        .nav-chevron {
          transition: transform 0.25s ease;
          flex-shrink: 0;
          opacity: 0.65;
          vertical-align: middle;
        }

        .nav-chevron-open {
          transform: rotate(180deg);
          opacity: 1;
        }

        /* ── Dropdown ── */
        .dropdown {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          min-width: 240px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(26,107,60,0.15), 0 2px 8px rgba(0,0,0,0.08);
          border: 1px solid rgba(26,107,60,0.1);
          padding: 8px;
          z-index: 200;
          animation: dropdownIn 0.18s ease;
        }

        @keyframes dropdownIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        .dropdown::before {
          content: '';
          position: absolute;
          top: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 12px; height: 12px;
          background: white;
          border-top: 1px solid rgba(26,107,60,0.1);
          border-left: 1px solid rgba(26,107,60,0.1);
          rotate: 45deg;
        }

        .dropdown-item {
          display: block;
          padding: 9px 14px;
          border-radius: 8px;
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--color-gray-dark);
          text-decoration: none;
          transition: background 0.15s ease, color 0.15s ease;
        }

        .dropdown-item:hover {
          background: var(--color-primary-faint);
          color: var(--color-primary);
        }

        .dropdown-item-active {
          background: var(--color-primary);
          color: white !important;
          font-weight: 600;
        }

        /* ── Bouton S'inscrire ── */
        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .btn-inscrit {
          display: inline-flex;
          align-items: center;
          padding: 9px 20px;
          border-radius: var(--radius-full);
          font-size: 0.875rem;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.25s ease;
          box-shadow: 0 2px 10px rgba(26,107,60,0.25);
        }

        /* Transparent : bouton blanc avec texte vert */
        .navbar-transparent .btn-inscrit {
          background: white;
          color: var(--color-primary);
        }

        .navbar-transparent .btn-inscrit:hover {
          background: var(--color-primary-faint);
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(26,107,60,0.3);
        }

        /* Scrolled : bouton vert avec texte blanc */
        .navbar-scrolled .btn-inscrit {
          background: var(--color-primary);
          color: white;
        }

        .navbar-scrolled .btn-inscrit:hover {
          background: var(--color-primary-dark);
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(26,107,60,0.4);
        }

        /* ── Mobile Toggle ── */
        .mobile-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          width: 38px; height: 38px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
        }

        .navbar-transparent .mobile-toggle {
          color: white;
          background: rgba(255,255,255,0.15);
        }

        .navbar-transparent .mobile-toggle:hover {
          background: rgba(255,255,255,0.25);
        }

        .navbar-scrolled .mobile-toggle {
          color: var(--color-primary);
          background: var(--color-primary-faint);
        }

        .navbar-scrolled .mobile-toggle:hover {
          background: rgba(26,107,60,0.12);
        }

        /* ═══════════════════════════════════════
           MOBILE DRAWER
        ═══════════════════════════════════════ */
        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.45);
          z-index: 1998;
          backdrop-filter: blur(2px);
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }

        .mobile-drawer {
          position: fixed;
          top: 0; right: 0;
          height: 100dvh;
          width: min(320px, 88vw);
          background: white;
          z-index: 1999;
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: -8px 0 40px rgba(0,0,0,0.15);
        }

        .mobile-drawer-open {
          transform: translateX(0);
        }

        .mobile-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border-bottom: 1px solid var(--color-gray-light);
          background: var(--color-primary);
        }

        .mobile-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .mobile-logo-name {
          color: white;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.2rem;
        }

        .mobile-close-btn {
          color: white;
          background: rgba(255,255,255,0.15);
          border-radius: 8px;
          width: 36px; height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
        }

        .mobile-close-btn:hover {
          background: rgba(255,255,255,0.25);
        }

        .mobile-nav {
          flex: 1;
          overflow-y: auto;
          padding: 12px 12px;
        }

        .mobile-nav-group {
          border-bottom: 1px solid var(--color-gray-light);
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 14px 12px;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-gray-dark);
          text-decoration: none;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          border-radius: 8px;
          transition: background 0.15s, color 0.15s;
        }

        .mobile-nav-link:hover {
          background: var(--color-primary-faint);
          color: var(--color-primary);
        }

        .mobile-nav-active {
          color: var(--color-primary) !important;
          font-weight: 700;
          background: var(--color-primary-faint) !important;
        }

        .mobile-nav-parent {
          font-weight: 500;
        }

        .mobile-chevron {
          transition: transform 0.25s ease;
          color: var(--color-gray);
        }

        .mobile-chevron.rotated {
          transform: rotate(180deg);
        }

        .mobile-submenu {
          padding: 4px 4px 8px 16px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .mobile-submenu-link {
          display: block;
          padding: 9px 12px;
          font-size: 0.82rem;
          color: var(--color-gray);
          text-decoration: none;
          border-radius: 6px;
          transition: background 0.15s, color 0.15s;
          border-left: 2px solid var(--color-gray-light);
          margin-left: 4px;
        }

        .mobile-submenu-link:hover {
          background: var(--color-primary-faint);
          color: var(--color-primary);
          border-left-color: var(--color-primary);
        }

        .mobile-submenu-link.mobile-nav-active {
          color: var(--color-primary) !important;
          border-left-color: var(--color-primary);
          font-weight: 600;
        }

        .mobile-drawer-footer {
          padding: 16px 20px 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          border-top: 1px solid var(--color-gray-light);
        }

        /* ═══════════════════════════════════════
           RESPONSIVE
        ═══════════════════════════════════════ */
        @media (max-width: 1024px) {
          .navbar-links { display: none; }
          .btn-inscrit  { display: none; }
          .mobile-toggle { display: flex; }
        }

        @media (min-width: 1025px) {
          .mobile-toggle  { display: none; }
          .mobile-drawer  { display: none; }
          .mobile-overlay { display: none; }
        }

        @media (max-width: 640px) {
          .topbar-motto { display: none; }
          .logo-subtitle { display: none; }
        }
      `}</style>
    </>
  );
}
