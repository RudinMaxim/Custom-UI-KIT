import { colors } from '@/constants';
import { contrastingColor, parseColor } from '@/utils';

/**
 * Provides a set of color-related utilities, including the ability to get the main color and a contrasting color.
 *
 * @param color - An optional color to use as the main color. If not provided, the default black color will be used.
 * @returns An object containing the main color, contrasting color, and the full set of colors.
 */
export function useColors(color?: string) {
  const main_color = parseColor(color ?? colors.black);
  const contrasting_color = contrastingColor(main_color);

  return {
    main_color,
    contrasting_color,
    colors,
  };
}
