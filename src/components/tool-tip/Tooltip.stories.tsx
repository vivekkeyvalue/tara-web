import icons from '@components/icon/icons';
import { StoryFn, Meta } from '@storybook/react';

import { Tooltip, TooltipIcon } from './Tooltip';

export default {
  title: 'common/components/Tooltip',
  component: Tooltip,
  argTypes: {
    text: {
      description: 'Tooltip Message'
    },
    className: {
      description: 'ClassName for Tooltip'
    }
  }
} as Meta<typeof Tooltip>;

const Template: StoryFn<typeof Tooltip> = (args) => (
  <div className="group/tootlip relative ml-16 mt-16">
    <span>Hover Me</span>
    <Tooltip {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  text: 'Sample Tooltip'
};

const IconTemplate: StoryFn<typeof TooltipIcon> = (args) => (
  <div className="ml-16 mt-16">
    <TooltipIcon {...args} />
  </div>
);

export const IconTooltip = IconTemplate.bind({});
IconTooltip.args = {
  text: 'Sample Icon toolTip'
};

IconTooltip.argTypes = {
  iconName: {
    control: 'select',
    options: icons,
    defaultValue: 'info',
    description: 'icon for ToolTip'
  }
};
