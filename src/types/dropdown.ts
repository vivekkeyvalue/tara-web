export interface DropdownOption {
  id: number | string;
  label: string;
  value: string;
  isDisabled?: boolean;
}

export interface DropdownProps {
  filterByLabel?: string;
  currentFilter: string;
  filterOptions: Array<DropdownOption>;
  onSelectFilter: (optionValue: string) => void;
  className?: string;
  optionsStyle?: string;
  labelStyle?: string;
  isLoading?: boolean;
  placeholder?: string;
}

export interface MultiSelectDropdownProps {
  label: string;
  searchBarPlaceholder: string;
  options: DropdownOption[];
  selectedOptions: DropdownOption[];
  onChange: (selectedItems: DropdownOption[]) => void;
  displayChipsCount?: number;
  className?: string;
  plusMoreClickRequired?: boolean;
  isLoading?: boolean;
}
