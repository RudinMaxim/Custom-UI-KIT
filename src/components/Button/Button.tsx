import { colors } from '@/constants';
import { Size } from '@/types/props.type';
import React, { ComponentProps } from 'react';
import { IconProps } from '../Icon/Icon';
import { useButton, useButtonGroup } from './useButton';

type ButtonVariant = 'solid' | 'outline' | 'ghost'; // TODO | 'link';

export interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant;
  size?: Size;
  color?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  icon?: IconProps;
  iconPosition?: 'left' | 'right';
}

export function Button({
  color = colors.black,
  variant = 'solid',
  size = 'medium',
  isLoading = false,
  isDisabled = false,
  isFullWidth = false,
  iconPosition = 'left',
  ...props
}: ButtonProps): React.JSX.Element {
  const { children, ...buttonProps } = useButton({
    variant,
    color,
    size,
    isLoading,
    isDisabled,
    isFullWidth,
    iconPosition,
    ...props,
  });

  return <button {...buttonProps}>{children}</button>;
}

export interface ButtonGroupProps extends ComponentProps<'div'> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: Size;
  style?: React.CSSProperties;
  isAttached?: boolean;
}

export function ButtonGroup({
  variant = 'solid',
  size = 'medium',
  isAttached = false,
  ...props
}: ButtonGroupProps): React.JSX.Element {
  const { children, ...ButtonGroupProps } = useButtonGroup({
    variant,
    size,
    isAttached,
    ...props,
  });

  return <div {...ButtonGroupProps}>{children}</div>;
}
