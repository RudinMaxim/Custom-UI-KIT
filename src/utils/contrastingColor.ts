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
