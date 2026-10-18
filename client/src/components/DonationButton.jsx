import { useLanguage } from "../context/LanguageContext";

export const DONATION_LINK = "https://www.zeffy.com/en-CA/donation-form/donate-to-change-lives-24516";

function DonationButton({ className = "", label }) {
  const { t } = useLanguage();
  const hasLink = DONATION_LINK.trim().length > 0;

  return (
    <a
      className={`donate-button ${className}`.trim()}
      href={hasLink ? DONATION_LINK : "#"}
      target={hasLink ? "_blank" : undefined}
      rel={hasLink ? "noopener noreferrer" : undefined}
      aria-disabled={!hasLink}
      onClick={(e) => {
        if (!hasLink) e.preventDefault();
      }}
    >
      {label || t.donate}
    </a>
  );
}

export default DonationButton;
