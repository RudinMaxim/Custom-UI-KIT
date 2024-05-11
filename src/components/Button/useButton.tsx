import { getClasses, getStyle } from '@/helper';
import { getAccessibleAttributes } from '@/helper/getAccessibleAttributes';
import { useColors } from '@/hook/useColors';
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
    style: _style,
    className: _className,
    icon,
    iconPosition,
    ...rest
  } = props;
  const { main_color, contrasting_color } = useColors(color);

  const disabled = isLoading || isDisabled;

  const className = getClasses(
    styles.button,
    styles[`button__${variant}`],
    styles[`button__${size}`],
    isFullWidth ? styles['button__full-width'] : '',
    _className ?? ''
  );

  const style = getStyle({ ..._style }, [
    ['--button-content-color', contrasting_color],
    ['--button-background-color', main_color],
  ]);

  const attributes = getAccessibleAttributes({isDisabled, isLoading, 'aria-label': children,  });

  const getButtonContent = (): React.JSX.Element => {
    if (isLoading) {
      return <Loader color={contrasting_color} size="sm" />;
    }
    return (
      <div className={styles['button-box']}>
        {' '}
        {iconPosition === 'left' && icon && (
          <Icon {...icon} color={contrasting_color} />
        )}{' '}
        {children}{' '}
        {iconPosition === 'right' && icon && (
          <Icon {...icon} color={contrasting_color} />
        )}{' '}
      </div>
    );
  };
  
  return {
    ...rest,
    ...attributes,
    children: getButtonContent(),
    className,
    style,
    disabled,
  };
}
export function useButtonGroup(props: ButtonGroupProps) {
  const {
    children,
    variant,
    size,
    isAttached,
    className: _className,
    ...rest
  } = props;

  const className = getClasses(
    styles['button-group'],
    styles[`button-group__${variant}`],
    styles[`button-group__${size}`],
    isAttached ? styles['button__group__attached'] : '',
    _className
  );
  return { children, className, ...rest };
}
