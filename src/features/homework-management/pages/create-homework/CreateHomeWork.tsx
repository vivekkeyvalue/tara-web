/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';

import { Stepper } from '@components';
import steps from '@features/homework-management/constants';
import HomeWorkSettings from '@features/homework-management/components/homework-settings/HomeworkSettings';

const CreateHomeWork = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <div className="size-full">
      <div className="mb-6 w-full rounded-lg bg-theme p-6">
        <Stepper steps={steps} activeStep={activeStep} />
      </div>
      <HomeWorkSettings />
    </div>
  );
};

export default CreateHomeWork;
