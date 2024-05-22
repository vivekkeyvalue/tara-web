import Button from '../button/Button';

interface BottomBarProps {
  primaryButtonLabel: string;
  secondaryButtonLabel: string;
  handleSecondaryButtonClick: () => void;
  handlePrimaryButtonClick: () => void;
}

const BottomBar = ({
  primaryButtonLabel,
  secondaryButtonLabel,
  handleSecondaryButtonClick,
  handlePrimaryButtonClick
}: BottomBarProps) => (
  <div className="fixed bottom-0 left-0 flex h-[65px] w-full items-center justify-between bg-theme pl-120 pr-10 shadow-lg">
    <Button
      variant="tertiary"
      label={secondaryButtonLabel}
      handleClick={handleSecondaryButtonClick}
    />
    <Button
      label={primaryButtonLabel}
      handleClick={handlePrimaryButtonClick}
      variant="primary"
    />
  </div>
);

export default BottomBar;
