import { colors } from '@/constants';
import { Weight } from '@/types/Weight';
import { borderRadius } from '@/types/borderRadius';
import { Size } from '@/types/size';
import { createContext, useContext } from 'react';

export interface ConfigRuKit {
  theme?: 'light' | 'dark' | 'highContrast';
  fontSize?: Size;
  fontFamily?: string;
  fontWeight?: Weight;
  lineHeight?: number;
  letterSpacing?: number;
  color?: {
    primary: string;
    secondary: string;
    accent?: string;
    error?: string;
    warning?: string;
  };
  spacing?: Size;
  size?: keyof Size;
  borderRadius?: borderRadius;
  breakpoints?: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  boxShadow?: string;
  zIndex?: {
    modal: number;
    dropdown: number;
    tooltip: number;
  };
}

export const defaultRuKitConfig: ConfigRuKit = {
  theme: 'light',
  fontSize: {
    extraSmall: '0.875rem',
    small: '1.125rem',
    medium: '1.5rem',
    large: '1.875rem',
    extraLarge: '2.25rem',
  },
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 400,
  color: {
    primary: colors.blue['500'],
    secondary: colors.grey['500'],
    accent: colors.green['500'],
    error: colors.red['500'],
    warning: colors.orange['500'],
  },
  spacing: {
    extraSmall: '0.25rem',
    small: '0.5rem',
    medium: '0.75rem',
    large: '1rem',
    extraLarge: '1.25rem',
  },
  borderRadius: {
    extraSmall: '0.25rem',
    small: '0.5rem',
    medium: '0.75rem',
    large: '1rem',
    extraLarge: '1.25rem',
    none: '0',
    full: '50%',
  },
  size: 'medium',
  breakpoints: {
    xs: 320,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  zIndex: {
    modal: 100,
    dropdown: 50,
    tooltip: 25,
  },
};

export const ConfigRuKitContext = createContext<ConfigRuKit | undefined>(
  undefined
);

export const useConfig = (customConfig?: ConfigRuKit): ConfigRuKit => {
  const config = useContext(ConfigRuKitContext);

  const mergedConfig = { ...defaultRuKitConfig, ...customConfig };

  return config || mergedConfig;
};
