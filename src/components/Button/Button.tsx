import { ComponentProps } from 'react';
import { useButton } from './useButton';

type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'link';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

export interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  className?: string;
  // leftIcon?: ReactNode;
  // rightIcon?: ReactNode;
}

export function Button(props: ButtonProps) {
  const { children, isLoading, ...buttonProps } = useButton(props);

  return (
    <button {...buttonProps}>{isLoading ? 'Loading...' : children}</button>
  );
}
