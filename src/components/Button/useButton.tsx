import { getAccessibleAttributes, getClasses, getStyle } from '@/helper';
import { useColors } from '@/hook/useColors';
import React from 'react';
import { Icon, Loader } from '../index';
import styles from './Button.module.scss';
import { ButtonGroupProps, ButtonProps } from './type.local';

export function useButton(props: ButtonProps) {
  const {
    variant,
    size,
    color,
    isLoading,
    isDisabled,
    isFullWidth,
    style: _style,
    className: _className,
    children: _children,
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

  const attributes = getAccessibleAttributes({
    isDisabled,
    isLoading,
    isFullWidth,
    'aria-label': _children,
  });

  const getButtonContent = (): React.JSX.Element => {
    if (isLoading) {
      return (
        <div className={`${styles['button-box']} ${styles['button-box__loader-only']}`}>
          <Loader
            color={variant === 'outline' ? main_color : contrasting_color}
            size="sm"
          />
        </div>
      );
    }
  
    const hasContent = Boolean(_children);
  
    if (!hasContent && icon) {
      return (
        <div className={`${styles['button-box']} ${styles['button-box__icon-only']}`}>
          <Icon {...icon} color={contrasting_color} />
        </div>
      );
    }
  
    return (
      <div className={styles['button-box']}>
        {iconPosition === 'left' && icon && (
          <Icon {...icon} color={contrasting_color} />
        )}
        {_children}
        {iconPosition === 'right' && icon && (
          <Icon {...icon} color={contrasting_color} />
        )}
      </div>
    );
  };
  
  

  return {
    ...rest,
    ...attributes,
    className,
    
    style,
    disabled,
    children: getButtonContent(),
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
