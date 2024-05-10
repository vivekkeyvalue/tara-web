import { Stepper } from '@components';
import steps from '@features/homework-management/constants';

const CreateHomeWork = () => (
  <div>
    <Stepper steps={steps} activeStep={0} />
  </div>
);

export default CreateHomeWork;
