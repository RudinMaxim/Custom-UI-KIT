import { AriaStateProps } from '@/types/Aria.type';

/**
 * Determines the appropriate `tabIndex` value for an element based on its props.
 *
 * If a custom `tabIndex` is provided, it will be used. Otherwise, the function
 * will determine the default `tabIndex` based on the element's type and disabled
 * state.
 *
 * @param props - The props of the element.
 * @returns The appropriate `tabIndex` value, or `undefined` if the element should not be focusable.
 */
export const useTabIndex = <T extends React.ElementType>(
  props: AriaStateProps<T>
): number | undefined => {
  const { isDisabled, tabIndex: customTabIndex, role } = props;

  if (customTabIndex !== undefined) {
    return customTabIndex;
  }

  const focusableElements = ['button', 'input', 'select', 'textarea', 'a'];

  if (isDisabled) {
    return -1;
  } else if (focusableElements.includes(role as string)) {
    return 0;
  }

  return undefined;
};
