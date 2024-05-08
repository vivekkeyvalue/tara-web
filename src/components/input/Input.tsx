import clsx from 'clsx';
import { Skeleton } from '@mui/material';

import { InputProps } from 'types/input';
import { sanitizeNumberInput, validateWithRegexp } from '@utils/generic';
import Icon from '../icon/Icon';
import { inputStyles, labelStyles, sizeStyle } from './input.config';

const FloatingInput = (props: InputProps) => {
  const {
    label,
    error = false,
    errorMessage = '',
    className = '',
    inputStyle = '',
    type,
    name,
    placeholder = '',
    value,
    disabled,
    errorStyle = '',
    leftIconName,
    labelRequired = false,
    inputSize = 'medium',
    inputRegex,
    handleInputChange,
    isLoading = false,
    onClearIconAction,
    handleInputBlur,
    ...rest
  } = props;
  const inputClassNames = clsx(
    inputStyles.common,
    error ? inputStyles.error : inputStyles.common,
    leftIconName && 'pl-9'
  );

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (rest.onChange) {
      rest.onChange(e);
    } else if (handleInputChange) {
      let inputValue = e.target.value;
      inputValue =
        type === 'number' || type === 'phone'
          ? sanitizeNumberInput(inputValue)
          : inputValue;
      if (type === 'phone' && inputValue !== '') {
        if (validateWithRegexp(/^[6789]/, inputValue[0])) {
          if (validateWithRegexp(inputRegex, inputValue))
            handleInputChange(inputValue);
          else handleInputChange(inputValue);
        }
      } else if (inputValue !== '' && inputRegex) {
        if (validateWithRegexp(inputRegex, inputValue))
          handleInputChange(inputValue);
      } else handleInputChange(inputValue);
    }
  };

  const onInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (handleInputBlur) {
      const inputValue = e.target.value.trim();
      handleInputBlur(inputValue);
    }
  };

  if (isLoading)
    return (
      <div className="w-full">
        <Skeleton
          height={53}
          key={Math.random()}
          animation="wave"
          variant="rounded"
        />
      </div>
    );

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        {!!leftIconName && (
          <span className="absolute top-1/2 ml-2.5 -translate-y-1/2">
            <Icon name={leftIconName} />
          </span>
        )}
        <input
          id={name}
          name={name}
          type={type === 'number' ? 'text' : type}
          className={clsx(
            inputClassNames,
            inputStyle,
            sizeStyle[inputSize],
            'no-spinners pl-3'
          )}
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          {...rest}
          onChange={onInputChange}
          onBlur={onInputBlur}
        />
        {onClearIconAction && value && (
          <div
            role="presentation"
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={onClearIconAction}
          >
            <Icon name="close" />
          </div>
        )}
        {labelRequired ? (
          <label className={labelStyles.common} htmlFor={name}>
            {label}
          </label>
        ) : null}
      </div>
      {error && errorMessage && (
        <div
          className={clsx(
            'absolute -bottom-5 mt-2 flex items-center text-xs text-error',
            errorStyle
          )}
        >
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default FloatingInput;
