import { colors } from '@/constants';

/**
 * Provides a set of color-related utilities, including the ability to get the main color and a contrasting color.
 *
 *  - Named colors (e.g. 'red', 'blue')
 *  - Named colors and hue (e.g. 'red.100', 'red.900')
 *  - Hex colors (e.g. '#ff0000', '#f00')
 *  - RGB colors (e.g. 'rgb(255, 0, 0)')
 *  - RGBA colors (e.g. 'rgba(255, 0, 0, 0.5)')
 *  - HSL colors (eg 'hsl(0, 100%, 50%)')
 *  - HSLA colors (e.g. 'hsla(0, 100%, 50%, 0.5)')
 *  - HWB colors (e.g. 'hwb(0, 100%, 0%)')
 *  - LAB colors (e.g. 'lab(53.23, 80.11, 67.22)')
 *
 * @param color - An optional color to use as the main color. If not provided, the default black color will be used.
 * @returns An object containing the main color, contrasting color, and the full set of colors.
 */
export function useColors(color?: string) {
  const mainColor = parseColor(color);
  const contrastingColor = getContrastingColor(mainColor);

  return {
    main_color: mainColor,
    contrasting_color: contrastingColor,
    colors,
  };
}

/**
 * Calculates a contrasting color for the given color.
 *
 * @param color - The color to calculate the contrasting color for.
 * @returns The contrasting color.
 */

function getContrastingColor(color: string): string {
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

/**
 * Parses a color string and returns a valid CSS color value.
 *
 * @param color - The color string to be parsed.
 * @param defaultColor - The default color to be returned if the input color is not recognized.
 * @returns A valid CSS color value.
 */
function parseColor(
  color: string | undefined,
  defaultColor = colors.black[500]
): string {
  if (!color) {
    return defaultColor;
  }

  const colorValue =
    getColorValueFromNamedColor(color) || getColorValueFromFormat(color);

  return colorValue || defaultColor;
}

/**
 * Retrieves the color value from named colors (e.g., 'red', 'blue', 'red.100', 'red.900').
 *
 * @param color - The color string to be parsed.
 * @returns The color value if found, or undefined if not found.
 */
function getColorValueFromNamedColor(color: string): string | undefined {
  const [colorName, shade] = color.split('.');
  const colorKey = colorName.toLowerCase();

  const colorObject = colors[colorKey as keyof typeof colors];
  if (colorObject) {
    const shadeKey = shade as unknown as keyof typeof colorObject;
    if (shadeKey in colorObject) {
      return colorObject[shadeKey];
    }

    // If no shade is provided, return the default shade (500)
    return colorObject[500];
  }

  return undefined;
}

/**
 * Retrieves the color value from various color formats (hex, rgb, rgba, hsl, hsla, hwb, lab).
 *
 * @param color - The color string to be parsed.
 * @returns The color value if the format is valid, or undefined if not recognized.
 */
function getColorValueFromFormat(color: string): string | undefined {
  // Regular expressions for different color formats
  const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  const rgbRegex = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;
  const rgbaRegex =
    /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(0|1|0\.\d*)\)$/;
  const hslRegex = /^hsl\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/;
  const hslaRegex =
    /^hsla\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%,\s*(0|1|0\.\d*)\)$/;
  const hwbRegex = /^hwb\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/;
  const labRegex = /^lab\((\d{1,3}),\s*(-?\d{1,3}),\s*(-?\d{1,3})\)$/;

  // Check if the color matches regular expressions
  if (hexRegex.test(color)) {
    return color;
  } else if (rgbRegex.test(color)) {
    const [, r, g, b] = rgbRegex.exec(color) || [];
    return isValidRgb(r, g, b) ? `rgb(${r}, ${g}, ${b})` : undefined;
  } else if (rgbaRegex.test(color)) {
    const [, r, g, b, a] = rgbaRegex.exec(color) || [];
    return isValidRgba(r, g, b, a) ? `rgba(${r}, ${g}, ${b}, ${a})` : undefined;
  } else if (hslRegex.test(color)) {
    const [, h, s, l] = hslRegex.exec(color) || [];
    return isValidHsl(h, s, l) ? `hsl(${h}, ${s}%, ${l}%)` : undefined;
  } else if (hslaRegex.test(color)) {
    const [, h, s, l, a] = hslaRegex.exec(color) || [];
    return isValidHsla(h, s, l, a)
      ? `hsla(${h}, ${s}%, ${l}%, ${a})`
      : undefined;
  } else if (hwbRegex.test(color)) {
    const [, h, w, b] = hwbRegex.exec(color) || [];
    return isValidHwb(h, w, b) ? `hwb(${h}, ${w}%, ${b}%)` : undefined;
  } else if (labRegex.test(color)) {
    const [, l, a, b] = labRegex.exec(color) || [];
    return isValidLab(l, a, b) ? `lab(${l}, ${a}, ${b})` : undefined;
  }

  return undefined;
}

