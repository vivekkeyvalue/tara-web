import { ProgressBar } from '@components';

import HomeworkLabel from '../homework-label/HomeworkLabel';

import theme from '../../../../../themes/colors';

const HomeworkCard = () => (
  <div className="cursor-pointer rounded-lg bg-theme  p-6 shadow-sm transition-transform duration-300 ease-in-out hover:scale-105 md:w-[calc(33%-8px)] lg:w-[calc(25%-12px)]">
    <div className="mb-2 flex items-center justify-between">
      <div className="rounded-lg bg-primaryLite p-2 text-sm font-normal">
        Maths
      </div>
      <HomeworkLabel label="finished" />
    </div>
    <div className="text-lg font-bold">Addition and Substraction</div>
    <div className="border-greyLite my-3 w-fit rounded-xl border px-2 py-1">
      3A
    </div>
    <div className="text-grey10 flex justify-between text-sm font-normal">
      <div>18 Submitted</div>
      <div>4 Pending</div>
    </div>
    <ProgressBar
      height={10}
      bgColor={theme.primaryLite}
      progressBarcolor={theme.primary}
      progress={50}
    />
  </div>
);

export default HomeworkCard;