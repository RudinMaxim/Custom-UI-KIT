import { useIcon } from './useIcon';

export interface IconProps {
  name: string;
  customIcon?: React.ReactSVGElement;
  color?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

export const Icon = (props: IconProps): JSX.Element => {
  const { children, ...rest } = useIcon(props);

  return <div {...rest}>{children}</div>;
};
