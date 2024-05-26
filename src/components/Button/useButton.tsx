import { Icon, Loader } from '@/components';
import { ConfigRuKitContext } from '@/config';
import { useAccessible, useColors, useStyled } from '@/hook';
import { useContext } from 'react';
import styles from './Button.module.scss';
import { ButtonProps } from './type.local';

export function useButton(
  props: ButtonProps,
  ref: React.RefObject<HTMLButtonElement>
) {
  const {
    color: customColor,
    variant,
    size,
    isLoading,
    isDisabled,
    isFullWidth,
    style: _style,
    className: _className,
    children: _children,
    icon,
    iconPosition = 'left',
    ...propsButton
  } = props;
  const config = useContext(ConfigRuKitContext)


  const { main_color, contrasting_color } = useColors(customColor);

  
  // const buttonClasses = getClasses(
  //   styles.button,
  //   styles[`button__${variant}`],
  //   styles[`button__${size}${hasIcon ? '-icon' : ''}`],
  //   isFullWidth ? styles['button__full-width'] : '',
  //   _className
  // );

  // const buttonStyle = getStyle({ ..._style }, [
  //   ['--button-content-color', contrasting_color],
  //   ['--button-background-color', main_color],
  // ]);

  const accessibleProps = useAccessible({
    role: 'button',
    children: _children,
    isDisabled: isLoading || isDisabled,
    isLoading,
    isFullWidth,
    ...props,
  });

  const { className, style } = useStyled({
    styles: {
      button: styles.button,
      'variant-variant': styles.variant,
      'size-size': styles.size,
      'sizeWithIcon-sizeWithIcon': hasIcon
        ? styles.sizeWithIcon[size]
        : undefined,
      'fullWidth-fullWidth': isFullWidth ? styles.fullWidth : undefined,
      '--button-content-color': contrasting_color,
      '--button-background-color': main_color,
      ..._style,
    },
    className: _className,
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
    ...propsButton,
    ...accessibleProps,
    className,
    style,
    children: renderContent(),
  };
}

// export function useButtonGroup(props: ButtonGroupProps) {
//   const {
//     children,
//     variant,
//     size,
//     isAttached,
//     className: _className,
//     ...rest
//   } = props;

//   const className = getClasses(
//     styles['button-group'],
//     styles[`button-group__${variant}`],
//     styles[`button-group__${size}`],
//     isAttached ? styles['button__group__attached'] : '',
//     _className
//   );
//   return { children, className, ...rest };
// }
