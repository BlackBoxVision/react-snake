import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import res from './resources';

i18next.use(LanguageDetector).init({
    debug: false,
    resources: res,
    fallbackLng: 'es',
    interpolation: {
        escapeValue: false
    }
});

export default i18next;
