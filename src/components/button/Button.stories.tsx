import { StoryFn, Meta } from '@storybook/react';

import Button, { ButtonLabel } from './Button';
import Icon from '../icon/Icon';

export default {
  title: 'common/components/Button',
  component: Button
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const ButtonWithIcon: StoryFn<typeof Button> = (args) => (
  <Button {...args} className="flex justify-between">
    <ButtonLabel label="Label for Button" variant="primary" />
    <Icon name="cross" />
  </Button>
);

export const IconButton: StoryFn<typeof Button> = (args) => (
  <Button {...args} variant="icon">
    <Icon name="cross" />
  </Button>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'medium',
  label: 'Button'
};
