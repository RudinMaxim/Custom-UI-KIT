import { mergeClass } from '@/utils/mergeClass';
import { colors } from '../constants/colors';
import { parseColor } from '../utils/parseColor';

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

describe('mergeClass', () => {
  it('should return an empty string when no arguments are provided', () => {
    const result = mergeClass();
    expect(result).toBe('');
  });

  it('should return the same string when a single string is provided', () => {
    const className = 'test-class';
    const result = mergeClass(className);
    expect(result).toBe(className);
  });

  it('should merge multiple strings into a single string separated by spaces', () => {
    const className1 = 'class1';
    const className2 = 'class2';
    const className3 = 'class3';
    const result = mergeClass(className1, className2, className3);
    expect(result).toBe('class1 class2 class3');
  });

  it('should filter out undefined values', () => {
    const className1 = 'class1';
    const className2 = undefined;
    const className3 = 'class3';
    const result = mergeClass(className1, className2, className3);
    expect(result).toBe('class1 class3');
  });

  it('should handle a mix of string and undefined values', () => {
    const className1 = 'class1';
    const className2 = undefined;
    const className3 = 'class3';
    const className4 = undefined;
    const className5 = 'class5';
    const result = mergeClass(
      className1,
      className2,
      className3,
      className4,
      className5
    );
    expect(result).toBe('class1 class3 class5');
  });
});
