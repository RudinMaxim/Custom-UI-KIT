import { colors } from '@/constants';
import React, { ComponentProps } from 'react';
import { useIcon } from './useIcon';

// TODO type textPosition = 'left' | 'right' | 'top' | 'bottom';

export interface IconProps extends ComponentProps<'i'> {
  name: string;
  customIcon?: React.ReactSVGElement;
  color?: string;
  size?: number;
  // TODO text?: TextProps;
  // TODO textPosition?: textPosition; TODO
  className?: string;
  style?: React.CSSProperties;
}

export const Icon = ({
  color = colors.black['500'],
  size = 24,
  ...props
}: IconProps): JSX.Element => {
  const { children, ...iconProps } = useIcon({
    size,
    color,
    ...props,
  });

  return <i {...iconProps} children={children} />;
};
