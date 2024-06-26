import { colors } from '@/token';
import React, { ComponentProps } from 'react';
import { useLoader } from './useLoader';

type LoaderSize = 'xs' | 'sm' | 'md' | 'lg';
type LoaderVariant = 'rotate';

export interface LoaderProps extends ComponentProps<'div'> {
  variant?: LoaderVariant;
  size?: LoaderSize;
  color?: string;
  style?: React.CSSProperties;
  className?: string;
}

// TODO добавить варианты лоудера
export const Loader: React.FC<LoaderProps> = ({
  variant = 'rotate',
  size = 'md',
  color = colors.black['500'],
  className,
  style,
}): React.JSX.Element => {
  const preps = useLoader({
    variant,
    size,
    color,
    className,
    style,
  });

  return <div {...preps} />;
};
