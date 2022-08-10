/**
 * i18n - Internationalization Configuration file
 */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translation_en from './locales/en/translation';
import translation_si from './locales/si/translation';

const fallbackLng = ['en']
const availableLanguages = ['en','si']

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng,
        detection: {
            checkWhitelist: true
        },
        debug: false,
        whitelist: availableLanguages,
        interpolation: {
            escapeValue: false // no need for react. it escapes by default
        },
        resources: {
            en: {
                translation: translation_en
            },
            si: {
                translation: translation_si
            }
        }
    })

export default i18n;
