import { Icon } from '@components';

interface InfoCardProps {
  label: string;
  value: string;
  iconName: string;
}

const InfoCard = ({ label, value, iconName }: InfoCardProps) => (
  <div className="flex min-w-350 justify-between rounded-lg bg-theme p-6 transition-transform duration-300 ease-in-out hover:scale-105 ">
    <div>
      <div className="text-grey10 text-base font-normal">{label}</div>
      <div className="mt-1 text-4xl font-semibold text-content">{value}</div>
    </div>
    <Icon name={iconName} size="none" />
  </div>
);

export default InfoCard;
