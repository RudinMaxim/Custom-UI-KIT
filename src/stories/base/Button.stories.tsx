import { colors } from '@/constants';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/Button/Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'base/Button',
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'The text inside the button',
    },
    variant: {
      control: 'select',
      description: 'The variant of the button',
      options: ['solid', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      description: 'The size of the button',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    color: {
      control: 'color',
      description: 'The color of the button',
    },
    isLoading: {
      control: 'boolean',
      description: 'Whether the button is in loading state',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    isFullWidth: {
      control: 'boolean',
      description: 'Whether the button is full width',
    },
    icon: {
      control: 'object',
      description: 'The icon to display on the button',
    },
    iconPosition: {
      control: 'select',
      description: 'The position of the icon on the button',
      options: ['left', 'right'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    size: 'md',
    variant: 'solid',
  },
};

export const Solid: Story = {
  args: {
    children: 'Solid Button',
    variant: 'solid',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
};

export const XSmall: Story = {
  args: {
    children: 'XSmall Button',
    size: 'xs',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
};

export const ColoredButton: Story = {
  args: {
    children: 'Colored Button',
    color: '#ff6347', // tomato
  },
};

export const LoadingButton: Story = {
  args: {
    children: 'Loading Button',
    isLoading: true,
    color: colors.aqua,
    size: 'md',
    icon: {
      name: 'loading',
      size: 24,
      color: colors.white,
    },
  },
};

export const DisabledButton: Story = {
  args: {
    children: 'Disabled Button',
    isDisabled: true,
  },
};

export const FullWidthButton: Story = {
  args: {
    children: 'Full Width Button',
    isFullWidth: true,
  },
};
export const ButtonWithIcon: Story = {
  args: {
    icon: {
      name: 'search',
      size: 24,
      color: colors.aqua,
    },
    iconPosition: 'right',
  },
};
