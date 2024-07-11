import { Menu, MenuButton, MenuItems, MenuItem, Transition } from "@headlessui/react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import {} from '@heroicons/react/24/outline'
import i18n from "../i18n";
import { useTranslation } from "react-i18next";



const languages = [
  {
    code: "ar",
    lang: "Arabic"
  },
  {
    code: "en",
    lang: "English",
  },
];
const changeLanguage =(lng) => {
  i18n.changeLanguage(lng)
};
const LanguageToggle = () => {
  const { i18n } = useTranslation();
  return (
<div className="btn-Container">
    {languages.map((lng) => {
      return <button key={lng.code ===i18n.language? "selected": ""} onClick={()=> changeLanguage(lng.code)}>
        {lng.lang}
      </button>
    })}

</div>
  );
};

export default LanguageToggle;