import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/shared/types';

const localePrefix: LocalePrefix = 'always';

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: 'Streamlaine',
  locales: ['en', 'es'],
  defaultLocale: 'en',
  localePrefix,
  apiEndpoints: {
    callMeNow: `${process.env.NEXT_PUBLIC_API_URL}/37a7208b-f334-4838-b43e-6ca977eae3c8`,
  },
};
