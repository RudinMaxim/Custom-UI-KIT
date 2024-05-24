import clsx from 'clsx';
import { CSSProperties, useMemo } from 'react';

interface UseStyledProps<T extends object> {
  baseStyles: T;
  modifiers?: Partial<T>;
  className?: string;
  style?: CSSProperties;
}

export function useStyled<T extends object>({
  baseStyles,
  modifiers = {},
  className,
  style,
}: UseStyledProps<T>): { className: string; style: CSSProperties } {
  const computedStyles = useMemo(() => {
    return Object.entries(baseStyles).reduce((acc, [key, value]) => {
      const modifier = modifiers[key as keyof typeof modifiers];
      acc = {
        ...acc,
        ...(modifier
          ? {
              [key]: typeof value === 'function'
                ? value(modifier)
                : { ...value, ...modifier },
            }
          : { [key]: value }),
      };
      return acc;
    }, {} as T);
  }, [baseStyles, modifiers]);


  const computedClassName = useMemo(
    () =>
      clsx(
        Object.entries(computedStyles).reduce((acc, [, value]) => {
          if (typeof value === 'string') {
            acc.push(value);
          }
          return acc;
        }, [] as string[]),
        className
      ),
    [computedStyles, className]
  );

  return {
    className: computedClassName,
    style: { ...computedStyles, ...style },
  };
}
