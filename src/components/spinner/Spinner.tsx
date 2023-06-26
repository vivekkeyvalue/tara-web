import clsx from 'clsx';

interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const sizeStyles = {
  small: 'w-6 h-6',
  medium: 'w-12 h-12',
  large: 'w-20 h-20'
};
const spinnerStyles =
  'animate-spin m-auto rounded-full border-4 border-background10 border-t-primary';

const Spinner = ({ size = 'small', className }: SpinnerProps) => (
  <div className={clsx(sizeStyles[size], spinnerStyles, className)} />
);

export default Spinner;
