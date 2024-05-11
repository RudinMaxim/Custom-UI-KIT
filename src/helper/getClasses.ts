/**
 * Joins an array of class names into a single string, excluding any null or undefined values.
 *
 * @param classNames - An array of class names, which can include null or undefined values.
 * @returns A string containing the joined class names.
 */
export function getClasses(
  ...classNames: (string | null | undefined)[]
): string {
  return classNames.filter(Boolean).join(' ');
}
