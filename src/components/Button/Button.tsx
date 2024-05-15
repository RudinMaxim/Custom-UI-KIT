import { colors } from '@/constants';
import React from 'react';
import { ButtonGroupProps, ButtonLinkProps, ButtonProps } from './type.local';
import { useButton, useButtonGroup } from './useButton';

/**
 * A button component with various styles and options.
 *
 * @example
 * <Button color="primary" variant="solid" size="medium">
 *   Click me
 * </Button>
 *
 * @param {ButtonProps} props - The props for the button component.
 * @param {ButtonVariant} [props.variant='solid'] - The variant of the button.
 * @param {ButtonSize} [props.size='small'] - The size of the button.
 * @param {string} [props.color='black'] - The color of the button.
 * @param {boolean} [props.isLoading=false] - Whether the button is in a loading state.
 * @param {boolean} [props.isDisabled=false] - Whether the button is disabled.
 * @param {boolean} [props.isFullWidth=false] - Whether the button should span the full width of its container.
 * @param {IconProps} [props.icon] - The icon to display in the button.
 * @param {ButtonPosition} [props.iconPosition='left'] - The position of the icon in the button.
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
 * @example
 * <ButtonLink href="/about" color="secondary" variant="outline">
 *   About
 * </ButtonLink>
 *
 * @param {ButtonLinkProps} props - The props for the ButtonLink component.
 * @param {string} props.href - The URL that the button should link to.
 * @param {ButtonVariant} [props.variant='outline'] - The variant of the button.
 * @param {ButtonSize} [props.size='small'] - The size of the button.
 * @param {string} [props.color='black'] - The color of the button.
 * @param {boolean} [props.isLoading=false] - Whether the button is in a loading state.
 * @param {boolean} [props.isDisabled=false] - Whether the button is disabled.
 * @param {boolean} [props.isFullWidth=false] - Whether the button should span the full width of its container.
 * @param {IconProps} [props.icon] - The icon to display in the button.
 * @param {ButtonPosition} [props.iconPosition='left'] - The position of the icon in the button.
 * @returns {React.JSX.Element} The rendered ButtonLink component.
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

  const { children, ...anchorProps } = useButton({
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
    <a href={href} {...anchorProps}>
      {children}
    </a>
  );
};

/**
 * A group of buttons with various styles and options.
 *
 * @example
 * <ButtonGroup variant="outline" size="small" isAttached>
 *   <Button>Option 1</Button>
 *   <Button>Option 2</Button>
 *   <Button>Option 3</Button>
 * </ButtonGroup>
 *
 * @param {ButtonGroupProps} props - The props for the button group component.
 * @param {ButtonVariant} [props.variant='solid'] - The variant of the buttons in the group.
 * @param {ButtonSize} [props.size='medium'] - The size of the buttons in the group.
 * @param {boolean} [props.isAttached=false] - Whether the buttons in the group should be attached to each other.
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
