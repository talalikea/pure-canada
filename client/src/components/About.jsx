import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="about">
      <div className="container">
        <Reveal as="p" className="eyebrow eyebrow--center">
          {t.about.title}
        </Reveal>
        <Reveal as="p" className="section-lede about__intro" delay={60}>
          {t.about.intro}
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__pillar" delay={120}>
            <h3>{t.about.vision.title}</h3>
            <p>{t.about.vision.text}</p>
          </Reveal>
          <Reveal className="about__pillar" delay={200}>
            <h3>{t.about.mission.title}</h3>
            <p>{t.about.mission.text}</p>
          </Reveal>
        </div>

        <Reveal as="h3" className="about__values-title" delay={240}>
          {t.about.valuesTitle}
        </Reveal>
        <div className="about__values">
          {t.about.values.map((value, i) => (
            <Reveal key={value.title} className="about__item" delay={260 + i * 60}>
              <strong>{value.title}</strong>
              <span>{value.desc}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
