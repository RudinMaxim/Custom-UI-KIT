import {
  animations,
  borderRadius,
  breakpoints,
  colors,
  fontFamilies,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  opacities,
  scales,
  shadows,
  shapes,
  spacing,
  transforms,
  transitions,
  zIndices,
} from '@/token';
import { ReactNode, createContext, useContext } from 'react';
import { renderToString } from 'react-dom/server';
import { ConfigRuKit } from './type';

export const ConfigRuKitContext = createContext<ConfigRuKit>({
  size: 'medium',
  fontSize: fontSizes,
  fontFamily: fontFamilies.primary,
  fontWeight: fontWeights[500],
  lineHeight: lineHeights.medium,
  letterSpacing: letterSpacings.normal,
  color: {
    primary: colors.blue[500],
    secondary: colors.grey[500],
    accent: colors.green[500],
    error: colors.red[500],
    warning: colors.orange[500],
    background: colors.white[100],
    surface: colors.grey[100],
    text: {
      primary: colors.grey[800],
      secondary: colors.grey[600],
    },
  },
  spacing: spacing,
  borderRadius: borderRadius,
  breakpoints: breakpoints,
  boxShadow: shadows.medium,
  opacity: opacities,
  transition: transitions.default,
  zIndex: zIndices,
  shapes: shapes,
  scales: scales,
  transforms: transforms,
  animations: animations,
});

interface ProviderRuKitProps {
  children: ReactNode;
  config?: Partial<ConfigRuKit>;
  isSSR?: boolean;
}

export function ProviderRuKit({
  children,
  config,
  isSSR = false,
}: ProviderRuKitProps) {
  const mergedConfig = {
    ...useContext(ConfigRuKitContext),
    ...config,
  };

  if (isSSR) {
    // Рендеринг на стороне сервера
    const html = renderToString(
      <ConfigRuKitContext.Provider value={mergedConfig}>
        {children}
      </ConfigRuKitContext.Provider>
    );

    return <>{html}</>;
  } else {
    // Рендеринг на стороне клиента
    return (
      <ConfigRuKitContext.Provider value={mergedConfig}>
        {children}
      </ConfigRuKitContext.Provider>
    );
  }
}
