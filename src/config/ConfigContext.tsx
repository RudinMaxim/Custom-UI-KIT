import { createContext, useContext } from 'react';

export type Size = {
  extraSmall: string;
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
};

interface borderRadius extends Size {
  none: string;
  full: string;
}

export interface ConfigRuKit {
  theme: 'light' | 'dark';
  fontSize: Size;
  color: {
    primary: string;
    secondary: string;
  };
  spacing: Size;
  size: keyof Size;
  borderRadius: borderRadius;
}

export const defaultConfig: ConfigRuKit = {
  theme: 'light',
  fontSize: {
    extraSmall: '0.875rem',
    small: '1.125rem',
    medium: '1.5rem',
    large: '1.875rem',
    extraLarge: '2.25rem',
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
  color: {
    primary: '#fff',
    secondary: '#000',
  },
};

export const ConfigContext = createContext<ConfigRuKit | undefined>(undefined);

export const useConfig = (): ConfigRuKit => {
  const config = useContext(ConfigContext);
  return config || defaultConfig;
};
