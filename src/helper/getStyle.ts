export function getStyle(
  style: React.CSSProperties,
  variables?: Array<[key: string, value: string]>,
): React.CSSProperties {
  return {
    ...variables,
    ...style,
  } as React.CSSProperties;
}
