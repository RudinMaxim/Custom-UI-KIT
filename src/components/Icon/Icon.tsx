import { useIcon } from './useIcon';

export interface IconProps {
  name: string;
  color?: string;
  size?: number | 24;
  className?: string;
  style?: React.CSSProperties;
}

export const Icon = (props: IconProps): JSX.Element => {
  const { children, ...rest } = useIcon(props);

  return <div {...rest}>{children}</div>;
};
