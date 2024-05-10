import { colors } from '@/constants';
import { contrastingColor, parseColor } from '@/utils';

export function useColors(color?: string) {
  const main_color = parseColor(color ?? colors.black);
  const contrasting_color = contrastingColor(main_color);

  return {
    main_color,
    contrasting_color,
    colors,
  };
}
