import { contrastingColor, mergeClass, parseColor } from '@/utils';
import React from 'react';
import { Icon, Loader } from '../index';
import { ButtonProps } from './Button';
import styles from './Button.module.scss';

export function useButton(props: ButtonProps) {
  const {
    children,
    variant,
    size,
    color,
    isLoading,
    isDisabled,
    isFullWidth,
    className,
    icon,
    iconPosition = 'left',
    ...rest
  } = props;

  const getButtonClasses = (): string => {
    return mergeClass(
      styles.button,
      styles[`button__${variant}`],
      styles[`button__${size}`],
      isFullWidth ? styles.button__fullWidth : '',
      className
    );
  };

  const contrasting =
    variant === 'solid'
      ? contrastingColor(parseColor(color))
      : parseColor(color);

  const getButtonStyle = () => {
    const { color } = props;
    return {
      '--button-content-color': contrasting,
      '--button-background-color': parseColor(color),
      ...props.style,
    };
  };

  const getButtonContent = (): React.JSX.Element => {
    if (isLoading) {
      return <Loader color={contrasting} size="sm" />;
    }

    return (
      <div className={styles.button__box}>
        {iconPosition === 'left' && icon && (
          <Icon {...icon} color={contrasting} />
        )}
        {children}
        {iconPosition === 'right' && icon && (
          <Icon {...icon} color={contrasting} />
        )}
      </div>
    );
  };

  return {
    ...rest,
    children: getButtonContent(),
    className: getButtonClasses(),
    style: getButtonStyle(),
    disabled: isDisabled || isLoading,
  };
}
