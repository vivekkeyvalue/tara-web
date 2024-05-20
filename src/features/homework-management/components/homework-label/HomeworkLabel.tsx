import { HomeworkLabelProps } from 'types';

const labelStyle = {
  yet_to_start: 'bg-grey text-theme',
  in_progress: 'bg-yellow text-theme',
  finished: 'bg-green text-theme'
};

const sizeStyle = {
  small: 'rounded-3xl p-2',
  large: 'rounded-xl px-4 py-2'
};

// TODO: subjective to changes
const value = {
  yet_to_start: 'Yet to Start',
  in_progress: 'In Progress',
  finished: 'Completed'
};

const HomeworkLabel = ({
  size = 'small',
  label,
  className
}: HomeworkLabelProps) => (
  <div
    className={`${labelStyle[label]} w-fit  text-xs font-normal ${sizeStyle[size]} ${className}`}
  >
    {value[label]}
  </div>
);

export default HomeworkLabel;
