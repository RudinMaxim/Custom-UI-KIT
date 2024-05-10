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
  icon?: { name: string };
};

export const getAccessibleAttributes = <T extends React.ElementType>(
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
    hasPopup,
    level,
    valueNow,
    valueMin,
    valueMax,
    valueText,
    children,
    icon,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    ...otherProps
  } = props;

  // @ts-ignore
  const accessibleProps: React.ComponentProps<T> = {
    ...otherProps,
  };

  if (ariaLabel) {
    accessibleProps['aria-label'] = ariaLabel;
  } else if (!children) {
    accessibleProps['aria-label'] = `${props.type || 'Element'} ${icon?.name}`;
  } else {
    accessibleProps['aria-label'] =
      `${props.type || 'Element'} ${children.toString()}`;
  }

  if (ariaLabelledBy) {
    accessibleProps['aria-labelledby'] = ariaLabelledBy;
  }

  if (ariaDescribedBy) {
    accessibleProps['aria-describedby'] = ariaDescribedBy;
  }

  if (isDisabled) {
    accessibleProps['aria-disabled'] = true;
  }

  if (isLoading) {
    accessibleProps['aria-busy'] = true;
  }

  if (isRequired) {
    accessibleProps['aria-required'] = true;
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
