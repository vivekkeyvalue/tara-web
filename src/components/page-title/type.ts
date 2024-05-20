export interface PageTitleProps {
  title: string;
  description?: string;
  primaryButtonLabel?: string;
  primaryButtonIcon?: string;
  secondaryButtonIcon?: string;
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
  secondaryButtonLabel?: string;
  primaryButtonIconStyle?: string;
  primaryButtonStroke?: string;
  secondaryButtonIconStyle?: string;
  secondaryButtonStroke?: string;
  className?: string;
  isPrimaryButtonDisabled?: boolean;
  isPrimaryButtonLoading?: boolean;
}
