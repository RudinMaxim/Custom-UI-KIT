import { colors } from "@/constants";
import { parseColor } from "@/utils";


describe('parseColor', () => {
  test('returns default color when input is undefined', () => {
    expect(parseColor(undefined)).toBe(colors.black);
  });

  test('returns named color', () => {
    expect(parseColor('red')).toBe(colors.red);
    expect(parseColor('GREEN')).toBe(colors.green); // Case-insensitive
  });

  test('returns hexadecimal color', () => {
    expect(parseColor('#ff0000')).toBe('#ff0000');
    expect(parseColor('#f00')).toBe('#f00');
  });

  test('returns RGB color', () => {
    expect(parseColor('rgb(255, 0, 0)')).toBe('rgb(255, 0, 0)');
    expect(parseColor('rgb(0,128,0)')).toBe('rgb(0, 128, 0)');
  });

  test('returns RGBA color', () => {
    expect(parseColor('rgba(255, 0, 0, 0.5)')).toBe('rgba(255, 0, 0, 0.5)');
    expect(parseColor('rgba(0,128,0,1)')).toBe('rgba(0, 128, 0, 1)');
  });

  test('returns HSL color', () => {
    expect(parseColor('hsl(0, 100%, 50%)')).toBe('hsl(0, 100%, 50%)');
    expect(parseColor('hsl(120,100%,50%)')).toBe('hsl(120, 100%, 50%)');
  });

  test('returns HSLA color', () => {
    expect(parseColor('hsla(0, 100%, 50%, 0.5)')).toBe(
      'hsla(0, 100%, 50%, 0.5)'
    );
    expect(parseColor('hsla(120,100%,50%,1)')).toBe('hsla(120, 100%, 50%, 1)');
  });

  test('returns default color for invalid input', () => {
    expect(parseColor('invalid')).toBe(colors.black);
    expect(parseColor('rgb(300, 0, 0)')).toBe(colors.black);
  });

  test('returns custom default color', () => {
    expect(parseColor(undefined, '#ffffff')).toBe('#ffffff');
    expect(parseColor('invalid', '#cccccc')).toBe('#cccccc');
  });
});

