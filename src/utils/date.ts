/* eslint-disable import/prefer-default-export */
export const formatTime = (time: number): string => {
  // Format seconds as MM:SS
  const minutes = Math.floor(time / 60);
  const remainingSeconds = time % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};
