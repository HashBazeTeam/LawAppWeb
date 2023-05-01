/**
 * i18n - Internationalization Configuration file
 */
// import i18n from 'i18next';
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
// import Backend from "i18next-xhr-backend";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import translation_en from "./locales/en/translation";
import translation_si from "./locales/si/translation";

const fallbackLng = ["en"];
const availableLanguages = ["en", "si"];

i18next
//   .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng,
    debug: false,
    whitelist: availableLanguages,
    interpolation: {
      escapeValue: false, // no need for react. it escapes by default
    },
    // backend: {
    //   loadPath: "/locales/{{lng}}/{{ns}}.json",
    // },
    resources: {
      en: {
        translation: translation_en,
      },
      si: {
        translation: translation_si,
      },
    },
  });

export default i18next;
