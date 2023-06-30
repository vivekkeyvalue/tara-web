import React, { SVGProps, useEffect, useRef } from 'react';
import clsx from 'clsx';

export type IconSize =
  | 'extrasmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'extralarge'
  | 'xxl';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: IconSize;
  fill?: string;
  stroke?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  fill = 'transparent',
  stroke = 'transparent',
  size = 'large',
  ...rest
}) => {
  const iconStyles = clsx({
    'h-[10px] w-[10px] min-w-[10px]': size === 'extrasmall', // 10px
    'h-[14px] w-[14px] min-w-[14px]': size === 'small', // 14px
    'h-4 w-4 min-w-[16px]': size === 'medium', // 16px
    'h-[18px] w-[18px] min-w-[18px]': size === 'large', // 18px
    'h-6 w-6 min-w-[24px]': size === 'extralarge', // 24px,
    'h-12 w-12 min-w-[48px]': size === 'xxl' // 48px
  });

  const ImportedIconRef = useRef<React.FC<SVGProps<SVGSVGElement>> | never>();
  const [, setLoading] = React.useState(true);

  const importIcon2 = async (): Promise<void> => {
    const icon = await import(`./icons/${name}.svg`);
    ImportedIconRef.current = icon.ReactComponent;
    setTimeout(() => {
      setLoading(false);
    }, 50);
  };

  useEffect(() => {
    setLoading(true);
    importIcon2();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, ImportedIconRef.current]);

  if (ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return (
      <ImportedIcon
        fill={fill}
        stroke={stroke}
        {...rest}
        className={clsx(rest.className, iconStyles)}
      />
    );
  }

  return null;
};

export default Icon;
