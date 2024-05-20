export type LabelVarient = 'yet_to_start' | 'in_progress' | 'finished';
export type LabelSize = 'small' | 'large';

export interface HomeworkLabelProps {
  size?: LabelSize;
  label: LabelVarient;
  className?: string;
}
