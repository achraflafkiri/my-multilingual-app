import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonEN from './locales/en.json';
import commonES from './locales/es.json';

const resources = {
    en: {
        common: commonEN,
    },
    es: {
        common: commonES,
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // default language
        fallbackLng: 'en',
        ns: ['common'], // Specify the namespaces
        defaultNS: 'common', // Set default namespace
        interpolation: {
            escapeValue: false, // React already does escaping
        },
    });

export default i18n;
