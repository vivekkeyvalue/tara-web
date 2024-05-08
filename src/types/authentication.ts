export interface LoginInputProps {
  email: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  isSubmitDisabled: boolean;
  errorMessage: string;
  isLoading?: boolean;
}

export interface OtpVerificationProps {
  email: string;
  handleChange: (val: string) => void;
  handleSubmit: () => void;
  isSubmitDisabled: boolean;
  isError: boolean;
  handleResend: () => void;
}
