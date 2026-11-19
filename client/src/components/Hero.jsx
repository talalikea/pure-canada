import { useLanguage } from "../context/LanguageContext";

function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero__content">
          <p className="hero__eyebrow">{t.hero.eyebrow || "PURE CANADA FOUNDATION"}</p>
          <h1 className="hero__title">{t.hero.title}</h1>
          <p className="hero__subtitle">{t.hero.description}</p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="#programs">
              {t.hero.ctaPrimary}
            </a>
            <a className="btn btn--outline" href="#contact">
              {t.hero.ctaSecondary || "Get Involved"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
