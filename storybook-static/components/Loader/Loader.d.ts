import { default as React, ComponentProps } from '../../../node_modules/react';

type LoaderSize = 'xs' | 'sm' | 'md' | 'lg';
type LoaderVariant = 'rotate';
export interface LoaderProps extends ComponentProps<'div'> {
    variant?: LoaderVariant;
    size?: LoaderSize;
    color?: string;
    style?: React.CSSProperties;
    className?: string;
}
export declare const Loader: React.FC<LoaderProps>;
export {};
