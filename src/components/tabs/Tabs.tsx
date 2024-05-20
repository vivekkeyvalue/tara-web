import { TabProps } from '@types';

const Tabs = ({ tabs, onTabSelect, selectedTab, className }: TabProps) => (
  <div className={`border-grey40 flex border-b-2 ${className || ''}`}>
    {tabs?.map((tab) => (
      <div
        role="presentation"
        className="min-w-180 flex cursor-pointer flex-col"
        key={tab.id}
        onClick={() => {
          onTabSelect?.(tab);
        }}
      >
        <div
          className={`table-cell truncate px-4 py-1 text-center text-sm font-normal ${
            selectedTab?.id === tab.id ? 'text-primary' : 'text-grey10'
          }`}
          key={tab.id}
        >
          {tab.label}
        </div>
        <div
          className={`relative top-0.5 border-b-4 border-primary ${
            selectedTab?.id !== tab.id && 'invisible'
          }`}
        />
      </div>
    ))}
  </div>
);

export default Tabs;
