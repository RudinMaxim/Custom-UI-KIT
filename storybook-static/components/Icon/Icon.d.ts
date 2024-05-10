import { default as React, ComponentProps } from '../../../node_modules/react';

export interface IconProps extends ComponentProps<'i'> {
    name: string;
    customIcon?: React.ReactSVGElement;
    color?: string;
    size?: number;
    className?: string;
    style?: React.CSSProperties;
}
export declare const Icon: ({ color, size, ...props }: IconProps) => JSX.Element;
