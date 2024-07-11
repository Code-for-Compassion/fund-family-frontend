import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";



i18n
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    debug:true,
    fallbackLng: "ar",
    // lng: "en", 
    resources :{
      en:{
        translation: {
          header: "Slice Of Hope",
          submitMain: "Submit Aid Request",
          about: "About",
          resources: "Resources",
          families: "Families in Need of Support"
        }
      },
      ar:{
        translation: {
          header: "شريحة من الأمل",
          submitMain: "تقديم طلب المساعدة",
          about: "عن",
          resources: "موارد",
          families: "عائلات بحاجة للدعم"
        }
      }
    }

  });

export default i18n;