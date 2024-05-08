/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginInput from '@features/authentication/components/login-input/LoginInput';
import OtpVerification from '@features/authentication/components/otp-verification/OtpVerification';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isEmailVerified, setIsEmailVerified] = useState<boolean>(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);
  const [isOtpValid, setIsOtpValid] = useState<boolean>(true);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== '') setIsSubmitDisabled(false);
    else setIsSubmitDisabled(true);
    setEmail(e.target.value);
    setErrorMessage('');
  };

  const handleSubmitEmail = async () => {
    setIsEmailVerified(true);
    setIsSubmitDisabled(true);
  };

  const handleOTPChange = (val: string) => {
    if (val.length < 6) setIsSubmitDisabled(true);
    else setIsSubmitDisabled(false);
    setOtp(val);
    setIsOtpValid(true);
  };

  const handleSubmitOTP = () => {
    navigate('/');
  };

  const handleResendOtp = async () => {};

  return !isEmailVerified ? (
    <LoginInput
      email={email}
      handleChange={handleEmailChange}
      handleSubmit={handleSubmitEmail}
      isSubmitDisabled={isSubmitDisabled}
      errorMessage={errorMessage}
    />
  ) : (
    <OtpVerification
      email={email}
      handleChange={handleOTPChange}
      handleSubmit={handleSubmitOTP}
      isSubmitDisabled={isSubmitDisabled}
      isError={!isOtpValid}
      handleResend={handleResendOtp}
    />
  );
};

export default LoginPage;
