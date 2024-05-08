import { useIcon } from './useIcon';

export interface IconProps {
  name: string;
  color?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

// TODO изменить size на xl | lg | md | sm
// TODO добавить возмиожность добовлять кастомную иконку

export const Icon = (props: IconProps): JSX.Element => {
  const { children, ...rest } = useIcon(props);

  return <div {...rest}>{children}</div>;
};
