const prettier = require('eslint-plugin-prettier');

module.exports = {
  files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
  languageOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    globals: {
      React: 'readonly',
      JSX: 'readonly',
    },
  },
  plugins: {
    prettier,
  },
  rules: {
    'prettier/prettier': 'error',
    semi: ['warn', 'always'],
  },
};
