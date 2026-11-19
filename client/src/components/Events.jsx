import Reveal from "./Reveal";
import { IconCalendar } from "./icons";
import { useLanguage } from "../context/LanguageContext";

function Events() {
  const { t } = useLanguage();

  return (
    <section id="events" className="events">
      <div className="container">
        <Reveal as="p" className="eyebrow eyebrow--center">
          {t.events.title}
        </Reveal>
        <Reveal as="h2" className="section-title--center" delay={60}>
          {t.events.lede}
        </Reveal>

        <Reveal className="events__message" delay={100}>
          <p>Soon we will have a general meeting! Join us to connect with our community and learn more about our mission.</p>
        </Reveal>

        <Reveal className="event-card event-card--empty" delay={120}>
          <div className="event-card__icon">
            <IconCalendar />
          </div>
          <div className="event-card__body">
            <span className="event-card__badge event-card__badge--coming">Coming Soon</span>
            <h3>General Meeting</h3>
            <dl className="event-card__meta">
              <div>
                <dt>Date</dt>
                <dd className="event-card__placeholder">To be announced</dd>
              </div>
              <div>
                <dt>Time</dt>
                <dd className="event-card__placeholder">To be announced</dd>
              </div>
              <div>
                <dt>Format</dt>
                <dd className="event-card__placeholder">To be announced</dd>
              </div>
            </dl>
            <p className="event-card__placeholder-text">Details will be shared soon. Stay tuned for updates!</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Events;
