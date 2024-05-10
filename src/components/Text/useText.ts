import { getClasses, getStyle } from '@/helper';
import { TextProps } from './Text';
import styles from './Text.module.scss';

export function useText(props: TextProps) {
  const {
    children,
    role,
    size,
    className: _classe,
    style: _style,
    color,
    fontWeight,
    textDecoration,
    lineHeight,
    ...rest
  } = props;

  const className = getClasses([
    styles.text,
    styles[`text__${size}`],
    _classe ?? '',
  ]);

  const style = getStyle({
    color,
    lineHeight,
    fontWeight,
    textDecoration,
    ..._style,
  });

  return {
    ...rest,
    role,
    Element: (role as keyof JSX.IntrinsicElements) ?? 'div',
    children,
    className,
    style,
  };
}
