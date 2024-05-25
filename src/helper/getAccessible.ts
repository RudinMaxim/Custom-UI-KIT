import React from 'react';
import { useAriaAttributes } from '../hook/useAriaAttributes';
import { useTabIndex } from '../hook/useTabIndex';

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
) => {
  const tabIndex = useTabIndex<E>(props);
  const accessibleProps = useAriaAttributes<E>(props);

  if (tabIndex !== undefined) {
    accessibleProps['tabIndex'] = tabIndex;
  }

  return accessibleProps;
};
