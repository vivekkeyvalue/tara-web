import { useState } from 'react';

import { Button, Dropdown } from '@components';
import { dummySubjectOptions } from '@features/homework-management/constants';

interface CreateNewHomeworkProps {
  onClose: () => void;
  onPreviewClick: () => void;
}
// TODO: props needs to be added
const CreateNewHomework = ({
  onClose,
  onPreviewClick
}: CreateNewHomeworkProps) => {
  const [selectedSubject, seSelectedSubject] = useState<string>('');
  const [selectedTopic, setSelectedTopic] = useState<string>('');

  const onSubjectChange = (value: string) => {
    seSelectedSubject(value);
  };

  const onTopicChange = (value: string) => {
    setSelectedTopic(value);
  };

  const getLabel = (label: string) => (
    <div className="mb-2 text-sm font-bold">{label}</div>
  );

  const isButtonDisabled = !selectedSubject || !selectedTopic;

  return (
    <div className="min-w-500 rounded-3xl bg-primaryLite p-5">
      <div className="text-2xl font-bold">Create New Homework</div>
      <div className="my-4 rounded-3xl bg-theme p-10">
        {getLabel('Subject and Level')}
        <Dropdown
          currentFilter={selectedSubject}
          filterOptions={dummySubjectOptions}
          onSelectFilter={onSubjectChange}
          className="w-full"
          optionsStyle="w-full"
          placeholder="Choose subject and level"
        />
        <div className="mt-4">
          {getLabel('Topic and Skill')}
          <Dropdown
            currentFilter={selectedTopic}
            filterOptions={dummySubjectOptions}
            onSelectFilter={onTopicChange}
            className="w-full"
            optionsStyle="w-full"
            placeholder="Choose topic and skill"
          />
        </div>
      </div>
      <div className="flex items-center justify-end gap-2">
        <Button variant="secondary" label="Cancel" handleClick={onClose} />
        <Button
          variant="primary"
          label="Preview"
          disabled={isButtonDisabled}
          handleClick={onPreviewClick}
        />
      </div>
    </div>
  );
};

export default CreateNewHomework;
