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
export declare function parseColor(color: string | undefined, defaultColor?: string): string;
