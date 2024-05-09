import React, { ComponentProps, forwardRef } from 'react';
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

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref): React.JSX.Element => {
    const { children, ...buttonProps } = useButton(props);

    return (
      <button ref={ref} {...buttonProps}>
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
