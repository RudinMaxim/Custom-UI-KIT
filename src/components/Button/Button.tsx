import { parseColor } from '@/utils/parseColor';
import { ComponentProps } from 'react';
import styles from './Button.module.scss';

type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'link';

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  // className?: string;
  // leftIcon?: ReactNode;
  // rightIcon?: ReactNode;
}

// TODO Сделать чтобы можно было выбрать цвет по названию
// ! Исправить ошибку --button-color

export function Button({
  children,
  variant = 'solid',
  size = 'md',
  color = '#000',
  isLoading = false,
  isDisabled = false,
  isFullWidth = false,
  ...props
}: ButtonProps) {
  const classNames = [
    styles.button,
    styles[`button__${variant}`],
    styles[`button__${size}`],
    isFullWidth ? styles.button__fullWidth : '',
  ].join(' ');

  return (
    <button
      className={classNames}
      style={{ '--button-color': parseColor(color) }}
      disabled={isDisabled || isLoading}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
}
