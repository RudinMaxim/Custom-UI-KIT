import { ComponentProps } from 'react';
import { useButton } from './useButton';

type ButtonVariant = 'solid' | 'outline' | 'ghost'; // | 'link';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

export interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

// TODO Сделать поддержку кнопки с ссылкой
// TODO Сделать поддержку кнопки с иконкой
// TODO Сделать поддержку кнопки с левой и правой иконками
// TODO Сделать поддержку aria атрибутов
// ! Убрать хардкод типизации buttonStyle

export function Button(props: ButtonProps) {
  const { children, ...buttonProps } = useButton(props);

  return <button {...buttonProps}>{children}</button>;
}

export function ButtonIcon(props: ButtonProps & { icon: React.ReactNode }) {
  const { children, ...buttonProps } = useButton(props);

  return <button {...buttonProps}>{props.icon}</button>;
}
