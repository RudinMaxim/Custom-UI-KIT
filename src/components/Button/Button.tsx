import { colors } from '@/constants';
import React from 'react';
import { ButtonGroupProps, ButtonProps } from './type.local';
import { useButton, useButtonGroup } from './useButton';

/**
 * A button component with various styles and options.
 *
 * @param {ButtonProps} props - The props for the button component.
 * @returns {React.JSX.Element} The rendered button component.
 */
export function Button({
  color = colors.black,
  variant = 'solid',
  size = 'small',
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

/**
 * A group of buttons with various styles and options.
 *
 * @param {ButtonGroupProps} props - The props for the button group component.
 * @returns {React.JSX.Element} The rendered button group component.
 */
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
