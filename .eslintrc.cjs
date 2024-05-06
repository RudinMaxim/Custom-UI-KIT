module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
  ],
  overrides: [
    {
      files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      rules: {
        'storybook/hierarchy-separators': 'error',
        'storybook/default-exports': 'off',
      },
    },
    {
      files: ['vite.config.ts', 'src/vite-env.d.ts'],
      rules: {
        'storybook/hierarchy-separators': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'storybook'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'storybook/await-interactions': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};