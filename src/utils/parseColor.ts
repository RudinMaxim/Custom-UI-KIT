import { colors } from '@/constants/colors';

/**
 * Parses a color string and returns a valid CSS color value.
 *
 * This function supports the following color formats:
 * - Named colors (e.g. 'red', 'blue')
 * - Hexadecimal colors (e.g. '#ff0000', '#f00')
 * - RGB colors (e.g. 'rgb(255, 0, 0)')
 * - RGBA colors (e.g. 'rgba(255, 0, 0, 0.5)')
 * - HSL colors (e.g. 'hsl(0, 100%, 50%)')
 * - HSLA colors (e.g. 'hsla(0, 100%, 50%, 0.5)')
 *
 * If the input color string is not recognized, the function will return the provided default color.
 *
 * @param color - The color string to be parsed.
 * @param defaultColor - The default color to be returned if the input color is not recognized.
 * @returns A valid CSS color value.
 */

export function parseColor(
  color: string | undefined,
  defaultColor = colors.black
): string {
  if (!color) {
    return defaultColor;
  }

  // Check if the color is a named color
  const colorKey = color.toLowerCase();
  if (colorKey in colors) {
    return colors[colorKey as keyof typeof colors];
  }

  // Regular expressions for different color formats
  const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  const rgbRegex = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;
  const rgbaRegex =
    /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(0|1|0\.\d*)\)$/;
  const hslRegex = /^hsl\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/;
  const hslaRegex =
    /^hsla\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%,\s*(0|1|0\.\d*)\)$/;

  // Check if the color matches regular expressions
  if (hexRegex.test(color)) {
    return color;
  } else if (rgbRegex.test(color)) {
    const [, r, g, b] = rgbRegex.exec(color) || [];
    const validRgb =
      parseInt(r, 10) >= 0 &&
      parseInt(r, 10) <= 255 &&
      parseInt(g, 10) >= 0 &&
      parseInt(g, 10) <= 255 &&
      parseInt(b, 10) >= 0 &&
      parseInt(b, 10) <= 255;
    return validRgb ? `rgb(${r}, ${g}, ${b})` : defaultColor;
  } else if (rgbaRegex.test(color)) {
    const [, r, g, b, a] = rgbaRegex.exec(color) || [];
    const validRgba =
      parseInt(r, 10) >= 0 &&
      parseInt(r, 10) <= 255 &&
      parseInt(g, 10) >= 0 &&
      parseInt(g, 10) <= 255 &&
      parseInt(b, 10) >= 0 &&
      parseInt(b, 10) <= 255 &&
      (parseFloat(a) >= 0 && parseFloat(a) <= 1);
    return validRgba ? `rgba(${r}, ${g}, ${b}, ${a})` : defaultColor;
  } else if (hslRegex.test(color)) {
    const [, h, s, l] = hslRegex.exec(color) || [];
    const validHsl =
      parseInt(h, 10) >= 0 &&
      parseInt(h, 10) <= 360 &&
      parseInt(s, 10) >= 0 &&
      parseInt(s, 10) <= 100 &&
      parseInt(l, 10) >= 0 &&
      parseInt(l, 10) <= 100;
    return validHsl ? `hsl(${h}, ${s}%, ${l}%)` : defaultColor;
  } else if (hslaRegex.test(color)) {
    const [, h, s, l, a] = hslaRegex.exec(color) || [];
    const validHsla =
      parseInt(h, 10) >= 0 &&
      parseInt(h, 10) <= 360 &&
      parseInt(s, 10) >= 0 &&
      parseInt(s, 10) <= 100 &&
      parseInt(l, 10) >= 0 &&
      parseInt(l, 10) <= 100 &&
      (parseFloat(a) >= 0 && parseFloat(a) <= 1);
    return validHsla ? `hsla(${h}, ${s}%, ${l}%, ${a})` : defaultColor;
  } else {
    // If the color is not recognized, return the default color
    return defaultColor;
  }
}
