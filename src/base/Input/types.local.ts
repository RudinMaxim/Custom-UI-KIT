import { ComponentProps } from 'react';

export interface InputProps extends ComponentProps<'input'> {
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  error?: string;
}
