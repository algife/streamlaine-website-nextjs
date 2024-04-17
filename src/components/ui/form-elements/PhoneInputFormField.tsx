/* eslint-disable jsx-a11y/label-has-associated-control */
import 'react-phone-number-input/style.css';

import { useTranslations } from 'next-intl';
import { useFormContext } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';

import cn from '@/utils/cn';

export default function PhoneInputFormField({
  className,
}: {
  className?: string;
}) {
  // const { register } = useFormContext();
  const t = useTranslations('FormFields');

  const { setValue, watch } = useFormContext();
  const phoneValue = watch('phone');

  const handlePhoneUpdate = ({
    phone: _newPhone,
    countryCode: _newCountryCode,
  }: {
    phone?: string;
    countryCode?: string;
  }) => {
    if (_newPhone != null)
      setValue('phone', _newPhone, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
    if (_newCountryCode != null)
      setValue('phone', `${_newCountryCode}${phoneValue}`, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
  };

  return (
    <div className={cn('flex flex-auto flex-col justify-stretch', className)}>
      <label
        htmlFor="phone"
        className="hidden text-sm font-medium text-gray-500"
      >
        Phone number:
      </label>
      <PhoneInput
        addInternationalOption={false}
        smartCaret={false}
        defaultCountry="US"
        countries={['US']}
        onChange={(newPhone) => handlePhoneUpdate({ phone: `${newPhone}` })}
        // onCountryChange={(countryCode) =>
        //   handlePhoneUpdate(undefined, countryCode)
        // }
        required
        value={phoneValue}
        placeholder={t('phone_placeholder')}
        className={cn(
          'block w-full rounded-l-lg px-2 py-[0.7rem] text-sm',
          'text-gray-900 placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-0',
        )}
      />
    </div>
  );
}
