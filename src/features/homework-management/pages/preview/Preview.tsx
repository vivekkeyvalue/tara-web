import Head from '@layouts/head/Head';
import { BottomBar, PageTitle } from '@components';
import QuestionCard from '@features/homework-management/components/question-card/QuestionCard';

// eslint-disable-next-line arrow-body-style
const Preview = () => {
  return (
    <>
      <Head title="Preview" />
      <PageTitle title="Preview" />
      <div className="mb-6 mt-12 flex justify-start gap-2">
        <div className="text-xl font-bold">10 Questions</div>
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
