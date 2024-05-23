import React from 'react';
import styles from './Input.module.scss';
import { InputProps } from './types.local';
import { useInput } from './useInput';

export const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  disabled,
  error,
  ...props
}) => {
  const { inputProps, inputClasses } = useInput({ placeholder, value, onChange, disabled, error });

  return (
    <div className={styles.inputContainer}>
      <input
        {...inputProps}
        {...props}
        className={`${styles.input} ${inputClasses}`}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};