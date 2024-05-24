import { StoryFn } from '@storybook/react';
import { ConfigRuKit, defaultRuKitConfig } from './ConfigContext';
import ConfigProvider from './ConfigProvider';

export const withConfig =
  (config: ConfigRuKit = defaultRuKitConfig) =>
  (Story: StoryFn) => (
    <ConfigProvider config={config}>
      <Story />
    </ConfigProvider>
  );
