import clsx from 'clsx';
import { CSSProperties, useMemo } from 'react';

// type StyleValue =
//   | string
//   | CSSProperties
//   | (() => string)
//   | (() => CSSProperties);

interface UseStyledProps<T extends object> {
  styles: T;
  className?: string;
  // variables?: Record<string, StyleValue>;
}

export function useStyled<T extends object>({
  styles,
  className,
  // variables,
}: UseStyledProps<T>): { className: string; style: CSSProperties } {
  const computedStyles = useMemo(() => {
    return Object.entries(styles).reduce(
      (acc, [key, value]) => {
        if (typeof value === 'object' && !Array.isArray(value)) {
          const modifiers = Object.entries(value).reduce(
            (modAcc, [modKey, modValue]) => {
              modAcc[`${key}-${modKey}`] =
                typeof modValue === 'function' ? modValue() : modValue;
              return modAcc;
            },
            {} as Record<string, string | CSSProperties>
          );
          acc = { ...acc, ...modifiers };
        } else {
          acc[key] = value;
        }
        return acc;
      },
      {} as Record<string, string | CSSProperties>
    );
  }, [styles]);

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
    style: computedStyles,
  };
}
