import { forwardRef, ComponentPropsWithRef, useState } from 'react';
import clsx from 'clsx';

import Button from '../button/Button';
import Icon from '../icon/Icon';

import { ReactComponent as HidePasswordIcon } from './assets/hide-password.svg';
import { ReactComponent as ShowPasswordIcon } from './assets/show-password.svg';

interface InputProps extends ComponentPropsWithRef<'input'> {
  label?: string;
  error?: boolean;
  errorMessage?: string;
  className?: string;
  name?: string;
  inputDataStyle?: string;
  placeholder?: string;
  autocomplete?: string;
  value?: string | number;
  disabled?: boolean;
  errorStyle?: string;
}

const inputStyles = {
  common:
    'peer w-full rounded-10px border p-2.5 text-body focus:outline-none focus:ring-0 disabled:border-background30 disabled:bg-background5',
  default:
    'border-background30 focus:border-primary hover:enabled:border-background90',
  error: '!border-error'
};

const labelStyles = {
  common:
    'absolute cursor-text top-[6px] left-1 z-10 -translate-y-4 bg-white px-2 text-body duration-300 peer-focus:top-[6px] peer-focus:-translate-y-4 peer-focus:px-2 peer-focus:text-sm disabled:text-background30',
  default: 'text-background50 peer-focus:text-primary',
  error: 'text-error peer-focus:text-error',
  disabled: 'bg-gradient-to-t from-[#F4F5F5_50%] to-[#ffffff_50%]'
};

const FloatingInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label,
    error = false,
    errorMessage = '',
    className = '',
    inputDataStyle = '',
    type,
    name,
    placeholder = '',
    autocomplete,
    value,
    disabled,
    errorStyle = '',
    ...rest
  } = props;

  // State to toggle show/hide password icon for input of type === 'password'
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const inputClassNames = clsx(
    inputStyles.common,
    error ? inputStyles.error : inputStyles.default,
    // Added below style to avoid overlapping with show/hide password icon
    type === 'password' ? 'pr-12' : ''
  );

  const labelClassNames = clsx(
    labelStyles.common,
    disabled && labelStyles.disabled,
    error ? labelStyles.error : labelStyles.default
  );

  // showPassword can be true only for input of type === 'password'
  const inputType = showPassword ? 'text' : type;

  const toggleShowPassword = () => setShowPassword((prev) => !prev);
  return (
    <div className={className}>
      <div className="relative">
        <input
          ref={ref}
          id={name}
          name={name}
          {...rest}
          type={inputType}
          className={clsx(inputClassNames, inputDataStyle)}
          placeholder={placeholder || label}
          autoComplete={autocomplete}
          value={value}
          disabled={disabled}
        />
        {value ? (
          <label className={labelClassNames} htmlFor={name}>
            {label}
          </label>
        ) : null}
        {type === 'password' ? (
          <Button
            variant="icon"
            size="none"
            handleClick={toggleShowPassword}
            className="absolute right-3 top-2"
          >
            <div className="flex h-5 w-5 items-center justify-center !border-none">
              {showPassword ? <HidePasswordIcon /> : <ShowPasswordIcon />}
            </div>
          </Button>
        ) : null}
      </div>
      {errorMessage && (
        <p
          className={clsx(
            'text-caption mt-2 flex items-center text-error',
            errorStyle
          )}
        >
          <Icon name="info-circle" className="mr-1" />
          {errorMessage}
        </p>
      )}
    </div>
  );
});

export default FloatingInput;