/**
 * Validates RGB color values.
 *
 * @param r - The red value.
 * @param g - The green value.
 * @param b - The blue value.
 * @returns True if the RGB values are valid, false otherwise.
 */
function isValidRgb(r: string, g: string, b: string): boolean {
  const red = parseInt(r, 10);
  const green = parseInt(g, 10);
  const blue = parseInt(b, 10);

  return (
    red >= 0 &&
    red <= 255 &&
    green >= 0 &&
    green <= 255 &&
    blue >= 0 &&
    blue <= 255
  );
}

/**
 * Validates RGBA color values.
 *
 * @param r - The red value.
 * @param g - The green value.
 * @param b - The blue value.
 * @param a - The alpha value.
 * @returns True if the RGBA values are valid, false otherwise.
 */
function isValidRgba(r: string, g: string, b: string, a: string): boolean {
  const red = parseInt(r, 10);
  const green = parseInt(g, 10);
  const blue = parseInt(b, 10);
  const alpha = parseFloat(a);

  return (
    red >= 0 &&
    red <= 255 &&
    green >= 0 &&
    green <= 255 &&
    blue >= 0 &&
    blue <= 255 &&
    alpha >= 0 &&
    alpha <= 1
  );
}

/**
 * Validates HSL color values.
 *
 * @param h - The hue value.
 * @param s - The saturation value.
 * @param l - The lightness value.
 * @returns True if the HSL values are valid, false otherwise.
 */
function isValidHsl(h: string, s: string, l: string): boolean {
  const hue = parseInt(h, 10);
  const saturation = parseInt(s, 10);
  const lightness = parseInt(l, 10);

  return (
    hue >= 0 &&
    hue <= 360 &&
    saturation >= 0 &&
    saturation <= 100 &&
    lightness >= 0 &&
    lightness <= 100
  );
}

/**
 * Validates HSLA color values.
 *
 * @param h - The hue value.
 * @param s - The saturation value.
 * @param l - The lightness value.
 * @param a - The alpha value.
 * @returns True if the HSLA values are valid, false otherwise.
 */
function isValidHsla(h: string, s: string, l: string, a: string): boolean {
  const hue = parseInt(h, 10);
  const saturation = parseInt(s, 10);
  const lightness = parseInt(l, 10);
  const alpha = parseFloat(a);

  return (
    hue >= 0 &&
    hue <= 360 &&
    saturation >= 0 &&
    saturation <= 100 &&
    lightness >= 0 &&
    lightness <= 100 &&
    alpha >= 0 &&
    alpha <= 1
  );
}

/**
 * Validates HWB color values.
 *
 * @param h - The hue value.
 * @param w - The whiteness value.
 * @param b - The blackness value.
 * @returns True if the HWB values are valid, false otherwise.
 */
function isValidHwb(h: string, w: string, b: string): boolean {
  const hue = parseInt(h, 10);
  const whiteness = parseInt(w, 10);
  const blackness = parseInt(b, 10);

  return (
    hue >= 0 &&
    hue <= 360 &&
    whiteness >= 0 &&
    whiteness <= 100 &&
    blackness >= 0 &&
    blackness <= 100 &&
    whiteness + blackness <= 100
  );
}

/**
 * Validates LAB color values.
 *
 * @param l - The lightness value.
 * @param a - The green-red value.
 * @param b - The blue-yellow value.
 * @returns True if the LAB values are valid, false otherwise.
 */
function isValidLab(l: string, a: string, b: string): boolean {
  const lightness = parseInt(l, 10);
  const greenRed = parseInt(a, 10);
  const blueYellow = parseInt(b, 10);

  return (
    lightness >= 0 &&
    lightness <= 100 &&
    greenRed >= -128 &&
    greenRed <= 127 &&
    blueYellow >= -128 &&
    blueYellow <= 127
  );
}
