import { contrastingColor, mergeClass, parseColor } from '@/utils';
import React from 'react';
import { Icon, Loader } from '../index';
import { ButtonGroupProps, ButtonProps } from './Button';
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
    iconPosition,
    ...rest
  } = props;

  const mainColor = parseColor(color);

  const contrasting =
    variant === 'solid' ? contrastingColor(mainColor) : mainColor;

  const disabled = isLoading || isDisabled;

  const getButtonClasses = (): string => {
    return mergeClass(
      styles.button,
      styles[`button__${variant}`],
      styles[`button__${size}`],
      isFullWidth ? styles.button__fullWidth : '',
      // variant === 'link' ? styles.button__link : '',
      className
    );
  };

  const getButtonStyle = () => {
    return {
      '--button-content-color': contrasting,
      '--button-background-color': mainColor,
      ...props.style,
    };
  };

  const getButtonAttributes =
    (): React.ButtonHTMLAttributes<HTMLButtonElement> => {
      const attributes: React.ButtonHTMLAttributes<HTMLButtonElement> = {
        className: styles.button__content,
        type: 'button',
        'aria-label': !children
          ? `Button ${icon?.name}`
          : `Button ${children.toString()}`,
      };

      if (disabled) {
        attributes['aria-disabled'] = true;
      }

      if (isLoading) {
        attributes['aria-busy'] = true;
      }

      if (props['aria-describedby']) {
        attributes['aria-describedby'] = props['aria-describedby'];
      }

      return attributes;
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
    ...getButtonAttributes(),
    children: getButtonContent(),
    className: getButtonClasses(),
    style: getButtonStyle(),
    disabled,
  };
}

export function useButtonGroup(props: ButtonGroupProps) {
  const { children, variant, size, isAttached, className, ...rest } = props;

  const getButtonGroupClasses = (): string => {
    return mergeClass(
      styles.buttonGroup,
      styles[`buttonGroup__${variant}`],
      styles[`buttonGroup__${size}`],
      isAttached ? styles.buttonGroup__attached : '',
      className
    );
  };

  return {
    children,
    className: getButtonGroupClasses(),
    ...rest,
  };
}
