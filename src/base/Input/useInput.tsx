import { useColors } from '@/hook/useColors';
import { InputProps } from './types.local';

export const useInput = ({
  placeholder,
  value,
  isDisabled,
  isLoading, 
  error,
  ...props
}: InputProps) => {
  const { main_color, contrasting_color } = useColors(color);
  const disabled = isLoading || isDisabled;

  return {
    placeholder,
    value,
    disabled,
    error,
    ...props,
  };
};
