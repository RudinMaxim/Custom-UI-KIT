import { colors } from "@/constants/colors";
import { mergeClass, parseColor } from "@/utils";
import { LoaderProps } from "./Loader";
import styles from './Loader.module.scss';

export function useLoader({
    variant = 'rotate',
    className,
    size = 'md',
    color = colors.black,
  }: LoaderProps) {
    const defaultClassNames = [
      styles.loader,
      styles[`loader__${variant}`],
      styles[`loader__${size}`],
    ].join(' ');
  
    const loaderStyle = {
      '--loader-color': parseColor(color),
    } as React.CSSProperties;
  
    const mergedClassNames = mergeClass(defaultClassNames, className);
  
    return {
      className: mergedClassNames,
      style: loaderStyle,
    };
  }
  