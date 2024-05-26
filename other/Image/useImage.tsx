import { getClasses, getStyle } from '@/helper';
import { ImageProps } from './Image';
import styles from './Image.module.scss';

export function useImage(props: ImageProps) {
  const {
    src,
    alt,
    width,
    height,
    style: _style,
    className: _className,
    ...rest
  } = props;

  const style = getStyle({
    width,
    height,
    ..._style,
  });

  const className = getClasses(styles.image, _className);

  return {
    ...rest,
    src,
    alt,
    className,
    style,
  };
}