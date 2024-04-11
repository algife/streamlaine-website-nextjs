import flagChina from '../../assets/svg/flagChina.svg';
import flagGermany from '../../assets/svg/flagGermany.svg';
import flagItalia from '../../assets/svg/flagItalia.svg';
import flagUnitedStates from '../../assets/svg/flagUnitedStates.svg';

export default function LanguageSwitch() {
  return (
    <div className="flex items-center space-x-1 md:order-2 md:space-x-0 rtl:space-x-reverse">
      <button
        type="button"
        data-dropdown-toggle="language-dropdown-menu"
        className="inline-flex cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
      >
        {flagUnitedStates}
        English (US)
      </button>
      <div
        className="z-50 my-4 hidden list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow dark:bg-gray-700"
        id="language-dropdown-menu"
      >
        <ul className="py-2 font-medium" role="none">
          <li>
            <a
              href="#english"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              role="menuitem"
            >
              <div className="inline-flex items-center">
                {flagUnitedStates}
                English (US)
              </div>
            </a>
          </li>
          <li>
            <a
              href="#german"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              role="menuitem"
            >
              <div className="inline-flex items-center">
                {flagGermany}
                Deutsch
              </div>
            </a>
          </li>
          <li>
            <a
              href="#italian"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              role="menuitem"
            >
              <div className="inline-flex items-center">
                {flagItalia}
                Italiano
              </div>
            </a>
          </li>
          <li>
            <a
              href="#chinese"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              role="menuitem"
            >
              <div className="inline-flex items-center">
                {flagChina}
                中文 (繁體)
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
