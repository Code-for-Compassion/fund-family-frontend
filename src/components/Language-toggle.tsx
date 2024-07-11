import { Menu, MenuButton, MenuItems, MenuItem, Transition } from "@headlessui/react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import {} from '@heroicons/react/24/outline'
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import { Button } from "react-bootstrap";


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

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const changeLanguage =(lng) => {
    i18n.changeLanguage(lng)
  };
  useEffect(()=>{
    console.log(i18n.dir())
    document.body.dir = i18n.dir()}, [i18n,i18n.language])

  return (
<div className="btn-Container">
    {languages.map((lng) => {
      return <Button variant="dark" key={lng.code ===i18n.language? "selected": ""} onClick={()=> changeLanguage(lng.code)}>
        {lng.lang}
      </Button>
    })}

</div>
  );
}

export default LanguageToggle;