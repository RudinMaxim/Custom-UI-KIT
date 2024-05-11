import { Button, ButtonGroup } from '@/components/Button/Button';
import type { Meta, StoryObj } from '@storybook/react';

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
      options: ['extra-small', 'small', 'medium', 'large', 'extra-large'],
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
    size: 'medium',
    variant: 'solid',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button variant="solid">Solid Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="ghost">Ghost Button</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button size="extra-small">XSmall Button</Button>
      <Button size="small">Small Button</Button>
      <Button size="medium">Medium Button</Button>
      <Button size="large">Large Button</Button>
      <Button size="extra-large">Large Button</Button>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button color="tomato" size="medium">
        Named Color
      </Button>
      <Button color="#ff6347">Hexadecimal Color</Button>
      <Button color="rgb(255, 99, 71)">RGB Color</Button>
      <Button color="rgba(255, 99, 71, 0.5)">RGBA Color</Button>
      <Button color="hsl(9, 100%, 64%)">HSL Color</Button>
      <Button color="hsla(9, 100%, 64%, 0.5)">HSLA Color</Button>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button isLoading>Loading</Button>
      <Button isDisabled>Disabled</Button>
      <Button isFullWidth>Full Width</Button>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button icon={{ name: 'search', size: 24 }}>Button with Icon</Button>
      <Button icon={{ name: 'search', size: 24 }} iconPosition="left">
        Icon on Left
      </Button>
      <Button icon={{ name: 'search', size: 24 }} iconPosition="right">
        Icon on Right
      </Button>
      <Button icon={{ name: 'search', size: 24 }} />
    </div>
  ),
};

export const ButtonGroups: Story = {
  render: () => (
    <>
      <ButtonGroup>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
      <br />
      <ButtonGroup variant="outline">
        <Button variant="outline">Outline 1</Button>
        <Button variant="outline">Outline 2</Button>
        <Button variant="outline">Outline 3</Button>
      </ButtonGroup>
      <br />
      <ButtonGroup size="large" isAttached>
        <Button size="large">Large 1</Button>
        <Button size="large">Large 2</Button>
        <Button size="large">Large 3</Button>
      </ButtonGroup>
    </>
  ),
};
