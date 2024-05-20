interface ProgressBarProps {
  height: number;
  progress: number;
  progressBarcolor: string;
  bgColor: string;
  wrapperStyle?: string;
  progressBarStyle?: string;
}

const ProgressBar = ({
  height,
  progress,
  progressBarcolor,
  bgColor,
  wrapperStyle,
  progressBarStyle
}: ProgressBarProps) => {
  const styles = {
    progressWrapperStyle: {
      height,
      backgroundColor: bgColor
    },
    progressBarStyle: {
      width: `${progress}%`,
      backgroundColor: progressBarcolor
    }
  };

  return (
    <div
      style={styles.progressWrapperStyle}
      className={`w-full rounded-full ${wrapperStyle}`}
    >
      <div
        style={styles.progressBarStyle}
        className={`h-full ${
          progress === 100 ? 'rounded-full' : 'rounded-l-full'
        } ${progressBarStyle}`}
      />
    </div>
  );
};

export default ProgressBar;
