import { useState } from 'react';

import { TabPill } from '@types';
import Head from '@layouts/head/Head';
import { Dropdown, PageTitle, Tabs } from '@components';
import {
  dummySubjectOptions,
  homeworkFilterOptions,
  homeworkTabs,
  infoCardOptions
} from '@features/homework-management/constants';
import InfoCard from '@features/homework-management/components/info-card/InfoCard';
import HomeworkCard from '@features/homework-management/components/homework-card/HomeworkCard';

import theme from '../../../../../themes/colors';

const CreateHomeWork = () => {
  const [selectedTab, setSelectedTab] = useState<TabPill>(homeworkTabs[0]);
  const [selectedFilter, setSelectedFilter] = useState<any>({
    subject: '',
    level: '',
    topic: '',
    skill: ''
  });

  const onSelectFilter = (filter: string, value: string) => {
    setSelectedFilter((prevFilter: any) => ({
      ...prevFilter,
      [filter]: value
    }));
  };

  const handleCreateHomework = () => {};

  const onSelectTab = (tab: TabPill) => {
    setSelectedTab(tab);
  };
  return (
    <>
      <Head title="Homeworks" />
      <PageTitle
        title="Homeworks"
        description="Create and manage your homeworks!"
        primaryButtonLabel="Create Homework"
        onPrimaryButtonClick={handleCreateHomework}
        primaryButtonIcon="plus"
        primaryButtonIconStyle="h-3.5 w-3.5"
        primaryButtonStroke={theme.theme}
      />
      <div className="mb-6 mt-16 flex flex-wrap gap-6">
        {infoCardOptions.map((info) => (
          <InfoCard
            key={info.id}
            label={info.label}
            iconName={info.iconName}
            value={info.value}
          />
        ))}
      </div>
      <div className="flex items-center justify-between">
        <div className="w-fit">
          <Tabs
            tabs={homeworkTabs}
            selectedTab={selectedTab}
            onTabSelect={onSelectTab}
          />
        </div>
        <div className="flex items-center justify-center gap-2">
          {homeworkFilterOptions.map((item) => (
            <Dropdown
              currentFilter={selectedFilter[item.value] || ''}
              filterOptions={dummySubjectOptions}
              onSelectFilter={(value) => onSelectFilter(item.value, value)}
              className="w-150"
              optionsStyle="w-full"
              placeholder={item.label}
            />
          ))}
        </div>
      </div>

      {/* TODO: to be removed */}
      <div className="mt-6 flex flex-wrap gap-6">
        <HomeworkCard />
        <HomeworkCard />
        <HomeworkCard />
        <HomeworkCard />
        <HomeworkCard />
        <HomeworkCard />
        <HomeworkCard />
        <HomeworkCard />
        <HomeworkCard />
        <HomeworkCard />
        <HomeworkCard />
        <HomeworkCard />
      </div>
    </>
  );
};

export default CreateHomeWork;
