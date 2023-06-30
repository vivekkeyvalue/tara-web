import { StoryFn, Meta } from '@storybook/react';

import Input from './Input';

export default {
  title: 'common/components/Input',
  component: Input
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Label',
  error: false,
  errorMessage: ''
};
