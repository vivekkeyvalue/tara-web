interface SpinnerProps {
  className?: string;
}

const spinnerStyles =
  'animate-spin m-auto rounded-full border-4 border-grey40 border-t-primary';

const Spinner = ({ className }: SpinnerProps) => (
  <div className={`size-12 ${spinnerStyles} ${className || ''}`} />
);

export default Spinner;
