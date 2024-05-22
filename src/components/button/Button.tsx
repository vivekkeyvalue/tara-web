import { useEffect } from 'react';

import clsx from 'clsx';

import Icon, { IconSize } from '@components/icon/Icon';
import {
  ButtonLabelProps,
  ButtonProps,
  ButtonVariant,
  IconButtonSize
} from '@types';

import Spinner from '../spinner/Spinner';
import theme from '../../../themes/colors';

const wrapperStyles = `flex items-center rounded-3xl justify-center text-body-semi disabled:cursor-not-allowed`;

const variantStyles = {
  primary: `bg-primary disabled:bg-primary disabled:opacity-50 hover:bg-primary60`,
  transparent: `bg-transparent`,
  secondary: `bg-primaryLite1 border-primary disabled:bg-white disabled:border-grey30 border hover:border-primary60 hover:bg-white`,
  tertiary:
    'bg-transparent border border-grey30 rounded-xl hover:border-primary'
};

const loadingStyles = {
  primary: `!bg-primary`,
  transparent: '',
  secondary: '!bg-primaryLite1 border-primary border',
  tertiary: ''
};

const labelStyles = {
  primary: {
    default: 'text-base text-theme font-normal',
    disabled: '!text-theme'
  },
  transparent: {
    default: 'text-base text-primary font-normal',
    disabled: ''
  },
  secondary: {
    default: 'text-sm text-primary font-normal',
    disabled: ''
  },
  tertiary: {
    default: 'text-sm text-content font-normal',
    disabled: ''
  }
};

const loadingLabelStyles = {
  primary: 'text-white text-body-semi invisible',
  transparent: 'invisible',
  secondary: 'invisible',
  tertiary: 'invisible'
};

const sizeStyles = {
  none: '',
  small: 'px-3 py-1.5 h-9',
  medium: 'px-4 py-2.5 h-11',
  large: 'p-4 h-11',
  full: 'w-full'
};

const iconSizeStyles = {
  none: 'hover:bg-primary p-0.5 ',
  small: 'hover:bg-primary p-1.5',
  medium: 'p-2.5',
  large: 'p-4',
  full: ''
};

export const ButtonLabel: React.FC<ButtonLabelProps> = ({
  variant = 'primary',
  label,
  className,
  loading,
  disabled
}) => (
  <span
    className={clsx(
      loading ? loadingLabelStyles[variant] : labelStyles[variant].default,
      className,
      disabled && labelStyles[variant].disabled,
      'truncate'
    )}
  >
    {label}
  </span>
);

const Button: React.FC<ButtonProps> = ({
  handleClick,
  variant = 'primary',
  size = 'medium',
  label = '',
  className,
  children,
  disabled,
  onHover,
  loading,
  leftIconName = '',
  rightIconName = '',
  leftIconStyle,
  leftIconStroke,
  rightIconStroke,
  rightIconStyle,
  rightIconFill,
  labelStyle,
  onEnterEnabled = false,
  ...props
}) => {
  const handleMouseEnter = () => onHover && onHover(true);
  const handleMouseLeave = () => onHover && onHover(false);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && !disabled && !loading && handleClick) {
        if (onEnterEnabled) handleClick(event);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleClick, disabled, loading, onEnterEnabled]);

  const getIconStrokeColor = (stroke: string) => {
    let strokeColor: string = stroke;
    if (disabled && variant === 'primary') strokeColor = theme.grey;
    else if (disabled && variant === 'secondary') strokeColor = theme.grey;
    return strokeColor;
  };

  return (
    <button
      className={clsx(
        loading ? `relative ${loadingStyles[variant]}` : variantStyles[variant],
        sizeStyles[size],
        className,
        wrapperStyles
      )}
      onClick={handleClick}
      type="button"
      disabled={disabled || loading}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {!!leftIconName && (
        <Icon
          name={leftIconName}
          stroke={getIconStrokeColor(leftIconStroke || '')}
          size="medium"
          className={`mr-2 ${leftIconStyle || ''}`}
        />
      )}
      {label && (
        <ButtonLabel
          variant={variant}
          label={label}
          disabled={disabled}
          loading={loading}
          className={labelStyle || ''}
        />
      )}
      {!!rightIconName && (
        <Icon
          name={rightIconName}
          stroke={getIconStrokeColor(rightIconStroke || '')}
          fill={rightIconFill}
          size="medium"
          className={clsx('ml-2 transition-all duration-200', rightIconStyle)}
        />
      )}
      {loading && (
        <div className="absolute text-center text-theme">
          <Spinner className="size-6 border border-theme" />
        </div>
      )}
      {children}
    </button>
  );
};
export default Button;

interface IconButtonProps extends ButtonProps {
  variant?: ButtonVariant;
  iconName: string;
  toolTipText?: string;
  stroke?: string;
  buttonSize?: IconButtonSize;
  iconSize?: IconSize;
  fill?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  variant = 'primary',
  stroke = '',
  buttonSize = 'large',
  iconSize = 'medium',
  fill,
  ...props
}) => (
  <Button
    variant={variant}
    className={iconSizeStyles[buttonSize]}
    size={buttonSize}
    {...props}
  >
    <Icon name={iconName} size={iconSize} stroke={stroke} fill={fill} />
  </Button>
);
