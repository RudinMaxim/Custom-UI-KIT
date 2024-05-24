import { AriaStateProps } from '@/types/AriaState';
import React from 'react';
import { useAriaAttributes } from '../hook/useAriaAttributes';
import { useTabIndex } from '../hook/useTabIndex';

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

