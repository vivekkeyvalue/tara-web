import Head from '@layouts/head/Head';
import { BottomBar, Icon, PageTitle } from '@components';
import QuestionCard from '@features/homework-management/components/question-card/QuestionCard';

const Preview = () => {
  const renderChip = (label: string, value: string) => (
    <div className="rounded-xl border border-grey40 bg-theme px-2 py-1">{`${label}: ${value}`}</div>
  );

  const handleChange = () => {};

  return (
    <>
      <Head title="Preview" />
      <PageTitle title="Preview" />
      <div className="mb-6 mt-12 flex justify-start gap-3">
        <div className="text-xl font-bold">10 Questions</div>
        <div className="flex items-center justify-center gap-2">
          {renderChip('MCQ', '3')}
          {renderChip('SA', '5')}
          {renderChip('LA', '2')}
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="text-sm font-normal">Change</div>
          <Icon
            name="change"
            className="mb-1 cursor-pointer"
            onClick={handleChange}
          />
        </div>
      </div>
      <div className="flex w-full flex-wrap gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <div key={item} className="w-[calc(50%-12px)]">
            <QuestionCard key={item} />
          </div>
        ))}
      </div>
      <BottomBar
        handlePrimaryButtonClick={() => {}}
        handleSecondaryButtonClick={() => {}}
        primaryButtonLabel="Distribute"
        secondaryButtonLabel="Back"
      />
    </>
  );
};

export default Preview;
