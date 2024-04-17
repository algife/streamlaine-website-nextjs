import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useFormContext } from 'react-hook-form';

import { AppConfig } from '@/utils/AppConfig';
import cn from '@/utils/cn';

export default function AcceptTermsFormField() {
  const t = useTranslations('TermsAcceptance');
  const linksClassName = cn('text-xs', AppConfig.linksClassName);

  const { register } = useFormContext();

  return (
    <div className="my-4 flex items-center">
      <input
        {...register('termsAcceptance', {
          required: 'We need you to accept our Terms before proceeding.',
        })}
        aria-describedby="termsAcceptance"
        type="checkbox"
        className="size-4 rounded border border-gray-600 bg-gray-700 ring-offset-gray-800 focus:ring-1 focus:ring-sky-600"
      />
      <label htmlFor="termsAcceptance" className="ms-2 text-xs text-gray-600">
        {t('i_accept')}
        &nbsp;
        <Link className={linksClassName} href="/legal/terms">
          {t('terms_of_service')}
        </Link>
        &nbsp;
        {t('and_the')}
        &nbsp;
        <Link className={linksClassName} href="/legal/privacy">
          {t('privacy_policy')}
        </Link>
      </label>
    </div>
  );
}
