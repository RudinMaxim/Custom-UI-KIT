import { mergeClass, parseColor } from '@/utils';
import { LoaderProps } from './Loader';
import styles from './Loader.module.scss';

export function useLoader(props: LoaderProps) {
  const getLoaderClasses = (props: LoaderProps): string => {
    const { variant = 'solid', size = 'md', className } = props;
    return mergeClass(
      styles.loader,
      styles[`loader__${variant}`],
      styles[`loader__${size}`],
      className
    );
  };

  const getLoaderStyle = (props: LoaderProps) => {
    const { color, style } = props;
    return {
      ...style,
      '--loader-color': parseColor(color),
    };
  };

  return {
    className: getLoaderClasses(props),
    style: getLoaderStyle(props),
  };
}
