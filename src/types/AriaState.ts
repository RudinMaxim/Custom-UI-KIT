export type AriaStateProps<T extends React.ElementType> = React.ComponentProps<T> & {
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
