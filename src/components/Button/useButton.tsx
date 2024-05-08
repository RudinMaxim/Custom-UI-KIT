import { colors } from '@/constants';
import { contrastingColor, mergeClass, parseColor } from '@/utils';
import { Icon, Loader } from '../index';
import { ButtonProps } from './Button';
import styles from './Button.module.scss';

export function useButton(props: ButtonProps) {
  const getButtonClasses = (props: ButtonProps): string => {
    const { variant = 'solid', size = 'md', isFullWidth, className } = props;
    return mergeClass(
      styles.button,
      styles[`button__${variant}`],
      styles[`button__${size}`],
      isFullWidth ? styles.button__fullWidth : '',
      className
    );
  };

  const getButtonStyle = (props: ButtonProps) => {
    const { color } = props;
    return {
      ...props.style,
      '--button-content-color': contrastingColor(parseColor(color)),
      '--button-background-color': parseColor(color),
    };
  };

  const getContent = (props: ButtonProps): JSX.Element => {
    const { isLoading, icon, iconPosition, children, color } = props;

    if (isLoading) {
      return <Loader color={color ?? colors.white} size="sm" />;
    }

    return (
      <div className={styles.button__box}>
        {iconPosition === 'left' && icon && (
          <Icon
            {...icon}
            color={contrastingColor(props.color ?? colors.white)}
          />
        )}
        {children}
        {iconPosition === 'right' && icon && (
          <Icon
            {...icon}
            color={contrastingColor(props.color ?? colors.white)}
          />
        )}
      </div>
    );
  };

  return {
    ...props,
    children: getContent(props),
    className: getButtonClasses(props),
    style: getButtonStyle(props),
    disabled: props.isDisabled || props.isLoading,
  };
}
