import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useFormContext } from 'react-hook-form';

export default function AcceptTermsFormField() {
  const t = useTranslations('TermsAcceptance');
  const linksClass = 'text-xs text-sky-500 hover:underline';

  const { register } = useFormContext();

  return (
    <div className="my-4 flex items-center">
      <input
        {...register('termsAcceptance', { required: 'The field is required' })}
        aria-describedby="termsAcceptance"
        type="checkbox"
        className="size-4 rounded border border-gray-600 bg-gray-700 ring-offset-gray-800 focus:ring-1 focus:ring-sky-600"
      />
      <label htmlFor="termsAcceptance" className="ms-2 text-xs text-gray-600">
        {t('i_accept')}
        &nbsp;
        <Link className={linksClass} href="/legal/terms">
          {t('terms_of_service')}
        </Link>
        &nbsp;
        {t('and_the')}
        &nbsp;
        <Link className={linksClass} href="/legal/privacy">
          {t('privacy_policy')}
        </Link>
      </label>
    </div>
  );
}
