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
          part1: 'WebDev Blog',
          part2: 'Home',
          part3: 'Users',
          part4: 'About',
          part5: 'Log In',
          part6: 'Sign Out',
          part7: 'Log In',
          part8: 'Email Adress',
          part9: 'We will never share your email width anyone else.',
          part10: 'Password'
        }
      },
      ru: {
        translation: {
            description: {
                part1: 'Блог',
                part2: 'Главная',
                part3: 'Пользователи',
                part4: 'О нас',
                part5: 'Авторизоваться',
                part6: 'Войти',
                part7: 'Вход',
                part8: 'Email-адрес',
                part9: 'Мы никогда и никому не передадим вашу электронную почту',
                part10: 'Пароль'
            }
        }
    }
    }
  });

export default i18n;
