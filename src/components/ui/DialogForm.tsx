import * as Hui from '@headlessui/react';
import {
  type Dispatch,
  Fragment,
  type ReactNode,
  type SetStateAction,
} from 'react';

import StyledButton from './buttons/StyledButton';

export default function DialogForm({
  form,
  triggerButtonText,
  dialogTitle,
  description,
  isOpen,
  setIsOpen,
}: {
  form: ReactNode;
  triggerButtonText: string;
  dialogTitle: string;
  description: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      {/* DIALOG's entry point */}
      <StyledButton
        color="accent"
        variant="outlined"
        text={triggerButtonText}
        onClick={openModal}
      />

      {/* DIALOG */}
      <Hui.Transition appear show={isOpen} as={Fragment}>
        <Hui.Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            {/* --- Backdrop --- */}
            <Hui.Dialog.Overlay className="fixed inset-0 z-10 bg-black opacity-50 blur-lg" />
            <span
              className="z-10 inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &nbsp;
            </span>

            <Hui.Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="relative z-20 my-8 inline-block w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Hui.Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {dialogTitle}
                </Hui.Dialog.Title>

                <p className="mb-5 mt-2 text-sm text-gray-700 opacity-90">
                  {description}
                </p>

                <div className="button-group flex flex-row">{form}</div>
              </div>
            </Hui.Transition.Child>
          </div>
        </Hui.Dialog>
      </Hui.Transition>
    </>
  );
}
