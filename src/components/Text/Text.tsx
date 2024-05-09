import { ComponentProps } from 'react';

export interface TextProps extends ComponentProps<'span'> {}

export function Text(props: TextProps) {
  const { children, role, ...rest } = props;

  return (
    <span {...rest} role={role}>
      {children}
    </span>
  );
}
