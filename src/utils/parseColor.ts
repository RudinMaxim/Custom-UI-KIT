export function parseColor(color: string | undefined, defaultColor = '#000'): string {
  if (!color) {
    return defaultColor;
  }

  // Регулярные выражения для различных форматов цветов
  const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  const rgbRegex = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;
  const rgbaRegex =
    /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(0|1|0\.\d*)\)$/;
  const hslRegex = /^hsl\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/;
  const hslaRegex =
    /^hsla\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%,\s*(0|1|0\.\d*)\)$/;

  // Проверка на соответствие регулярным выражениям
  if (hexRegex.test(color)) {
    return color;
  } else if (rgbRegex.test(color)) {
    const [, r, g, b] = rgbRegex.exec(color) || [];
    return `rgb(${r}, ${g}, ${b})`;
  } else if (rgbaRegex.test(color)) {
    const [, r, g, b, a] = rgbaRegex.exec(color) || [];
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  } else if (hslRegex.test(color)) {
    const [, h, s, l] = hslRegex.exec(color) || [];
    return `hsl(${h}, ${s}%, ${l}%)`;
  } else if (hslaRegex.test(color)) {
    const [, h, s, l, a] = hslaRegex.exec(color) || [];
    return `hsla(${h}, ${s}%, ${l}%, ${a})`;
  } else {
    // Если цвет не распознан, возвращаем цвет по умолчанию
    return defaultColor;
  }
}
