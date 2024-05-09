import { colors } from '@/constants';
import React, { ComponentProps } from 'react';
import { IconProps } from '../Icon/Icon';
import { useButton, useButtonGroup } from './useButton';

type ButtonVariant = 'solid' | 'outline' | 'ghost'; // TODO | 'link';
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
}

// TODO style: Сделать правильные состояния при ховере и эктив 
// TODO component: Сделать компонент button__link
// TODO logic: Сделать отмену анимации ховер эктив при отведение после зажатия кнопки
// TODO component: если только иконка (не текст) то убрать padding и сделать его 1 к 1

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
  size?: ButtonSize;
  style?: React.CSSProperties;
  isAttached?: boolean;
}

export function ButtonGroup({
  variant = 'solid',
  size = 'sm',
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
