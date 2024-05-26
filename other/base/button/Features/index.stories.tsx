import { Button } from '@/index';
import { Story } from '../index.stories';

export default {};
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
      <Button size='extraSmall'>XSmall Button</Button>
      <Button size="small">Small Button</Button>
      <Button size="medium">Medium Button</Button>
      <Button size="large">Large Button</Button>
      <Button size="extraLarge">Large Button</Button>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button color="red" size="extraSmall">
        Named
      </Button>
      <Button color="red.100" size="extraSmall">
        Named
      </Button>
      <Button color="#ff0000" size="extraSmall">
        Hexadecimal
      </Button>
      <Button color="rgba(255, 0, 0, 1)" size="extraSmall">
        RGB
      </Button>
      <Button color="rgba(255, 0, 0, 0.5)" size="extraSmall">
        RGBA
      </Button>
      <Button color="hsl(0, 100%, 50%)" size="extraSmall">
        HSL
      </Button>
      <Button color="hsla(0, 100%, 50%, 0.5)" size="extraSmall">
        HSLA
      </Button>
      <Button color="hwb(23, 100%, 100%)" size="extraSmall">
        hwb
      </Button>
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

// export const WithLink: Story = {
//   render: () => (
//     <ButtonLink href={'https://github.com/RudinMaxim/RuKit'}>
//       WithLink
//     </ButtonLink>
//   ),
// };

// export const ButtonGroups: Story = {
//   render: () => (
//     <>
//       <ButtonGroup>
//         <Button>Button 1</Button>
//         <Button>Button 2</Button>
//         <Button>Button 3</Button>
//       </ButtonGroup>
//       <br />
//       <ButtonGroup variant="outline">
//         <Button variant="outline">Outline 1</Button>
//         <Button variant="outline">Outline 2</Button>
//         <Button variant="outline">Outline 3</Button>
//       </ButtonGroup>
//       <br />
//       <ButtonGroup size="large" isAttached>
//         <Button size="large">Large 1</Button>
//         <Button size="large">Large 2</Button>
//         <Button size="large">Large 3</Button>
//       </ButtonGroup>
//     </>
//   ),
// };
