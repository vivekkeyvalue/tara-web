export interface TabPill {
  id: number;
  label: string;
}

export interface TabProps {
  tabs: TabPill[];
  onTabSelect?: (tab: TabPill) => void;
  selectedTab?: TabPill;
  className?: string;
}
