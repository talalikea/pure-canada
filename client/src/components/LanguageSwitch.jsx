import { useLanguage } from "../context/LanguageContext";

function LanguageSwitch({ className = "" }) {
  const { t, toggleLang } = useLanguage();

  return (
    <button
      type="button"
      className={`lang-switch ${className}`.trim()}
      onClick={toggleLang}
      aria-label={t.langSwitch.aria}
    >
      {t.langSwitch.label}
    </button>
  );
}

export default LanguageSwitch;
