import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import ru from "./public/locales/ru/common.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            ru: {
                translation: ru
            }
        },
        lng: "ru",
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
