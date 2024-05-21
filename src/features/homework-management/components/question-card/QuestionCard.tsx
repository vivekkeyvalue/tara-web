// TODO: props needs to be added
const QuestionCard = () => (
  <div className="rounded-3xl bg-theme p-6">
    <div className="text-lg font-bold">Question 1</div>
    <div className="flex items-center justify-start gap-2">
      <div>MCQ</div>
      <div>AO1</div>
      <div>Time and Duration</div>
    </div>
    <div className="my-3 text-sm font-normal">
      Sarah started her homework at 4:15 PM and finished at 5:45 PM. How long
      did she spend on her homework?
    </div>
    <div className="flex items-center justify-start gap-2">
      <div>Details</div>
      <div>Replace</div>
      <div>Change</div>
    </div>
  </div>
);

export default QuestionCard;
