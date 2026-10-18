// Replace this with the real donation processor URL when available.
export const DONATION_LINK = "";

function DonationButton({ className = "", label = "Donate Now" }) {
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
      {label}
    </a>
  );
}

export default DonationButton;
