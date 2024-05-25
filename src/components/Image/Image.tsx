import React, { ComponentProps } from 'react';
import { useImage } from './useImage';

export interface ImageProps extends ComponentProps<'img'> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const Image = ({
  width,
  height,
  ...props
}: ImageProps): JSX.Element => {
  const { children, ...imageProps } = useImage({
    width,
    height,
    ...props,
  });

  return <img {...imageProps} children={children} />;
};