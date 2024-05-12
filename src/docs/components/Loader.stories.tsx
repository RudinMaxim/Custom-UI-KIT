// Loader.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from '../../../components/Loader/Loader';

const meta: Meta<typeof Loader> = {
  component: Loader,
  title: 'components/Loader',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Rotate: Story = {
  args: {
    variant: 'rotate',
  },
};

export const RotateWithColor: Story = {
  args: {
    variant: 'rotate',
    color: '#ff0000', // Красный цвет
  },
};

export const RotateWithSize: Story = {
  args: {
    variant: 'rotate',
    size: 'lg', // Большой размер
  },
};