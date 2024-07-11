import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const fallbackLng = ["en"];

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug:true,
    lng: "en", 
    resources :{
      en:{
        translation: {
          header: "Slice Of Hope"
        }
      },
      ar:{
        translation: {
          header: "شريحة من الأمل"
        }
      }
    }

  });

export default i18n;