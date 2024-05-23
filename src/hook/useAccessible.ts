import React, { useMemo } from 'react';

export type AriaProps<T extends React.ElementType> = React.ComponentProps<T> & {
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
  state: AriaProps<E>
) => {
  const tabIndex = getTabIndex<E>(state);

  const accessibleProps = useMemo(
    () => getAccessibleAttributes<E>(state),
    [state]
  );

  if (tabIndex !== undefined) {
    accessibleProps['tabIndex'] = tabIndex;
  }

  return accessibleProps;
};

/**
 * Determines the appropriate ARIA role for a given React element type.
 *
 * If a role is provided as a prop, it will be used. Otherwise, the function will
 * determine the most appropriate role based on the element type.
 *
 * Native HTML elements like `button`, `input`, `select`, `textarea`, and `a` will
 * not have a role assigned. Elements like `section`, `nav`, `aside`, and `main`
 * will be assigned the `region` role. All other elements will have a role
 * assigned based on the element type.
 *
 * @param elementType - The React element type to determine the role for.
 * @param role - The optional role prop provided for the element.
 * @returns The appropriate ARIA role for the element, or `undefined` if no role
 * should be assigned.
 */
const getRole = (
  elementType: React.ElementType,
  role?: string
): string | undefined => {
  // Если роль передана через пропсы, использовать ее
  if (role) {
    return role;
  }

  // Элементы, для которых не нужно задавать роль
  const nativeRolesElements = ['button', 'input', 'select', 'textarea', 'a'];

  // Элементы, которым нужно присвоить роль 'region'
  const regionRolesElements = ['section', 'nav', 'aside', 'main'];

  if (nativeRolesElements.includes(elementType as string)) {
    return undefined; // Не задавать роль для этих элементов
  }

  if (regionRolesElements.includes(elementType as string)) {
    return 'region';
  }

  // Для остальных элементов присвоить роль на основе типа элемента
  return elementType as string;
};

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
const getTabIndex = <T extends React.ElementType>(
  props: AriaProps<T>
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

/**
 * Generates a React component with accessible attributes based on the provided element type.
 * @template T - The React element type to generate accessible attributes for.
 * @param props - The props object for the React component.
 * @returns A React component with accessible attributes.
 */
const getAccessibleAttributes = <T extends React.ElementType>(
  props: AriaProps<T>
): React.ComponentProps<T> => {
  const {
    isDisabled,
    isLoading,
    isRequired,
    isInvalid,
    isExpanded,
    isPressed,
    isSelected,
    isHidden,
    isFullWidth,
    hasPopup,
    level,
    valueNow,
    valueMin,
    valueMax,
    valueText,
    children,
    icon,
    role,
    type,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    ...otherProps
  } = props;

  const accessibleProps: React.ComponentProps<T> = {
    ...otherProps,
  } as React.ComponentProps<T>;

  const elementType = (type as React.ElementType) ?? role;
  const calculatedRole = getRole(elementType, role);
  if (calculatedRole) {
    accessibleProps['role'] = calculatedRole;
  }

  const elementsWithoutAriaLabel = [
    'caption',
    'code',
    'dd',
    'dt',
    'dfn',
    'del',
    'em',
    'ins',
    'mark',
    'p',
    'strong',
    'sub',
    'sup',
    'time',
    'span',
    'div',
  ];

  if (ariaLabel) {
    accessibleProps['aria-label'] = ariaLabel;
  } else if (children) {
    accessibleProps['aria-label'] =
      `${elementType || ''} ${children.toString()}`;
  } else if (icon?.name) {
    accessibleProps['aria-label'] = `${elementType || 'Element'} ${icon.name}`;
  } else {
    accessibleProps['aria-label'] = elementType || 'Element';
  }

  if (elementsWithoutAriaLabel.includes(elementType as string)) {
    delete accessibleProps['aria-label'];
  }

  if (isLoading) {
    accessibleProps['aria-live'] = 'polite';
    accessibleProps['aria-relevant'] = 'additions text';
    accessibleProps['aria-busy'] = true;
  }

  if (
    elementType !== 'button' &&
    elementType !== 'input' &&
    elementType !== 'textarea'
  ) {
    accessibleProps['role'] = type || role || 'region';
  }

  if (ariaLabelledBy) {
    accessibleProps['aria-labelledby'] = ariaLabelledBy;
  }

  if (ariaDescribedBy) {
    accessibleProps['aria-describedby'] = ariaDescribedBy;
  }

  if (isDisabled) {
    accessibleProps['disabled'] = true;
    accessibleProps['aria-disabled'] = true;
    accessibleProps['tabIndex'] = -1;
  } else {
    accessibleProps['tabIndex'] = 0;
  }

  if (isRequired) {
    if (role === 'input' || role === 'textarea') {
      accessibleProps['required'] = true;
    }

    accessibleProps['aria-required'] = true;
  }

  if (isFullWidth) {
    accessibleProps['aria-orientation'] = 'vertical';
  }

  if (isInvalid) {
    accessibleProps['aria-invalid'] = true;
  }

  if (isExpanded !== undefined) {
    accessibleProps['aria-expanded'] = isExpanded;
  }

  if (isPressed !== undefined) {
    accessibleProps['aria-pressed'] = isPressed;
  }

  if (isSelected !== undefined) {
    accessibleProps['aria-selected'] = isSelected;
  }

  if (isHidden !== undefined) {
    accessibleProps['aria-hidden'] = isHidden;
  }

  if (hasPopup) {
    accessibleProps['aria-haspopup'] = true;
  }

  if (level !== undefined) {
    accessibleProps['aria-level'] = level;
  }

  if (valueNow !== undefined) {
    accessibleProps['aria-valuenow'] = valueNow;
  }

  if (valueMin !== undefined) {
    accessibleProps['aria-valuemin'] = valueMin;
  }

  if (valueMax !== undefined) {
    accessibleProps['aria-valuemax'] = valueMax;
  }

  if (valueText) {
    accessibleProps['aria-valuetext'] = valueText;
  }

  return accessibleProps;
};
