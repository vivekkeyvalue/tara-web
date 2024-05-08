import { memo } from 'react';

import { AvatarProps } from '@types';
import { getFirstLetters, getRandomColor } from '@utils/generic';

const Avatar = ({ className = '', name, imageUrl, bgColor }: AvatarProps) => (
  <div
    className={`border-grey30 flex items-center justify-center rounded-full border font-medium text-content ${className}`}
    style={{ backgroundColor: bgColor || getRandomColor() }}
  >
    {imageUrl ? (
      <img
        className={`size-full rounded-full object-cover ${className}`}
        src={imageUrl}
        alt=""
      />
    ) : (
      <>{getFirstLetters(name)}</>
    )}
  </div>
);

export default memo(Avatar);
