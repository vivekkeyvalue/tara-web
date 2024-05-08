export type ButtonVariant = 'primary' | 'transparent' | 'secondary';

export type IconButtonSize = 'none' | 'small' | 'medium' | 'large';

export type ButtonSize = 'none' | 'small' | 'medium' | 'large' | 'full';

export interface ButtonProps {
  handleClick?: (event: any) => void;
  variant?: ButtonVariant;
  size?: ButtonSize | IconButtonSize;
  label?: string;
  className?: string;
  children?: any;
  disabled?: boolean;
  onHover?: (isHovered: boolean) => void;
  loading?: boolean;
  leftIconName?: string;
  rightIconName?: string;
  leftIconStyle?: string;
  leftIconStroke?: string;
  rightIconStroke?: string;
  rightIconStyle?: string;
  labelStyle?: string;
  onEnterEnabled?: boolean;
  rightIconFill?: string;
}

export interface ButtonLabelProps {
  variant?: ButtonVariant;
  label?: string;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

export type RadioButtonOrientation = 'horizontal' | 'vertical';

export interface Option {
  key: string;
  value: string;
}

export interface RadioButtonProps {
  isSelected: boolean;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  labelStyle?: string;
}

export interface RadioGroupProps {
  options: Array<Option>;
  selectedValue?: string;
  handleChange: (type: string) => void;
  disabled?: boolean;
  labelStyle?: string;
  orientation?: RadioButtonOrientation;
  className?: string;
}
