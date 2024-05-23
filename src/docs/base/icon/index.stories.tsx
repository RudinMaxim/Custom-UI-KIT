import { Icon } from '@/base/Icon/Icon';
import { Icons } from '@/constants/IconMap';
import type { Meta, StoryObj } from '@storybook/react';

const iconNames = Object.keys(Icons);

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'base/Icon',
  argTypes: {
    name: {
      control: 'select',
      options: iconNames,
    },
    color: {
      control: 'color',
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

export type Story = StoryObj<typeof Icon>;

export const PlaygroundIcon: Story = {
  args: {
    name: iconNames[0],
  },
};
