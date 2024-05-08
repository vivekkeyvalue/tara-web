import React, { SVGProps, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

export type IconSize =
  | 'extrasmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'extralarge'
  | '16'
  | '24'
  | 'none';

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
  size = 'medium',
  ...rest
}) => {
  const iconStyles = clsx({
    'h-1.5 w-1.5 min-w-6': size === 'extrasmall', // 6px
    'h-2.5 w-2.5 min-w-10': size === 'small', // 10px
    'h-5 w-5 min-w-5': size === 'medium', // 20px
    'h-[18px] w-[18px] min-w-[18px]': size === 'large', // 18px
    'h-8 w-8 min-w-8': size === 'extralarge', // 32px
    'size-4': size === '16', // 16 px
    'size-6': size === '24', // 24 px
    '': size === 'none'
  });

  const ImportedIconRef = useRef<React.FC<SVGProps<SVGSVGElement>> | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const importIcon = async (): Promise<void> => {
      try {
        const icon = await import(`./icons/${name}.svg`);
        ImportedIconRef.current = icon.ReactComponent;
        setLoading(false);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(`Error loading icon ${name}:`, error);
      }
    };

    importIcon();
  }, [name]);

  if (ImportedIconRef.current && !loading) {
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
