import { useState } from 'react';

import { Button, DowntimeTimer, OtpInput } from '@components';
import { OtpVerificationProps } from '@types';

import AuthSection from '../auth-section/AuthSection';

const OtpVerification = ({
  email,
  handleChange,
  handleSubmit,
  isSubmitDisabled,
  isError,
  handleResend
}: OtpVerificationProps) => {
  const [clearOtpInput, setClearOtpInput] = useState<boolean>(false);

  const handleResendOtp = () => {
    handleResend();
    setClearOtpInput(true);
  };

  const handleOtpChange = (val: string) => {
    setClearOtpInput(false);
    handleChange(val);
  };

  return (
    <AuthSection
      pageTitle="Enter OTP"
      title="Enter Verification Code"
      description={`A 6-digit code has been sent to ${email}. Please enter it below.`}
    >
      <div className="relative mb-8  mt-6 w-full gap-2">
        <OtpInput
          className="flex items-center justify-center"
          length={6}
          onChange={handleOtpChange}
          autoFocus
          resetOtp={clearOtpInput}
        />
        {isError && (
          <div className="absolute -bottom-6 left-1 text-xs font-normal text-error">
            Oops! please enter a valid code
          </div>
        )}
      </div>
      <Button
        label="Continue"
        className="w-full"
        size="large"
        handleClick={handleSubmit}
        disabled={isSubmitDisabled}
        onEnterEnabled
      />
      <div className="mb-10 mt-4 flex w-full justify-center ">
        <DowntimeTimer initialTime={30} resendOtp={handleResendOtp} />
      </div>
    </AuthSection>
  );
};
export default OtpVerification;
