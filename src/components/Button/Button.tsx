import { ComponentProps } from 'react';
import { IconProps } from '../Icon/Icon';
import { useButton } from './useButton';

type ButtonVariant = 'solid' | 'outline' | 'ghost'; // | 'link'; // TODO: Implement link variant
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

export interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  icon?: IconProps;
  iconPosition?: 'left' | 'right';
  // TODO: Add aria attributes (e.g., aria-label)
}

export function Button(props: ButtonProps) {
  const {
    children,
    isLoading,
    isDisabled,
    iconPosition,
    isFullWidth,
    ...buttonProps
  } = useButton(props);

  return <button {...buttonProps}>{children}</button>;
}
