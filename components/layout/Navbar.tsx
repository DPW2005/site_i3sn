'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

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
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobile = () => {
    setIsOpen(!isOpen);
    setMobileExpanded(null);
  };

  return (
    <>
      <nav
        id="navbar"
        className={`navbar ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}
      >
        <div className="container navbar-inner">
          {/* Logo */}
          <Link href="/" className="navbar-logo" id="navbar-logo">
            <img
              src="/logo.png"
              alt="Logo I3SN — Institut Supérieur des Sciences de la Santé de Ngong"
              className="navbar-logo-img"
              width={52}
              height={52}
            />
            <div className="logo-text">
              <span className="logo-name">I3SN</span>
              <span className="logo-subtitle">Institut Supérieur des Sciences de la Santé de Ngong</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="navbar-links" role="menubar">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="nav-item"
                role="none"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="nav-link"
                  role="menuitem"
                  id={`nav-${link.label.toLowerCase().replace(/\s/g, '-').replace(/'/g, '')}`}
                >
                  {link.label}
                  {link.children && <ChevronDown size={14} className="nav-chevron" />}
                </Link>

                {link.children && activeDropdown === link.label && (
                  <div className="dropdown" role="menu" aria-label={`Sous-menu ${link.label}`}>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="dropdown-item"
                        role="menuitem"
                        id={`nav-${child.label.toLowerCase().replace(/\s|\//g, '-')}`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button + Mobile Toggle */}
          <div className="navbar-actions">
            <Link href="/admissions" className="btn btn-primary btn-sm" id="navbar-cta-admissions">
              S&apos;inscrire
            </Link>
            <button
              className="mobile-toggle"
              onClick={toggleMobile}
              aria-label="Ouvrir le menu"
              id="navbar-mobile-toggle"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Top bar */}
        <div className="navbar-topbar">
          <div className="container topbar-inner">
            <div className="topbar-left">
              <span>Institut Supérieur des Sciences de la Santé de Ngong — Cameroun</span>
            </div>
            <div className="topbar-right">
              <a href="tel:+237699000000" className="topbar-link" id="topbar-phone">
                <Phone size={12} />
                +237 699 000 000
              </a>
              <a href="mailto:contact@i3sn.cm" className="topbar-link" id="topbar-email">
                contact@i3sn.cm
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="mobile-overlay" onClick={toggleMobile} aria-hidden="true" />
      )}
      <div className={`mobile-drawer ${isOpen ? 'mobile-drawer-open' : ''}`} role="dialog" aria-label="Menu mobile">
        <div className="mobile-drawer-header">
          <div className="logo-icon logo-icon-sm">
            <span className="logo-text-abbr">I3SN</span>
          </div>
          <button
            onClick={toggleMobile}
            aria-label="Fermer le menu"
            id="navbar-mobile-close"
            className="mobile-close-btn"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <div key={link.href} className="mobile-nav-group">
              {link.children ? (
                <>
                  <button
                    className="mobile-nav-link mobile-nav-parent"
                    onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                    id={`mobile-nav-${link.label.toLowerCase().replace(/\s/g, '-').replace(/'/g, '')}`}
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`mobile-chevron ${mobileExpanded === link.label ? 'rotated' : ''}`}
                    />
                  </button>
                  {mobileExpanded === link.label && (
                    <div className="mobile-submenu">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="mobile-submenu-link"
                          onClick={toggleMobile}
                          id={`mobile-nav-${child.label.toLowerCase().replace(/\s|\//g, '-')}`}
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
                  className="mobile-nav-link"
                  onClick={toggleMobile}
                  id={`mobile-nav-${link.label.toLowerCase().replace(/\s/g, '-').replace(/'/g, '')}`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="mobile-drawer-footer">
          <Link href="/admissions" className="btn btn-primary" onClick={toggleMobile} id="mobile-cta-admissions">
            S&apos;inscrire au concours
          </Link>
          <a href="tel:+237699000000" className="btn btn-outline-primary" id="mobile-phone-link">
            <Phone size={16} />
            Nous appeler
          </a>
        </div>
      </div>

      <style jsx>{`
        /* ---- Navbar ---- */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s ease;
          flex-direction: column;
          display: flex;
        }

        .navbar-topbar {
          background: var(--color-primary-dark);
          color: rgba(255,255,255,0.85);
          font-size: 0.75rem;
          padding: 6px 0;
          transition: all 0.3s ease;
        }

        .navbar-scrolled .navbar-topbar {
          display: none;
        }

        .topbar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .topbar-right {
          display: flex;
          gap: 24px;
        }

        .topbar-link {
          display: flex;
          align-items: center;
          gap: 5px;
          color: rgba(255,255,255,0.8);
          transition: color 0.2s;
        }

        .topbar-link:hover {
          color: white;
        }

        .navbar-transparent {
          background: transparent;
        }

        .navbar-scrolled {
          background: rgba(255,255,255,0.98);
          box-shadow: 0 2px 20px rgba(0,0,0,0.08);
          backdrop-filter: blur(20px);
        }

        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: var(--navbar-height);
          gap: 32px;
        }

        /* ---- Logo ---- */
        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .navbar-logo-img {
          width: 52px;
          height: 52px;
          object-fit: contain;
          border-radius: 4px;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .navbar-logo:hover .navbar-logo-img {
          transform: scale(1.05);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .logo-name {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.25rem;
          color: var(--color-primary);
          line-height: 1;
          transition: color 0.3s;
        }

        .navbar-transparent .logo-name {
          color: white;
        }

        .navbar-scrolled .logo-name {
          color: var(--color-primary);
        }

        .logo-subtitle {
          font-size: 0.55rem;
          font-weight: 500;
          color: var(--color-gray);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          max-width: 180px;
          line-height: 1.2;
          transition: color 0.3s;
        }

        .navbar-transparent .logo-subtitle {
          color: rgba(255,255,255,0.7);
        }

        /* ---- Nav Links ---- */
        .navbar-links {
          display: flex;
          align-items: center;
          list-style: none;
          gap: 4px;
          flex: 1;
          justify-content: center;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 8px 12px;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--color-dark);
          border-radius: var(--radius-sm);
          transition: all 0.2s;
          white-space: nowrap;
        }

        .navbar-transparent .nav-link {
          color: rgba(255,255,255,0.9);
        }

        .navbar-scrolled .nav-link {
          color: var(--color-dark);
        }

        .nav-link:hover {
          color: var(--color-primary-light);
          background: var(--color-primary-faint);
        }

        .navbar-transparent .nav-link:hover {
          color: white;
          background: rgba(255,255,255,0.15);
        }

        .nav-chevron {
          transition: transform 0.2s;
        }

        .nav-item:hover .nav-chevron {
          transform: rotate(180deg);
        }

        /* ---- Dropdown ---- */
        .dropdown {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          background: white;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          padding: 8px;
          min-width: 220px;
          animation: fadeInUp 0.2s ease;
          border: 1px solid var(--color-gray-light);
        }

        .dropdown-item {
          display: block;
          padding: 10px 16px;
          font-size: 0.875rem;
          color: var(--color-gray-dark);
          border-radius: var(--radius-sm);
          transition: all 0.15s;
          font-weight: 500;
        }

        .dropdown-item:hover {
          background: var(--color-primary-faint);
          color: var(--color-primary);
          padding-left: 20px;
        }

        /* ---- Actions ---- */
        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .mobile-toggle {
          display: none;
          padding: 8px;
          border-radius: var(--radius-sm);
          color: var(--color-dark);
          transition: all 0.2s;
        }

        .navbar-transparent .mobile-toggle {
          color: white;
        }

        .mobile-toggle:hover {
          background: var(--color-gray-light);
        }

        /* ---- Mobile Drawer ---- */
        .mobile-overlay {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          z-index: 1100;
          animation: fadeIn 0.2s ease;
        }

        .mobile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 320px;
          max-width: 90vw;
          background: white;
          z-index: 1200;
          transform: translateX(100%);
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
          display: flex;
          flex-direction: column;
          box-shadow: -10px 0 40px rgba(0,0,0,0.15);
        }

        .mobile-drawer-open {
          transform: translateX(0);
        }

        .mobile-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid var(--color-gray-light);
        }

        .mobile-close-btn {
          color: var(--color-gray);
          padding: 6px;
          border-radius: var(--radius-sm);
          transition: all 0.2s;
        }

        .mobile-close-btn:hover {
          background: var(--color-gray-faint);
          color: var(--color-dark);
        }

        .mobile-nav {
          flex: 1;
          overflow-y: auto;
          padding: 12px 16px;
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
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--color-dark);
          transition: all 0.2s;
          border-radius: var(--radius-sm);
          text-decoration: none;
        }

        .mobile-nav-link:hover {
          color: var(--color-primary);
          background: var(--color-primary-faint);
        }

        .mobile-nav-parent {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 500;
        }

        .mobile-chevron {
          transition: transform 0.2s;
          color: var(--color-gray);
        }

        .mobile-chevron.rotated {
          transform: rotate(180deg);
        }

        .mobile-submenu {
          padding: 4px 0 12px 24px;
          animation: fadeInUp 0.2s ease;
        }

        .mobile-submenu-link {
          display: block;
          padding: 10px 12px;
          font-size: 0.875rem;
          color: var(--color-gray);
          border-radius: var(--radius-sm);
          transition: all 0.15s;
          font-weight: 400;
        }

        .mobile-submenu-link:hover {
          color: var(--color-primary);
          background: var(--color-primary-faint);
        }

        .mobile-drawer-footer {
          padding: 20px 24px;
          border-top: 1px solid var(--color-gray-light);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        /* ---- Responsive ---- */
        @media (max-width: 1024px) {
          .navbar-links {
            display: none;
          }
          .navbar-actions .btn:not(.mobile-toggle) {
            display: none;
          }
          .mobile-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .mobile-overlay {
            display: block;
          }
        }

        @media (max-width: 640px) {
          .logo-subtitle {
            display: none;
          }
          .navbar-topbar {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
