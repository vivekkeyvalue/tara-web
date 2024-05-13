/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable arrow-body-style */
interface Cardprops {
  value: string;
  isSelected: boolean;
  handleSelect: () => void;
}

const Card = ({ value, isSelected, handleSelect }: Cardprops) => {
  return (
    <div
      className={`w-fit cursor-pointer rounded-lg border-DEFAULT px-5 py-4 text-lg font-bold ${
        isSelected && 'border-primary bg-primaryLite text-primary'
      }`}
    >
      {value}
    </div>
  );
};

export default Card;
