import { StoryFn } from '@storybook/react';
import { ProviderRuKit } from './ConfigContext';
import { DefaultRuKitConfig } from './DefaultConfig';
import { ConfigRuKit } from './type';

export const withConfigRuKit =
  (config: Partial<ConfigRuKit> = DefaultRuKitConfig.light) =>
  (Story: StoryFn) => (
    <ProviderRuKit config={config}>
      <Story />
    </ProviderRuKit>
  );
