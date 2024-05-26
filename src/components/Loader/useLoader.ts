import { useColors } from '@/hook/useColors';
import { LoaderProps } from './Loader';

export function useLoader(props: LoaderProps) {
  const { style: _style, size, variant, color, className: _className } = props;
  const { main_color } = useColors(color);

  // const style = getStyle({ ..._style }, [['--loader-color', main_color]]);

  // const className = getClasses(
  //   styles.loader,
  //   styles[`loader__${variant}`],
  //   styles[`loader__${size}`],
  //   _className
  // );

  return {
    className: _className,
    style: _className,
  };
}
