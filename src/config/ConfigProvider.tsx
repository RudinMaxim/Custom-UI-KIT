import { ReactNode } from 'react';
import { ConfigContext, ConfigRuKit } from './ConfigContext';

export default function ConfigRuKitProvider({
  children,
  config,
}: {
  children: ReactNode;
  config: ConfigRuKit;
}) {
  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
}
