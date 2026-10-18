import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="hero">
      <div className="hero__backdrop" aria-hidden="true">
        <span className="hero__blob hero__blob--one" />
        <span className="hero__blob hero__blob--two" />
      </div>

      <div className="container hero__content">
        <Reveal as="p" className="eyebrow">
          {t.hero.eyebrow}
        </Reveal>

        <Reveal as="h1" delay={80}>
          {t.hero.title}
        </Reveal>

        <Reveal as="p" className="hero__lede" delay={160}>
          {t.hero.description}
        </Reveal>

        <Reveal className="hero__actions" delay={240}>
          <a className="btn btn--solid" href="#programs">
            {t.hero.ctaPrimary}
          </a>
          <a className="btn btn--ghost" href="#contact">
            {t.hero.ctaSecondary}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
