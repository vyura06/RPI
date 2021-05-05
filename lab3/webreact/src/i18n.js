import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          part1: 'Filmmakers of Belarus',
          part2: 'Home',
          part3: 'Filmmakers',
          part4: 'More details',
        }
      },
      ru: {
        translation: {
            description: {
                part1: 'Режиссёры Беларуси',
                part2: 'Главная',
                part3: 'Режиссёры',
                part4: 'Дополнительно',
            }
        }
    }
    }
  });

export default i18n;
