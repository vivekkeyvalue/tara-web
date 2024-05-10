import { Box, Step, StepLabel, Stepper, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { StepIconProps } from '@mui/material/StepIcon';
import { ReactComponent as StepIconComplete } from '@assets/icons/step-complete.svg';
import { ReactComponent as StepIconIncomplete } from '@assets/icons/step-incomplete.svg';
import { StepperProps } from '@types';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: `'DM Sans', 'sans-serif'`
    }
  }
});

const StepIconCompleted = <StepIconComplete />;
const IncompleteIcon = <StepIconIncomplete />;

const ColorlibStepIcon = ({ active, completed, className }: StepIconProps) => (
  <div className={className}>
    {completed || active ? StepIconCompleted : IncompleteIcon}
  </div>
);

const StepperComponent = ({
  steps,
  alternativeLabel = true,
  activeStep
}: StepperProps) => (
  <ThemeProvider theme={theme}>
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel={alternativeLabel}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              <div>
                <div>{`STEP ${index + 1}`}</div>
                <div
                  className={`${
                    activeStep === index
                      ? '!text-base !font-semibold !text-primary'
                      : ''
                  }`}
                >
                  {label}
                </div>
              </div>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  </ThemeProvider>
);

export default StepperComponent;
