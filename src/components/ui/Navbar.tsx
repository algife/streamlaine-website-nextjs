/* eslint-disable @next/next/no-img-element */
// import burgerMenuSvg from '../../assets/svg/burgerMenu.svg';
import { useTranslations } from 'next-intl';

import cn from '@/utils/cn';

import StyledButton from './buttons/StyledButton';
import Logo from './Logo';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const showCtaButton = false;

  return (
    <nav
      className={cn(
        'fixed inset-x-0 top-0 z-50',
        // "shadow-2xl border-gray-200 bg-slate-950",
        'bg-transparent',
      )}
      style={{ backgroundColor: 'transparent!important' }}
    >
      <div
        className={cn(
          'mx-auto flex max-w-screen-xl flex-wrap items-center p-4',
          showCtaButton ? 'justify-between' : 'justify-center',
        )}
      >
        <Logo />
        {showCtaButton && (
          <div className="flex flex-row space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
            <StyledButton variant="outlined" color="primary">
              {t('submit_cta_text')}
            </StyledButton>

            {/* <LocaleSwitcher /> */}
            {/* <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {burgerMenuSvg}
          </button> */}
          </div>
        )}
        {/*  
       <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {burgerMenuSvg}
          </button> 

         */}

        {/* <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-cta"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
            <li>
              <a
                href="#"
                className="block rounded bg-orange-500 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-sky-700 md:dark:text-sky-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-sky-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-sky-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-sky-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-sky-500"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-sky-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-sky-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
}
