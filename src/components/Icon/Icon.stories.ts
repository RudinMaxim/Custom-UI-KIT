import { IconMap } from '@/constants/IconMap';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const iconNames = Object.keys(IconMap);

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'Components/Icon',
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: iconNames,
    },
    color: { control: 'color' },
    size: { control: 'number'},
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: iconNames[0],
  },
};
