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

  // Calculate complementary color by inverting each RGB value
  const contrastingRed = 255 - red;
  const contrastingGreen = 255 - green;
  const contrastingBlue = 255 - blue;

  // Convert contrasting RGB values back to hex code (assuming 2 digits per channel)
  const contrastingColorHex = `#${contrastingRed.toString(16).padStart(2, '0')}${contrastingGreen.toString(16).padStart(2, '0')}${contrastingBlue.toString(16).padStart(2, '0')}`;

  return contrastingColorHex;
}
