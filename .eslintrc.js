module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'prettier', 'prettier/react', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', '@typescript-eslint/eslint-plugin'],
  settings: {
    'import/extensions': ['.js', '.ts', '.tsx'],
    'import/resolver': {
      node: { extensions: ['.js', '.ts', '.tsx'] },
      webpack: { config: { extensions: ['.js', '.ts', '.tsx'] } },
    },
  },
  rules: {
    'no-underscore-dangle': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', ts: 'never', tsx: 'never' },
    ],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'warn',
      { devDependencies: ['**/*.test.js', '**/*.spec.js', '**/*.stories.js'] },
    ],
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx', '.ts'] }],
  },
};
