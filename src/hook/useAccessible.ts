import React from 'react';
import { useAriaAttributes } from './useAriaAttributes';
import { useAriaRole } from './useAriaRole';
import { useTabIndex } from './useTabIndex';

export type AriaStateProps<T extends React.ElementType> =
  React.ComponentProps<T> & {
    isDisabled?: boolean;
    isLoading?: boolean;
    isRequired?: boolean;
    isInvalid?: boolean;
    isFullWidth?: boolean;
    isExpanded?: boolean;
    isPressed?: boolean;
    isSelected?: boolean;
    isHidden?: boolean;
    hasPopup?: boolean;
    level?: number;
    valueNow?: number | string;
    valueMin?: number | string;
    valueMax?: number | string;
    valueText?: string;
    children?: React.ReactNode;
    icon?: { name: string };
  };

export const useAccessible = <E extends React.ElementType>(
  props: AriaStateProps<E>
): React.ComponentProps<E> => {
  const accessibleProps = useAriaAttributes<E>(props);
  const tabIndex = useTabIndex<E>(props);
  const calculatedRole = useAriaRole<E>(props.type, props.role);

  if (calculatedRole !== undefined) {
    accessibleProps['role'] = calculatedRole;
  }

  if (tabIndex !== undefined) {
    accessibleProps['tabIndex'] = tabIndex;
  }

  return accessibleProps;
};
