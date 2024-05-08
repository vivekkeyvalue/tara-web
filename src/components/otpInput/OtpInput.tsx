import React, { useState, useRef, useEffect, ChangeEvent } from 'react';

interface OtpProps {
  length?: number;
  autoFocus?: boolean;
  onChange: (otp: string) => void;
  className?: string;
  resetOtp?: boolean;
}

const OtpInput = ({
  length = 6,
  onChange,
  autoFocus,
  className = '',
  resetOtp
}: OtpProps) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(''));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    if (autoFocus && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [autoFocus]);

  useEffect(() => {
    if (resetOtp) {
      setOtp(new Array(length).fill(''));
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    }
  }, [resetOtp, length]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    if (!Number.isNaN(Number(value)) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < length - 1 && value !== '') {
        inputRefs.current[index + 1].focus();
      }
      onChange(newOtp.join(''));
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className={className}>
      {otp.map((value, index) => (
        <input
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          type="text"
          maxLength={1}
          value={value}
          onChange={(e) => handleInputChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(element) => {
            inputRefs.current[index] = element as HTMLInputElement;
          }}
          className="mr-2 size-12 rounded-lg border text-center text-base font-normal text-content focus:border-primary focus:outline-none"
        />
      ))}
    </div>
  );
};

export default OtpInput;
