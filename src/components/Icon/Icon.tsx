import React, { ComponentProps } from 'react';
import { useIcon } from './useIcon';

export interface IconProps extends ComponentProps<'span'> {
  name: string;
  customIcon?: React.ReactSVGElement;
  color?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const Icon = (props: IconProps): JSX.Element => {
  const { children, ...rest } = useIcon(props);

  return <span {...rest}>{children}</span>;
};
