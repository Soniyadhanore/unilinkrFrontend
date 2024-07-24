import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import eng from "language/en/en.js";
i18n
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: eng(),
      },
    },
    lng: "en",
    fallbackLng: "en",
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;