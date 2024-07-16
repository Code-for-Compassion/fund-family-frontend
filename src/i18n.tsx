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
          register: "Register your Resource Request Page",
          resources: "Resources",
          families: "Families in Need of Support",
          family: "Number of family members",
          egyptFam: "Do you have family in Egypt?",
          expenses: "How do you plan on using the funds?",
          distribution: "distribution of funds",
          name: "What is your name (family name or otherwise)",
          enterName: "Enter Name",
          email: "What is your email?",
          additional: "Any additional information",
          goal: "Enter your goal amount to raise",
          link: "link",
          url: "Must be functioning url",
          example: "Example: $5000",
          exampleFam: "Example: 3",
          yes: "yes",
          submit: "Submit",
          close: "Close"
,        }
      },
      ar:{
        translation: {
          header: "شريحة من الأمل",
          submitMain: "تقديم طلب المساعدة",
          about: "عن",
          register: "سجل صفحة طلب الموارد الخاصة بك",
          resources: "موارد",
          families: "عائلات بحاجة للدعم",
          family: "عدد أفراد الأسرة",
          egyptFam: "هل لديك عائلة في مصر؟",
          expenses: "ما هي النفقات الخاصة بك؟",
          distribution: "توزيع الأموال",
          name: "ما هو اسمك (اسم العائلة أو غير ذلك)",
          enterName: "أدخل الاسم",
          email: "عنوان البريد الإلكتروني",
          additional: "معلومات إضافية",
          goal: "أدخل المبلغ المستهدف لرفعه",
          link: "وصلة",
          url: "يجب أن يكون عنوان URL فعالاً",
          example$: "مثال: 5000 دولا",
          exampleFam: "مثال: 3",
          yes:"شوك",
          sumbit: "يُقدِّم",
          close: "يغلق",


        }
      }
    }

  });

export default i18n;