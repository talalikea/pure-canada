import { useState } from "react";
import Reveal from "./Reveal";
import { IconEducation, IconHealthcare, IconChildProtection, IconHospital, IconCheck } from "./icons";
import { useLanguage } from "../context/LanguageContext";

const ICONS = [IconEducation, IconHealthcare, IconChildProtection, IconHospital];

function Programs() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const program = t.programs.items[active];
  const ActiveIcon = ICONS[active];

  return (
    <section id="programs" className="programs">
      <div className="container">
        <Reveal as="p" className="eyebrow eyebrow--center">
          {t.programs.title}
        </Reveal>
        <Reveal as="h2" className="section-title--center" delay={60}>
          {t.programs.lede}
        </Reveal>

        <Reveal className="program-tabs" delay={100}>
          {t.programs.items.map((item, i) => {
            const TabIcon = ICONS[i];
            return (
              <button
                key={item.title}
                type="button"
                className={`program-tab ${i === active ? "program-tab--active" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="program-tab__icon">
                  <TabIcon />
                </span>
                {item.title}
              </button>
            );
          })}
        </Reveal>

        <div key={active} className="program-panel">
          <div className="program-panel__header">
            <div className="program-panel__icon">
              <ActiveIcon />
            </div>
            <div>
              <span className="program-panel__index">0{active + 1} / 0{t.programs.items.length}</span>
              <h3>{program.title}</h3>
            </div>
          </div>

          <p className="program-panel__intro">{program.intro}</p>

          <span className="program-panel__label">{t.programs.whatWeDo}</span>
          <ul className="program-panel__checklist">
            {program.bullets.map((bullet) => (
              <li key={bullet}>
                <IconCheck />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Programs;
