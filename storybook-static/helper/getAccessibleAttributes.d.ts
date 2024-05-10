/// <reference types="react" />
type AriaProps<T extends React.ElementType> = React.ComponentProps<T> & {
    isDisabled?: boolean;
    isLoading?: boolean;
    isRequired?: boolean;
    isInvalid?: boolean;
    isExpanded?: boolean;
    isPressed?: boolean;
    isSelected?: boolean;
    hasPopup?: boolean;
    level?: number;
    valueNow?: number | string;
    valueMin?: number | string;
    valueMax?: number | string;
    valueText?: string;
    children?: React.ReactNode;
    icon?: {
        name: string;
    };
};
export declare const getAccessibleAttributes: <T extends import('../../node_modules/react').ElementType<any, keyof import("react").JSX.IntrinsicElements>>(props: AriaProps<T>) => React.ComponentProps<T>;
export {};
