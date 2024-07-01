import { Menu, MenuButton, MenuItems, MenuItem, Transition } from "@headlessui/react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import {} from '@heroicons/react/24/outline'
import { Fragment } from "react";
import { useTranslation } from "react-i18next";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

let countries = [
  {
    code: "ar-SY",
    name: "عربي",
    country_code: "ar-SY",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
];

const LanguageToggle = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div>
        <Menu
          as="div"
          className="px-3 pl-0 relative flex"
          aria-label="usermenu"
        >
          <MenuButton
            className="group w-full  text-sm text-left font-medium text-gray-700 focus:outline-none"
            aria-label="usermenu-button"
          >
            <span className="flex w-full justify-between items-center">
              <GlobeAltIcon className="h-7 w-7 cursor-pointer  text-blue-600" />
            </span>
          </MenuButton>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems
              aria-label="menu-item-container"
              className="z-10 mx-3 origin-top absolute left-[-36px] sm:left-[-25px] md:left-[-25px] top-[42px] xl:left-[-80px] right-0 min-w-max mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
            >
              <div className="px-1 py-1 " aria-label="menu-items">
                {countries.map((lng) => {
                  return (
                    <MenuItem key={lng.code}>
                      <button
                        className={classNames(
                          "flex items-center space-x-2 px-4 py-2 text-sm cursor-pointer"
                        )}
                        onClick={() => i18n.changeLanguage(lng.code)} 
                        disabled={i18n.language === lng.code}
                      >
                        <span className={`fi fi-${lng.country_code}`}></span>
                        <span>{lng.name}</span>
                      </button>
                    </MenuItem>
                  );
                })}
              </div>
            </MenuItems>
          </Transition>
        </Menu>
      </div>
    </>
  );
};

export default LanguageToggle;