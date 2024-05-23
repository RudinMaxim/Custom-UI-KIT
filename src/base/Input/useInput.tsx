import { useMemo } from 'react';
import { InputProps } from './types.local';

export const useInput = ({
  placeholder,
  value,
  disabled,
  error,
}: InputProps) => {
  const inputProps = useMemo(
    () => ({
      placeholder,
      value,
      disabled,
    }),
    [placeholder, value, disabled]
  );

  const inputClasses = useMemo(
    () => `${error ? 'error' : ''}`,
    [error]
  );

  return { inputProps, inputClasses };
};