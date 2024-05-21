import { MutableRefObject, ReactNode, useRef } from 'react';

import { Button, Icon } from '@components';

interface ModalProps {
  onCancel?: () => void;
  isOpen: boolean;
  className?: string;
  children: ReactNode;
  isCloseIconRequired?: boolean;
}

const Modal = ({
  onCancel,
  isOpen,
  className = '',
  children,
  isCloseIconRequired = false,
  ...props
}: ModalProps) => {
  const modalRef = useRef() as MutableRefObject<HTMLDivElement>;

  return (
    <div
      className={`fixed left-0 top-0 z-50 flex size-full items-center justify-center transition-opacity duration-300 ease-in-out ${
        isOpen ? 'opacity-100' : 'hidden opacity-0'
      }`}
      {...props}
    >
      {/* Modal Overlay */}
      <div className="absolute size-full bg-black/40 opacity-30" />

      {/* Modal Main Content */}
      <div
        className={`relative mx-auto rounded-3xl bg-primaryLite shadow-lg ${className}`}
        ref={modalRef}
      >
        {children}
        {isCloseIconRequired && (
          <Button
            variant="transparent"
            handleClick={onCancel}
            className="absolute right-0 top-4 mr-2"
          >
            <Icon name="close" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Modal;
