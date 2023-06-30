import clsx from 'clsx';

import Icon, { IconSize } from '@components/icon/Icon';
import Spinner from '@components/spinner/Spinner';
import { Tooltip } from '@components/tool-tip/Tooltip';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'transparent'
  | 'icon';

export type ButtonSize = 'none' | 'small' | 'medium' | 'full';

const wrapperStyles = `flex items-center justify-center text-body-semi disabled:cursor-not-allowed`;

const variantStyles = {
  primary: `bg-primary rounded-10px hover:enabled:bg-primary90 disabled:bg-primary50`,
  secondary: `bg-primary10 rounded-10px hover:enabled:bg-primary30 disabled:bg-primary10`,
  outline: `bg-white border border-background20 rounded-10px hover:enabled:bg-background10`,
  transparent: `bg-transparent`,
  icon: `bg-transparent hover:bg-primary10 rounded-full p-1`
};

const labelStyles = {
  primary: 'text-sm text-white',
  secondary: 'text-sm text-primary',
  outline: 'text-sm text-black',
  transparent: 'text-sm text-primary',
  icon: ''
};

const sizeStyles = {
  none: '',
  small: 'px-4 h-10',
  medium: 'px-4 h-12',
  full: 'w-full h-10'
};

export interface ButtonProps {
  handleClick: (event: any) => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  label?: string;
  className?: string;
  children?: any;
  disabled?: boolean;
  onHover?: (isHovered: boolean) => void;
  loading?: boolean;
}

export interface ButtonLabelProps {
  variant?: ButtonVariant;
  label?: string;
  className?: string;
}

export const ButtonLabel: React.FC<ButtonLabelProps> = ({
  variant = 'primary',
  label,
  className
}) => (
  <span className={clsx('font-medium', labelStyles[variant], className)}>
    {label}
  </span>
);

const Button: React.FC<ButtonProps> = ({
  handleClick,
  variant = 'primary',
  size = 'small',
  label = '',
  className,
  children,
  disabled,
  onHover,
  loading,
  ...props
}) => {
  // size will be none always if it's an icon button
  const buttonSize = variant === 'icon' ? 'none' : size;

  return (
    <button
      className={clsx(
        loading && 'relative',
        variantStyles[variant],
        sizeStyles[buttonSize],
        className,
        wrapperStyles,
        disabled ? 'opacity-50' : ''
      )}
      onClick={handleClick}
      type="button"
      disabled={disabled || loading}
      onMouseEnter={() => onHover && onHover(true)}
      onMouseLeave={() => onHover && onHover(false)}
      {...props}
    >
      {loading && (
        <div className="absolute">
          <Spinner />
        </div>
      )}
      {label && <ButtonLabel variant={variant} label={label} />}
      {children}
    </button>
  );
};

export default Button;

interface IconButtonProps extends ButtonProps {
  iconName: string;
  toolTipText?: string;
  stroke?: string;
  iconSize?: IconSize;
}

export const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  toolTipText = '',
  stroke = '',
  iconSize = 'large',
  ...props
}) => (
  <Button variant="icon" {...props}>
    <div className="group/tooltip">
      <Icon name={iconName} stroke={stroke} size={iconSize} />
      {toolTipText && !props.disabled && <Tooltip text={toolTipText} />}
    </div>
  </Button>
);
