export function getStyle(
  style: React.CSSProperties,
  variables?: Array<[key: string, value: string]>,
): React.CSSProperties {
  const combinedStyle: React.CSSProperties = { ...style };

  if (variables) {
    for (const [key, value] of variables) {
      combinedStyle[key as any] = value;
    }
  }

  return combinedStyle;
}