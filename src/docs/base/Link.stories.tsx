import { Link } from '@/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Link> = {
  component: Link,
  title: 'base/Link',
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'The text inside the button',
    },
    size: {
      control: 'select',
      description: 'The size of the button',
      options: ['extra-small', 'small', 'medium', 'large', 'extra-large'],
    },
    target: {
      control: 'select',
      options: ['_blank', '_parent', '_top', '_self'],
    },
    color: {
      control: 'color',
      description: 'The color of the button',
    },
  },
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: 'Link',
    target: '_blank',
    href: 'https://www.google.com/',
  },
};
