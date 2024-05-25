import React from 'react';
import styles from './Input.module.scss';
import { InputProps } from './types.local';
import { useInput } from './useInput';

export const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  disabled,
  error,
  ...props
}) => {
  const { ...inputProps } = useInput({
    placeholder,
    value,
    disabled,
    error,
    ...props,
  });

  return (
    <div className={`${styles.inputContainer} ${styles.error}`}>
      <input {...inputProps} />
    </div>
  );
};
