import { colors } from '@/constants/colors';
import { mergeClass } from '@/utils/mergeClass';
import { parseColor } from '@/utils/parseColor';
import { Loader } from '..';
import { ButtonProps } from './Button';
import styles from './Button.module.scss';

export function useButton({
  variant = 'solid',
  className,
  style,
  children,
  icon,
  iconPosition = 'left',
  size = 'md',
  color = colors.black,
  isLoading = false,
  isDisabled = false,
  isFullWidth = false,
  ...rest
}: ButtonProps) {
  const defaultClassNames = [
    styles.button,
    styles[`button__${variant}`],
    styles[`button__${size}`],
    isFullWidth ? styles.button__fullWidth : '',
  ].join(' ');

  const buttonStyle = {
    ...style,
    '--button-color': parseColor(color),
  } as React.CSSProperties;

  const mergedClassNames = mergeClass(defaultClassNames, className);
  const disabled = isDisabled || isLoading;

  const content = isLoading ? (
    <Loader color={colors.white} size="sm" />
  ) : (
    <>
      {iconPosition === 'left' && icon}
      {children}
      {iconPosition === 'right' && icon}
    </>
  );

  return {
    ...rest,
    children: content,
    className: mergedClassNames,
    style: buttonStyle,
    'aria-disabled': disabled,
    isLoading,
    disabled,
  };
}
