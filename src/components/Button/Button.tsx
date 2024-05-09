import { colors } from '@/constants';
import React, { ComponentProps } from 'react';
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

export function Button({
  color = colors.black,
  variant = 'solid',
  size = 'sm',
  isLoading = false,
  isDisabled = false,
  isFullWidth = false,
  iconPosition = 'left',
  ...props
}: ButtonProps): React.JSX.Element {
  const {
    children,
    ...buttonProps
  } = useButton({
    variant,
    color,
    size,
    isLoading,
    isDisabled,
    isFullWidth,
    ...props,
  });

  return <button {...buttonProps}>{children}</button>;
}
