import { Size } from '@/types/props.type';
import { ComponentProps } from 'react';
import { IconProps } from '../Icon/Icon';

type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'link';
type ButtonPosition = 'left' | 'right';

export interface ButtonProps extends ComponentProps<'button'> {
  /** The variant of the button (solid, outline, or ghost) */
  variant?: ButtonVariant;

  /** The size of the button ('extra-small', 'small', 'medium', 'large', 'extra-large') */
  size?: Size;

  /** The color of the button in all recording formats */
  color?: string;

  /** Whether the button is in a loading state */
  isLoading?: boolean;

  /** Whether the button is disabled */
  isDisabled?: boolean;

  /** Whether the button should span the full width of its container */
  isFullWidth?: boolean;

  /** The icon to display in the button */
  icon?: IconProps;

  /** The position of the icon in the button (left or right) */
  iconPosition?: ButtonPosition;
}

export interface ButtonLinkProps extends ButtonProps {
  href: string;
}

export interface ButtonGroupProps extends ComponentProps<'div'> {
  /** The child components of the button group */
  children: React.ReactNode;

  /** The variant of the buttons in the group (solid, outline, or ghost) */
  variant?: ButtonVariant;

  /** The size of the buttons in the group ('extra-small', 'small', 'medium', 'large', 'extra-large') */
  size?: Size;

  /** Additional styles to apply to the button group */
  style?: React.CSSProperties;

  /** Whether the buttons in the group should be attached to each other */
  isAttached?: boolean;
}
