import { StoryFn, Meta } from '@storybook/react';

import Spinner from './Spinner';

export default {
  title: 'common/components/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large']
    }
  }
} as Meta<typeof Spinner>;

const Template: StoryFn<typeof Spinner> = (args) => <Spinner {...args} />;

export const Primary = Template.bind({});
