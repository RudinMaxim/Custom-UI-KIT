import { colors } from '@/token';
import React, { ComponentProps } from 'react';
import { useIcon } from './useIcon';

type textPosition = 'left' | 'right' | 'top' | 'bottom';

export interface IconProps extends ComponentProps<'i'> {
  name: string;
  customIcon?: React.ReactSVGElement;
  color?: string;
  textColor?: string;
  size?: number;
  text?: string;
  textPosition?: textPosition;
  className?: string;
  style?: React.CSSProperties;
}

export const Icon = ({
  color = colors.black['500'],
  size = 24,
  textPosition = 'bottom',
  text,
  ...props
}: IconProps): JSX.Element => {
  const { children, ...iconProps } = useIcon({
    size,
    color,
    text,
    textPosition,
    ...props,
  });

  return <span {...iconProps} children={children} />;
};
