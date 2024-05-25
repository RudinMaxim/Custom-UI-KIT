import { StoryFn } from '@storybook/react';
import { ReactNode, createContext, useContext } from 'react';
import { DefaultRuKitConfig } from './index';
import { ConfigRuKit } from './type';

export const ConfigRuKitContext = createContext<ConfigRuKit>(
  DefaultRuKitConfig.light
);

export const useConfigRuKit = (config?: Partial<ConfigRuKit>): ConfigRuKit => {
  return {
    ...useContext(ConfigRuKitContext),
    ...config,
  };
};

export function ProviderRuKit({
  children,
  config,
}: {
  children: ReactNode;
  config?: Partial<ConfigRuKit>;
}) {
  return (
    <ConfigRuKitContext.Provider
      value={{
        ...useContext(ConfigRuKitContext),
        ...config,
      }}
    >
      {children}
    </ConfigRuKitContext.Provider>
  );
}

export const withConfigRuKit =
  (config: Partial<ConfigRuKit> = DefaultRuKitConfig.light) =>
  (Story: StoryFn) => (
    <ProviderRuKit config={config}>
      <Story />
    </ProviderRuKit>
  );
