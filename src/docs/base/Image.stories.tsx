import { Image } from '@/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Image> = {
  component: Image,
  title: 'base/Image',
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'The source URL of the image',
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the image',
    },
    width: {
      control: 'number',
      description: 'The width of the image in pixels',
    },
    height: {
      control: 'number',
      description: 'The height of the image in pixels',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for the image',
    },
    style: {
      control: 'object',
      description: 'Inline styles for the image',
    },
  },
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/150',
    alt: 'Default image',
  },
};

export const WithCustomSize: Story = {
  args: {
    src: 'https://via.placeholder.com/300X200',
    alt: 'Custom size image',
    width: 300,
    height: 200,
  },
};

export const WithClassName: Story = {
  args: {
    src: 'https://via.placeholder.com/150',
    alt: 'Image with custom class',
    className: 'custom-class',
  },
};

export const WithInlineStyles: Story = {
  args: {
    src: 'https://via.placeholder.com/150',
    alt: 'Image with inline styles',
    style: { border: '2px solid red' },
  },
};
