import {
  Scale,
  Shape,
  Size,
  TBorderRadius,
  TDevice,
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
  size?: keyof Size;
  fontSize?: TFontSizes;
  fontFamily?: string;
  fontWeight?: number | keyof typeof fontWeights;
  lineHeight?: number | keyof typeof lineHeights;
  letterSpacing?: number | string | keyof typeof letterSpacings;
  color?: {
    primary: string;
    secondary: string;
    accent: string;
    error: string;
    warning: string;
    background: string;
    surface: string;
    text: {
      primary: string;
      secondary: string;
    };
  };
  spacing?: TSpacing;
  borderRadius?: TBorderRadius;
  breakpoints?: Record<TDevice, number>;
  boxShadow?: string | keyof typeof shadows;
  opacity?: Record<string, number>;
  transition?: string | keyof typeof transitions;
  zIndex?: typeof zIndices;
  shapes?: Record<Shape, string>;
  scales?: Record<Scale, number>;
  transforms?: typeof transforms;
  animations?: typeof animations;
}
