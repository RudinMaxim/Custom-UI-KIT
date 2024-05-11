/**
 * Combines a base style object with an optional set of style variables.
 *
 * @param style - The base style object to be combined with the variables.
 * @param variables - An optional array of key-value pairs representing style variables to be applied to the base style.
 * @returns A new style object that combines the base style and the provided variables.
 */
export function getStyle(
  style: React.CSSProperties,
  variables?: Array<[key: string, value: string]>
): React.CSSProperties {
  const combinedStyle: React.CSSProperties = { ...style };

  if (variables) {
    for (const [key, value] of variables) {
      // @ts-ignore
      combinedStyle[key] = value;
    }
  }

  return combinedStyle;
}
