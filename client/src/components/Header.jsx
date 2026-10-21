import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import DonationButton from "./DonationButton";
import LanguageSwitch from "./LanguageSwitch";
import { useLanguage } from "../context/LanguageContext";

function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#top", label: t.nav.home },
    { href: "#programs", label: t.nav.programs },
    { href: "#about", label: t.nav.about },
    { href: "#events", label: t.nav.events },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="site-header__inner container">
        <a className="site-header__brand" href="#top" onClick={() => setMenuOpen(false)}>
          <img className="site-header__logo" src={logo} alt={t.brand} />
          <span className="site-header__brandtext">
            <span className="site-header__name">{t.brand}</span>
          </span>
        </a>

        <nav className={`site-nav ${menuOpen ? "site-nav--open" : ""}`} aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <LanguageSwitch className="site-nav__lang" />
          <DonationButton className="site-nav__donate" />
        </nav>

        <button
          type="button"
          className="site-header__toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Header;
