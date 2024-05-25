import {
  BorderRadius,
  Device,
  Scale,
  Shape,
  Size,
  TFontSizes,
  TSpacing,
  animations,
  fontWeights,
  letterSpacings,
  lineHeights,
  shadows,
  transforms,
  transitions,
  zIndices,
} from '@/token';

export interface ConfigRuKit {
  theme?: 'light' | 'dark' | 'highContrast';
  size?: keyof Size;
  fontSize?: TFontSizes;
  fontFamily?: string;
  fontWeight?: number | keyof typeof fontWeights;
  lineHeight?: number | keyof typeof lineHeights;
  letterSpacing?: number | string | keyof typeof letterSpacings;
  color?: {
    primary: string;
    secondary: string;
    accent?: string;
    error?: string;
    warning?: string;
  };
  spacing?: TSpacing;
  borderRadius?: BorderRadius;
  breakpoints?: Record<Device, number>;
  boxShadow?: string | keyof typeof shadows;
  opacity?: Record<string, number>;
  transition?: string | keyof typeof transitions;
  zIndex?: typeof zIndices;
  shapes?: Record<Shape, string>;
  scales?: Record<Scale, number>;
  transforms?: typeof transforms;
  animations?: typeof animations;
}
