import { Size, TWeights, colors, sizes } from '@/token';
import { HTMLAttributes } from 'react';
import { useTypography } from './useTypography';

export type typographyRole =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'div'
  | 'strong'
  | 'em'
  | 'code';

export type textDecoration = 'underline' | 'line-through' | 'none';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  role?: typographyRole;
  size?: Size;
  color?: string;
  fontWeight?: TWeights;
  lineHeight?: number;
  textDecoration?: textDecoration;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export function Typography({
  role = 'span',
  size = sizes.medium,
  color = colors.black['500'],
  fontWeight = 400,
  lineHeight = 1.5,
  textDecoration = 'none',
  ...rest
}: TypographyProps) {
  const { children, Element, ...TextProps } = useTypography({
    role,
    size,
    color,
    fontWeight,
    lineHeight,
    textDecoration,
    ...rest,
  });

  return <Element {...TextProps}>{children}</Element>;
}
