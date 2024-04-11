'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import {
  type FieldValues,
  FormProvider,
  type SubmitHandler,
  useForm,
} from 'react-hook-form';

import { useInterval } from '@/hooks/useInterval';

import StyledButton from '../ui/buttons/StyledButton';
import DialogForm from '../ui/DialogForm';
import AcceptTermsFormField from '../ui/form-elements/AcceptTermsFormField';
import PhoneInputFormField from '../ui/form-elements/PhoneInputFormField';

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

  useInterval(3000, () => console.log(errors), []);

  const handleCtaClick = () => {
    // Check if the form is valid.
    const { isValid } = methods.formState;
    if (!isValid) {
      alert(t('notValidCallMeNowForm'));
    }
    if (isValid) {
      // TODO: Make something with this.

      // After that logic, close the modal.
      setIsOpen(false);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log('Form submitted', data);
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
                  onClick={handleCtaClick}
                  className="relative rounded-l-none rounded-r-xl border-0"
                  text={t('submit_cta_text')}
                  type="submit"
                />
              </div>
              <div className="flex flex-row">
                <AcceptTermsFormField />
              </div>
              <div className="flex flex-row">
                {/* {Object.keys(errors).length > 0 && (
                  <div className="flex flex-row font-medium text-red-500">
                    {(errors as any).phone?.message?.toString()}
                  </div>
                )} */}
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
