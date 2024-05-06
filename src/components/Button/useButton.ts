import { ComponentProps, ReactNode } from 'react';

type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'link';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

interface ButtonProps extends ComponentProps<'button'> {
	variant?: ButtonVariant;
	size?: ButtonSize;
	color?: string;
	isLoading?: boolean;
	isDisabled?: boolean;
	isFullWidth?: boolean;
	className?: string;
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
}

export const useButton = (props) => {
	const {} = props;

    return {
        props,
    }
};
