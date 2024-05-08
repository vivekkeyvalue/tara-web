import { ComponentPropsWithRef } from 'react';

export type InputSize = 'small' | 'medium' | 'big';

export interface InputProps extends ComponentPropsWithRef<'input'> {
  label?: string;
  error?: boolean;
  errorMessage?: string;
  className?: string;
  name?: string;
  inputStyle?: string;
  placeholder?: string;
  value?: string | number;
  disabled?: boolean;
  errorStyle?: string;
  leftIconName?: string;
  labelRequired?: boolean;
  inputSize?: InputSize;
  inputRegex?: RegExp;
  handleInputChange?: (value: string) => void;
  isLoading?: boolean;
  onClearIconAction?: () => void;
  handleInputBlur?: (value: string) => void;
}

export interface AmountInputProps extends ComponentPropsWithRef<'input'> {
  className?: string;
  name?: string;
  placeholder?: string;
  value?: string | number;
  disabled?: boolean;
  inputSize?: InputSize;
  type?: string;
  inputClassNames?: string;
  onAmountChange: (value: string) => void;
  error?: boolean;
  errorMessage?: string;
  errorStyle?: string;
}
