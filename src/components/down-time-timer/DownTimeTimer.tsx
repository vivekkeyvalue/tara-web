import React, { useState, useEffect, useRef } from 'react';

import { formatTime } from '@utils/date';

interface DowntimeTimerProps {
  initialTime: number;
  resendOtp: () => void;
}

const DowntimeTimer: React.FC<DowntimeTimerProps> = ({
  initialTime,
  resendOtp
}) => {
  const [seconds, setSeconds] = useState<number>(initialTime);
  const [timerExpired, setTimerExpired] = useState<boolean>(false);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    intervalIdRef.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
  };

  const handleResendOtp = () => {
    resendOtp();
    setTimerExpired(false);
    setSeconds(initialTime);
    resetTimer();
  };

  useEffect(() => {
    resetTimer();
    // Cleanup interval when the component unmounts
    return () => {
      clearInterval(intervalIdRef.current!);
    };
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      setTimerExpired(true);
      clearInterval(intervalIdRef.current!);
    }
  }, [seconds]);

  return (
    <div className="flex text-xs font-normal">
      <span className="text-primary">Having trouble?</span> {` `}
      {timerExpired ? (
        <div
          className="ml-1 cursor-pointer text-primary"
          role="presentation"
          onClick={handleResendOtp}
        >
          Resend OTP
        </div>
      ) : (
        <div className="ml-1">
          Request a new code in {` `}
          <span className="text-primary">{formatTime(seconds)}</span>
        </div>
      )}
    </div>
  );
};

export default DowntimeTimer;
