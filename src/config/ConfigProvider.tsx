import { ReactNode } from 'react';
import {
  ConfigRuKit,
  ConfigRuKitContext,
  defaultRuKitConfig,
} from './ConfigContext';

export default function ConfigRuKitProvider({
  children,
  config,
}: {
  children: ReactNode;
  config?: ConfigRuKit;
}) {
  const mergedConfig = { ...defaultRuKitConfig, ...config };

  const configToUse = config || mergedConfig;

  return (
    <ConfigRuKitContext.Provider value={configToUse}>
      {children}
    </ConfigRuKitContext.Provider>
  );
}
