import { mergeClass } from '@/utils';

export function getClasses(classNames: string[] | undefined): string {
  if (classNames === undefined) {
    return '';
  }

  return mergeClass(
    ...classNames.filter((el) => el !== undefined || el !== null)
  );
}
