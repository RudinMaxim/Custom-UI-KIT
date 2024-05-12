import { colors } from '@/constants';

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
      parseFloat(a) >= 0 &&
      parseFloat(a) <= 1;
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
      parseFloat(a) >= 0 &&
      parseFloat(a) <= 1;
    return validHsla ? `hsla(${h}, ${s}%, ${l}%, ${a})` : defaultColor;
  } else {
    // If the color is not recognized, return the default color
    return defaultColor;
  }
}

/**
 * Calculates a contrasting color for the given color.
 *
 * @param color - The color to calculate the contrasting color for.
 * @returns The contrasting color.
 */
export function contrastingColor(color: string): string {
  // Remove the hash symbol (#) from the color code
  const colorWithoutHash = color.slice(1);

  // Convert the hex code to RGB values (assuming 3 characters per channel)
  const red = parseInt(colorWithoutHash.slice(0, 2), 16);
  const green = parseInt(colorWithoutHash.slice(2, 4), 16);
  const blue = parseInt(colorWithoutHash.slice(4), 16);

  // Calculate the brightness of the color
  const brightness = (red * 299 + green * 587 + blue * 114) / 1000;

  let contrastingRed: number;
  let contrastingGreen: number;
  let contrastingBlue: number;

  // If the color is light, make the contrasting color dark
  if (brightness > 125) {
    contrastingRed = 0;
    contrastingGreen = 0;
    contrastingBlue = 0;
  } else {
    // If the color is dark, make the contrasting color light
    contrastingRed = 255;
    contrastingGreen = 255;
    contrastingBlue = 255;
  }

  // Convert contrasting RGB values back to hex code (assuming 2 digits per channel)
  const contrastingColorHex = `#${contrastingRed.toString(16).padStart(2, '0')}${contrastingGreen.toString(16).padStart(2, '0')}${contrastingBlue.toString(16).padStart(2, '0')}`;

  return contrastingColorHex;
}
