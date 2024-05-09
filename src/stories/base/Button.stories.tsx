import { colors } from '@/constants';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/Button/Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'base/Button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    color: {
      control: 'color',
    },
    isLoading: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    isFullWidth: {
      control: 'boolean',
    },
    icon: {
      control: 'object',
    },
    iconPosition: {
      control: 'inline-radio',
      options: ['left', 'right'],
    }
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
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
