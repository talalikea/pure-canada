import Reveal from "./Reveal";
import { IconEducation, IconHealthcare, IconChildProtection, IconCommunity } from "./icons";
import { useLanguage } from "../context/LanguageContext";

const ICONS = [IconEducation, IconHealthcare, IconChildProtection, IconCommunity];

function Impact() {
  const { t } = useLanguage();

  return (
    <section id="impact" className="impact">
      <div className="container">
        <Reveal as="p" className="eyebrow eyebrow--center">
          {t.impact.title}
        </Reveal>
        <Reveal as="h2" className="section-title--center" delay={60}>
          {t.impact.lede}
        </Reveal>

        <div className="impact__grid">
          {t.impact.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={item.title} className="impact-card" delay={i * 90}>
                <div className="impact-card__icon">
                  <Icon />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Impact;
