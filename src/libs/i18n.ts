import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en_Trans from '@/locales/en.json';
import pt_Br_Trans from '@/locales/pt_BR.json';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { ...en_Trans },
            pt_Br: { ...pt_Br_Trans }
        },
        fallbackLng: 'en'
    });