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
  rules: {
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'warn',
      { devDependencies: ['**/*.test.js', '**/*.spec.js', '**/*.stories.js'] },
    ],
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
  },
};
