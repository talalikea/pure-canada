import logo from "../assets/logo.png";
import { useLanguage } from "../context/LanguageContext";

function Footer({ apiStatus = "checking..." }) {
  const { t } = useLanguage();
  const isOnline = apiStatus === "ok";
  const copyright = t.footer.copyright.replace("{year}", new Date().getFullYear());

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <img src={logo} alt={t.brand} />
          <div>
            <strong>{t.brand}</strong>
            <p>{t.footer.about}</p>
          </div>
        </div>

        <div className="site-footer__col">
          <h4>{t.nav.home}</h4>
          <a href="#top">{t.nav.home}</a>
          <a href="#programs">{t.nav.programs}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#events">{t.nav.events}</a>
          <a href="#gallery">{t.nav.gallery}</a>
          <a href="#contact">{t.nav.contact}</a>
        </div>

        <div className="site-footer__col">
          <h4>{t.contact.title}</h4>
          <span>{t.contact.email.label}: {t.contact.email.value}</span>
        </div>
      </div>

      <div className="site-footer__bottom container">
        <span>{copyright}</span>
        <span className="site-footer__status">
          <i className={`status-dot ${isOnline ? "status-dot--on" : "status-dot--off"}`} />
          {isOnline ? "All systems operational" : "Checking status…"}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
