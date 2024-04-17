'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import {
  type FieldErrors,
  type FieldValues,
  FormProvider,
  type SubmitHandler,
  useForm,
} from 'react-hook-form';

import { AppConfig } from '@/utils/AppConfig';
import cn from '@/utils/cn';

import StyledButton from '../ui/buttons/StyledButton';
import DialogForm from '../ui/DialogForm';
import AcceptTermsFormField from '../ui/form-elements/AcceptTermsFormField';
import PhoneInputFormField from '../ui/form-elements/PhoneInputFormField';

const { linksClassName } = AppConfig;

function OnlyUSNumbersNoteRow() {
  return (
    <div className="only-us-numbers-note inline-block pb-1 pt-2 italic text-gray-700 opacity-90">
      <p className="inline  text-sm">
        Only US numbers are allowed for now. You can also reach out to us at
      </p>
      &nbsp;
      <Link
        href="https://instagram.com/@streamlaine"
        className={cn('inline text-sm', linksClassName)}
        target="_blank"
      >
        our Instagram
      </Link>
      .
    </div>
  );
}

function DisplayErrorsRow({ errors }: { errors: FieldErrors<FieldValues> }) {
  return (
    <div className="flex flex-row">
      {Object.keys(errors).length > 0 && (
        <div className="flex flex-row font-medium text-red-500">
          {Object.keys(errors)
            .map((k) => errors[k]?.message?.toString() ?? '')
            .join('<br/>')}
        </div>
      )}
    </div>
  );
}

export default function CallMeNowDialog() {
  const t = useTranslations('CallMeDialog');

  const [isOpen, setIsOpen] = useState(false);

  const methods = useForm<FieldValues>({
    defaultValues: {
      phone: '+1',
      termsAcceptance: false,
    },
  });

  const {
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log('Form submitted', data);

    // Check if the form is valid.
    const { isValid } = methods.formState;
    if (!isValid) {
      alert(t('notValidCallMeNowForm'));
      console.log(methods.formState);
      return;
    }

    // Send Form Data to API
    fetch(AppConfig.apiEndpoints.callMeNow, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    // After that logic, close the modal.
    setIsOpen(false);
    methods.reset();
  };

  return (
    <DialogForm
      triggerButtonText={t('triggerButtonText')}
      dialogTitle={t('title')}
      description={t('description')}
      {...{ isOpen, setIsOpen }}
      form={
        <FormProvider {...methods}>
          <form
            id="call-me-now__form"
            name="call-me-now__form"
            className="mx-0 flex w-full items-end px-0"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <div className="flex flex-col">
              <div className="flex flex-row">
                <PhoneInputFormField className="styledInput rounded-l-xl rounded-r-none" />
                <StyledButton
                  variant="filled"
                  color="accent"
                  className="relative rounded-l-none rounded-r-xl border-0"
                  text={t('submit_cta_text')}
                  type="submit"
                />
              </div>
              <DisplayErrorsRow errors={errors} />
              <OnlyUSNumbersNoteRow />
              <div className="flex flex-row">
                <AcceptTermsFormField />
              </div>
            </div>

            {/* 
          <label
            htmlFor="dialog__call-me-now"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
            <input
              type="text"
              id="dialog__call-me-now"
              className="block w-full min-w-0 flex-1 rounded-none rounded-e-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Bonnie Green"
          />
          */}
          </form>
        </FormProvider>
      }
    />
  );
}
