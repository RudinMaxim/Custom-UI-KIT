import { getClasses, getStyle } from '@/helper';
import styles from './Text.module.scss';
import { TypographyProps } from './Typography';

export function useTypography(props: TypographyProps) {
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

  const className = getClasses(styles.text, styles[`text__${size}`], _classe);

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
    Element: role ? role : 'span',
    children,
    className,
    style,
  };
}
