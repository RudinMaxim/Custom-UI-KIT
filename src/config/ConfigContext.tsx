import { StoryFn } from '@storybook/react';
import { ReactNode, createContext, useContext } from 'react';
import { DefaultRuKitConfig } from './index';
import { ConfigRuKit } from './type';

export const ConfigRuKitContext = createContext<ConfigRuKit | undefined>(
  undefined
);

export const useConfig = (customConfig?: ConfigRuKit): ConfigRuKit => {
  const config = useContext(ConfigRuKitContext);
  const mergedConfig = config || { ...DefaultRuKitConfig, ...customConfig };

  return mergedConfig;
};

export default function ConfigRuKitProvider({
  children,
  customConfig,
}: {
  children: ReactNode;
  customConfig?: ConfigRuKit;
}) {
  const config = useContext(ConfigRuKitContext);

  const mergedConfig = config || { ...DefaultRuKitConfig, ...customConfig };

  return (
    <ConfigRuKitContext.Provider value={mergedConfig}>
      {children}
    </ConfigRuKitContext.Provider>
  );
}

export const withConfig =
  (config: ConfigRuKit = DefaultRuKitConfig) =>
  (Story: StoryFn) => (
    <ConfigRuKitProvider customConfig={config}>
      <Story />
    </ConfigRuKitProvider>
  );
