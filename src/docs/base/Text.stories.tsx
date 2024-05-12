import { Text } from '@/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'base/Text',
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
} satisfies Meta<typeof Text>

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Hello world',
  },
};

export const Heading: Story = {
  render: () => (
    <>
      <Text role="h1" size="extra-large" fontWeight={'bold'}>
        Heading 1
      </Text>
      <Text role="h2" size="large" fontWeight={'bold'}>
        Heading 2
      </Text>
      <Text role="h3" size="medium" fontWeight={'bold'}>
        Heading 3
      </Text>
      <Text role="h4" size="medium" fontWeight={'bold'}>
        Heading 4
      </Text>
      <Text role="h5" size="small" fontWeight={'bold'}>
        Heading 5
      </Text>
      <Text role="h6" size="extra-small" fontWeight={'bold'}>
        Heading 5
      </Text>
    </>
  ),
};

