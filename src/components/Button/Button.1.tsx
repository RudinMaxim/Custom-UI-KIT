import { parseColor } from '@/utils/parseColor';
import { ButtonProps } from './Button';
import style from './Button.module.scss';


export function Button({
  children, variant = 'solid', size = 'md', color = '#000', isLoading = false, isDisabled = false, ...props
}: ButtonProps) {
  return (
    <button
      className={`
        ${style.button}
        ${style[`button__${variant}`]}
        ${style[`button__${size}`]}
       
      `}
      style={{ '--button-color': parseColor(color) }}
      disabled={isDisabled || isLoading}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
}
