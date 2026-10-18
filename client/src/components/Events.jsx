import Reveal from "./Reveal";
import { IconCalendar } from "./icons";
import { useLanguage } from "../context/LanguageContext";

function Events() {
  const { t } = useLanguage();
  const { item } = t.events;

  return (
    <section id="events" className="events">
      <div className="container">
        <Reveal as="p" className="eyebrow eyebrow--center">
          {t.events.title}
        </Reveal>
        <Reveal as="h2" className="section-title--center" delay={60}>
          {t.events.lede}
        </Reveal>

        <Reveal className="event-card" delay={120}>
          <div className="event-card__icon">
            <IconCalendar />
          </div>
          <div className="event-card__body">
            <span className="event-card__badge">{t.events.badge}</span>
            <h3>{item.title}</h3>
            <dl className="event-card__meta">
              <div>
                <dt>{item.dateLabel}</dt>
                <dd>{item.dateValue}</dd>
              </div>
              <div>
                <dt>{item.timeLabel}</dt>
                <dd>{item.timeValue}</dd>
              </div>
              <div>
                <dt>{item.formatLabel}</dt>
                <dd>{item.formatValue}</dd>
              </div>
            </dl>
            <p>{item.description}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Events;
