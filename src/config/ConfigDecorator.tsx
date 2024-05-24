import { StoryFn } from '@storybook/react';
import { ConfigRuKit, defaultConfig } from './ConfigContext';
import ConfigProvider from './ConfigProvider';

export const withConfig =
  (config: ConfigRuKit = defaultConfig) =>
  (Story: StoryFn) => (
    <ConfigProvider config={config}>
      <Story />
    </ConfigProvider>
  );
