import { Icon } from '@/components';
import { Size } from '@/types/props.type';
import { ComponentProps, ReactNode } from 'react';
import { useLink } from './useLink';

export interface LinkProps extends ComponentProps<'a'> {
  href: string;
  children: ReactNode;
  size?: Size;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  isAnchor?: boolean;
  // isReduction?: boolean;
}

export function Link({
  isAnchor = false,
  ...props
}: LinkProps) {
  const {
    children,
    color,
    isAnchor: _isAnchor,
    iconSize,
    ...LinkProps
  } = useLink({ isAnchor, ...props });

  return (
    <a {...LinkProps}>
      {_isAnchor && <Icon name="layers" size={iconSize} color={color} />}
      {children}
    </a>
  );
}
