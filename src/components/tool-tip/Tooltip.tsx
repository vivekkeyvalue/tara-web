import Icon from '@components/icon/Icon';
import clsx from 'clsx';
import './style.scss';

interface TooltipProps {
  text: string;
  className?: string;
  position?: TooltipPosition;
}

export type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';

export const Tooltip = ({
  text,
  className,
  position = 'top',
  ...props
}: TooltipProps) => {
  const tooltipStyles = clsx({
    tooltip: position === 'top',
    'tooltip-right': position === 'right',
    'tooltip-bottom': position === 'bottom'
  });

  return (
    <div
      className={clsx(
        'text-caption absolute z-50 hidden w-max group-hover/tooltip:block',
        className,
        tooltipStyles
      )}
      {...props}
    >
      {text}
    </div>
  );
};

interface TooltipIconProps {
  text: string;
  className?: string;
  iconName?: string;
  iconColor?: string;
  position?: TooltipPosition;
  tooltipStyle?: string;
}

export const TooltipIcon = ({
  text,
  className = '',
  iconName = 'info',
  iconColor,
  position,
  tooltipStyle = '',
  ...props
}: TooltipIconProps) => (
  <div className={clsx(tooltipStyle, 'group/tooltip relative')} {...props}>
    <Icon name={iconName} size="large" stroke={iconColor} />
    {text && <Tooltip text={text} className={className} position={position} />}
  </div>
);
