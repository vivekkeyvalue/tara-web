import { useRef, useState } from 'react';
import { Skeleton } from '@mui/material';

import { DropdownProps, DropdownOption } from 'types';
import useOnClickOutside from '@utils/hooks';

import Button from '../button/Button';

const Dropdown = (props: DropdownProps) => {
  const {
    filterByLabel,
    currentFilter,
    filterOptions,
    onSelectFilter,
    className,
    optionsStyle,
    labelStyle,
    isLoading,
    placeholder,
    placeholderStyle
  } = props;
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const ref = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((isOpen) => !isOpen);
  };

  const onClickFilter = (option: DropdownOption) => {
    if (option.value !== currentFilter && !option.isDisabled) {
      onSelectFilter(option.value);
      toggleDropdown();
    }
  };

  const selectedFilter: DropdownOption | undefined = filterOptions?.find(
    (option) => option.value === currentFilter
  );

  useOnClickOutside(ref, (e) => {
    e.stopPropagation();
    setIsDropdownOpen(false);
  });

  if (isLoading)
    return (
      <div className="w-full">
        <Skeleton
          height={53}
          key={Math.random()}
          animation="wave"
          variant="rounded"
        />
      </div>
    );

  return (
    <div className={`relative ${className || ''}`} ref={ref}>
      <div className="flex items-center gap-2">
        {filterByLabel && (
          <span className="text-base font-medium text-grey">
            {filterByLabel}
          </span>
        )}
        <Button
          variant="tertiary"
          handleClick={toggleDropdown}
          size="medium"
          label={selectedFilter?.label || placeholder}
          rightIconName="down-icon-dark"
          className={`min-w-166 justify-between ${className}`}
          labelStyle={
            placeholder && !selectedFilter?.label
              ? `text-sm text-grey40 ${placeholderStyle}`
              : `!font-normal ${labelStyle || ''}`
          }
          rightIconStyle={isDropdownOpen ? 'rotate-180' : ''}
        />
      </div>
      {isDropdownOpen && (
        <div
          className={`w-220 absolute right-0 z-10 mt-1 rounded-lg border border-grey40 bg-theme px-3 py-1 shadow-sm ${
            optionsStyle || 'right-0'
          }`}
        >
          {filterOptions?.map((option) => (
            <div
              key={option?.id}
              className={`flex  items-center justify-between border-b border-b-grey40 py-2 pr-4 text-sm last:border-b-0 ${
                option.isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'
              }`}
              role="presentation"
              onClick={() => onClickFilter(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
