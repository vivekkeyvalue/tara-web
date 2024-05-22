import { ProgressBar } from '@components';

import HomeworkLabel from '../homework-label/HomeworkLabel';

import theme from '../../../../../themes/colors';

// props needs to be added
const HomeworkCard = () => (
  <div className="cursor-pointer rounded-lg bg-theme  p-6 shadow-sm transition-transform duration-300 ease-in-out hover:scale-105 md:w-[calc(33%-14px)] lg:w-[calc(25%-18px)]">
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
    <div className="flex justify-between text-sm font-normal text-grey10">
      <div>18 Submitted</div>
      <div>2 Pending</div>
    </div>
    <ProgressBar
      height={10}
      bgColor={theme.primaryLite}
      progressBarcolor={theme.primary}
      progress={90}
      progressBarStyle="!bg-gradient-to-r from-primary10 to-primary"
    />
  </div>
);

export default HomeworkCard;
