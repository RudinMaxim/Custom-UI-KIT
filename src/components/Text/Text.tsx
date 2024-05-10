import { colors } from '@/constants';
import { Size, WeightRole } from '@/types/props.type';
import { HTMLAttributes } from 'react';
import { useText } from './useText';

export type TextRole =
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

export interface TextProps extends HTMLAttributes<HTMLElement> {
  role?: TextRole;
  size?: Size;
  color?: string;
  fontWeight?: WeightRole;
  lineHeight?: number;
  textDecoration?: textDecoration;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export function Text({
  role = 'span',
  size = 'medium',
  color = colors.black,
  fontWeight = 'normal',
  lineHeight = 1.5,
  textDecoration = 'none',
  ...rest
}: TextProps) {
  const { children, Element, ...TextProps } = useText({
    role,
    size,
    color,
    fontWeight,
    lineHeight,
    textDecoration,
    ...rest,
  });
  // @ts-ignore
  return <Element {...TextProps}>{children}</Element>;
}
