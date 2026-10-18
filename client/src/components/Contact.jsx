import Reveal from "./Reveal";
import DonationButton from "./DonationButton";
import { useLanguage } from "../context/LanguageContext";

function Contact() {
  const { t } = useLanguage();
  const { email } = t.contact;

  return (
    <section id="contact" className="cta">
      <div className="container cta__inner">
        <Reveal as="h2">{t.contact.title}</Reveal>
        <Reveal as="p" className="cta__lede" delay={80}>
          {t.contact.lede}
        </Reveal>

        <Reveal className="contact__grid" delay={140}>
          <div>
            <span className="contact__label">{email.label}</span>
            <span className="contact__value">{email.value}</span>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <DonationButton className="donate-button--large donate-button--on-dark" />
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
