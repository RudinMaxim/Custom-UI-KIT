import { Size, WeightRole } from '../../types/props.type';
import { HTMLAttributes } from '../../../node_modules/react';

export type TextRole = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'strong' | 'em' | 'code';
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
export declare function Text({ role, size, color, fontWeight, lineHeight, textDecoration, ...rest }: TextProps): import("react/jsx-runtime").JSX.Element;
