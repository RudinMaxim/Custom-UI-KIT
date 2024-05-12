import type { Preview } from '@storybook/react';
import '../src/styles/globals.scss';
import DocumentationTemplate from './DocumentationTemplate.mdx';

const preview: Preview = {
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
    options: {
      storySort: {
        order: ['Intro', "*"],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
