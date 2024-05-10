import { default as React, ComponentProps } from '../../../node_modules/react';
import { IconProps } from '../Icon/Icon';

type ButtonVariant = 'solid' | 'outline' | 'ghost';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export interface ButtonProps extends ComponentProps<'button'> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    color?: string;
    isLoading?: boolean;
    isDisabled?: boolean;
    isFullWidth?: boolean;
    icon?: IconProps;
    iconPosition?: 'left' | 'right';
}
export declare function Button({ color, variant, size, isLoading, isDisabled, isFullWidth, iconPosition, ...props }: ButtonProps): React.JSX.Element;
export interface ButtonGroupProps extends ComponentProps<'div'> {
    children: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    style?: React.CSSProperties;
    isAttached?: boolean;
}
export declare function ButtonGroup({ variant, size, isAttached, ...props }: ButtonGroupProps): React.JSX.Element;
export {};
