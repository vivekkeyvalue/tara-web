import { Meta, StoryFn } from '@storybook/react';

import icons from './icons';
import Icon from './Icon';

export default {
  title: 'common/components/Icon',
  component: Icon,
  argTypes: {
    fill: {
      control: 'radio',
      options: ['#000', '#fff', 'grey', 'transparent']
    },
    stroke: {
      control: 'radio',
      options: ['#000', '#fff', 'grey', 'transparent']
    }
  }
} as Meta;

export const Icons: StoryFn = ({ fill, stroke }) => (
  <div className="grid grid-cols-5 gap-32">
    {icons.map((icon) => (
      <div className="flex flex-col items-center" key={icon}>
        <Icon name={icon} fill={fill} stroke={stroke} />
        <span>{icon}</span>
      </div>
    ))}
  </div>
);
