import { Loader } from '@/components';
import { getClasses, getStyle } from '@/helper';
import { useAccessible } from '@/hook/useAccessible';
import { useColors } from '@/hook/useColors';
import { Icon } from '../index';
import styles from './Button.module.scss';
import { ButtonGroupProps, ButtonProps } from './type.local';

export function useButton({
  color,
  variant,
  size,
  isLoading = false,
  isDisabled = false,
  isFullWidth = false,
  style: _style,
  className: _className,
  children: _children,
  icon,
  iconPosition = 'left',
  ...props
}: ButtonProps) {
  const { main_color, contrasting_color } = useColors(color);
  const hasIcon = !_children && Boolean(icon);

  const buttonClasses = getClasses(
    styles.button,
    styles[`button__${variant}`],
    styles[`button__${size}${hasIcon ? '-icon' : ''}`],
    isFullWidth ? styles['button__full-width'] : '',
    _className
  );

  const buttonStyle = getStyle({ ..._style }, [
    ['--button-content-color', contrasting_color],
    ['--button-background-color', main_color],
  ]);

  const accessibleProps = useAccessible({
    role: 'button',
    children: _children,
    isDisabled: isLoading || isDisabled,
    isLoading,
    isFullWidth,
    ...props,
  });

  const renderContent = () => {
    if (isLoading) {
      return (
        <Loader
          color={variant === 'outline' ? main_color : contrasting_color}
          size="sm"
        />
      );
    }

    return (
      <div className={styles['button-box']}>
        {iconPosition === 'left' && icon && icon.name && (
          <Icon {...icon} color={contrasting_color} />
        )}
        {_children}
        {iconPosition === 'right' && icon && icon.name && (
          <Icon {...icon} color={contrasting_color} />
        )}
      </div>
    );
  };

  return {
    ...props,
    ...accessibleProps,
    className: buttonClasses,
    style: buttonStyle,
    children: renderContent(),
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
