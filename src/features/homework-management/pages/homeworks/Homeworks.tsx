import { useState } from 'react';

import { TabPill } from '@types';
import Head from '@layouts/head/Head';
import { PageTitle, Tabs } from '@components';
import { homeworkTabs } from '@features/homework-management/constants';
import InfoCard from '@features/homework-management/components/info-card/InfoCard';
import HomeworkCard from '@features/homework-management/components/homework-card/HomeworkCard';

import theme from '../../../../../themes/colors';

const CreateHomeWork = () => {
  const [selectedTab, setSelectedTab] = useState<TabPill>(homeworkTabs[0]);

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
        <InfoCard
          label="Total Homeworks"
          value="10"
          iconName="total-homework"
        />
        <InfoCard
          label="Students Completed"
          value="13"
          iconName="completed-students"
        />
        <InfoCard label="Classes" value="3" iconName="class" />
      </div>
      <div className="w-fit">
        <Tabs
          tabs={homeworkTabs}
          selectedTab={selectedTab}
          onTabSelect={onSelectTab}
        />
      </div>
      <div className="mt-6 flex flex-wrap gap-4">
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
