import { Input, Button } from '@components';
import { LoginInputProps } from 'types/authentication';

import AuthSection from '../auth-section/AuthSection';

const LoginInput = ({
  email,
  handleChange,
  handleSubmit,
  isSubmitDisabled,
  errorMessage,
  isLoading
}: LoginInputProps) => (
  <AuthSection
    title="Welcome back to Tara!"
    pageTitle="Login"
    description="Enter your Email address to receive a one-time 
      password (OTP)"
  >
    <Input
      name="Mobile Number"
      className="border-xl mb-6 mt-12 w-full"
      value={email}
      onChange={handleChange}
      type="text"
      maxLength={50}
      placeholder="Enter your email address"
      inputSize="medium"
      error={!!errorMessage}
      errorMessage={errorMessage}
      labelRequired
      label="Email Address"
    />
    <Button
      label="Continue"
      className="w-full"
      size="large"
      handleClick={handleSubmit}
      disabled={isSubmitDisabled}
      loading={isLoading}
      onEnterEnabled
    />
    <div className="mt-4 text-sm text-grey">
      Need help?
      <span className="cursor-pointer text-primary"> Contact support</span>
    </div>
  </AuthSection>
);
export default LoginInput;
