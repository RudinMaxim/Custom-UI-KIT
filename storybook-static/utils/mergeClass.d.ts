/**
 * Merges an array of CSS class names into a single string.
 *
 * @param classNames - An array of CSS class names, some of which may be `undefined`.
 * @returns A single string containing all the non-`undefined` class names, separated by spaces.
 */
export declare function mergeClass(...classNames: (string | undefined)[]): string;
