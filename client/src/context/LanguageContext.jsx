import { createContext, useContext, useEffect, useMemo, useState } from "react";
import content from "../content/content";

const LanguageContext = createContext(null);

function getInitialLang() {
  if (typeof window === "undefined") return "en";
  return window.localStorage.getItem("pc-lang") || "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    const dir = content[lang].dir;
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    window.localStorage.setItem("pc-lang", lang);
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      dir: content[lang].dir,
      t: content[lang],
      toggleLang: () => setLang((prev) => (prev === "en" ? "ar" : "en")),
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
