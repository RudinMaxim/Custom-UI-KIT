import { AriaStateProps } from './useAccessible';

/**
 * Generates a React component with accessible attributes based on the provided element type.
 * @template T - The React element type to generate accessible attributes for.
 * @param props - The props object for the React component.
 * @returns A React component with accessible attributes.
 */
export const useAriaAttributes = <T extends React.ElementType>(
  props: AriaStateProps<T>
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
    type,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    ...otherProps
  } = props;

  const accessibleProps: React.ComponentProps<T> = {
    ...otherProps,
  } as React.ComponentProps<T>;

  const elementType = type as React.ElementType;

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
