import { colors } from '@/constants';
import React from 'react';
import { ButtonGroupProps, ButtonLinkProps, ButtonProps } from './type.local';
import { useButton, useButtonGroup } from './useButton';

/**
 * A button component with various styles and options.
 *
 * @param {ButtonProps} props - The props for the button component.
 * @returns {React.JSX.Element} The rendered button component.
 */
export function Button({
  color = colors.black['500'],
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
 * A React component that renders a button-styled link.
 *
 * @param props - The props for the ButtonLink component.
 * @param props.children - The content to be rendered inside the button.
 * @param props.href - The URL that the button should link to.
 * @param props.className - An optional CSS class name to apply to the button.
 */
export const ButtonLink = ({
  href,
  color = colors.black['500'],
  variant = 'outline',
  size = 'small',
  isLoading = false,
  isDisabled = false,
  isFullWidth = false,
  iconPosition = 'left',
  ...props
}: ButtonLinkProps): React.JSX.Element => {
  if (!href) {
    throw new Error('href is required for ButtonLink component');
  }

  const { children, ...buuttonProps } = useButton({
    variant,
    color,
    size,
    isLoading,
    isDisabled,
    isFullWidth,
    iconPosition,
    ...props,
  });

  return (
    <a href={href} {...buuttonProps}>
      {children}
    </a>
  );
};

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
