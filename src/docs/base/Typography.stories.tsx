import { Typography } from '@/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Typography> = {
  component: Typography,
  title: 'base/Typography',
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
    role: {
      control: 'select',
    },
    size: {
      control: 'select',
    },
    color: {
      control: 'color',
    },
    fontWeight: {
      control: 'select',
    },
    lineHeight: {
      control: 'number',
    },
    textDecoration: {
      control: 'select',
    },
  },
} satisfies Meta<typeof Typography>

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: 'Hello world',
  },
};

export const Heading: Story = {
  render: () => (
    <>
      <Typography role="h1" size="extra-large" fontWeight={'bold'}>
        Heading 1
      </Typography>
      <Typography role="h2" size="large" fontWeight={'bold'}>
        Heading 2
      </Typography>
      <Typography role="h3" size="medium" fontWeight={'bold'}>
        Heading 3
      </Typography>
      <Typography role="h4" size="medium" fontWeight={'bold'}>
        Heading 4
      </Typography>
      <Typography role="h5" size="small" fontWeight={'bold'}>
        Heading 5
      </Typography>
      <Typography role="h6" size="extra-small" fontWeight={'bold'}>
        Heading 5
      </Typography>
    </>
  ),
};

