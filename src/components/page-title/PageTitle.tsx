import Button from '../button/Button';

import { PageTitleProps } from './type';

const PageTitle = (props: PageTitleProps) => {
  const {
    title,
    description,
    primaryButtonLabel,
    primaryButtonIcon,
    onPrimaryButtonClick,
    onSecondaryButtonClick,
    secondaryButtonLabel,
    primaryButtonIconStyle,
    primaryButtonStroke,
    className,
    isPrimaryButtonDisabled,
    isPrimaryButtonLoading,
    secondaryButtonIcon,
    secondaryButtonIconStyle,
    secondaryButtonStroke
  } = props;
  return (
    <div className={`flex items-center justify-between ${className || ''}`}>
      <div>
        <h1 className="text-2xl font-bold text-content">{title}</h1>
        <div className="mt-2 text-sm font-normal text-grey10">
          {description}
        </div>
      </div>
      <div className="flex items-center gap-4">
        {secondaryButtonLabel && (
          <Button
            label={secondaryButtonLabel}
            handleClick={onSecondaryButtonClick}
            variant="secondary"
            size="medium"
            rightIconName={secondaryButtonIcon}
            rightIconStyle={secondaryButtonIconStyle}
            rightIconStroke={secondaryButtonStroke || ''}
          />
        )}
        {primaryButtonLabel && (
          <Button
            label={primaryButtonLabel}
            handleClick={onPrimaryButtonClick}
            variant="primary"
            size="medium"
            rightIconName={primaryButtonIcon}
            rightIconStyle={primaryButtonIconStyle}
            rightIconStroke={primaryButtonStroke || ''}
            disabled={isPrimaryButtonDisabled || false}
            loading={isPrimaryButtonLoading || false}
          />
        )}
      </div>
    </div>
  );
};

export default PageTitle;
