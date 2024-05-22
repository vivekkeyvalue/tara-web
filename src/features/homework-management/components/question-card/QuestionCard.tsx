import { Button } from '@components';

// TODO: props needs to be added
const QuestionCard = () => (
  <div className="rounded-3xl bg-theme p-6">
    <div className="text-lg font-bold">Question 1</div>
    <div className="my-3 flex items-center justify-start gap-2 text-sm font-normal text-theme">
      <div className="rounded-xl bg-green px-2 py-1">MCQ</div>
      <div className="bg-pink rounded-xl px-2 py-1">AO1</div>
      <div className="bg-blue rounded-xl px-2 py-1">Time and Duration</div>
    </div>
    <div className="mb-3 text-sm font-normal">
      Sarah started her homework at 4:15 PM and finished at 5:45 PM. How long
      did she spend on her homework?
    </div>
    <div className="flex flex-wrap items-center justify-start gap-2">
      <Button
        label="Details"
        variant="tertiary"
        size="small"
        rightIconName="right-arrow"
      />
      <Button
        label="Replace"
        variant="tertiary"
        size="small"
        rightIconName="replace"
      />
      <Button
        label="Change"
        variant="tertiary"
        size="small"
        rightIconName="change"
      />
    </div>
  </div>
);

export default QuestionCard;
