export function getClasses(
  ...classNames: (string | null | undefined)[]
): string {
  return classNames.filter(Boolean).join(' ');
}
