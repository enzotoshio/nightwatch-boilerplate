module.exports = {
  env: {
    browser: true,
    es6: true,
    mocha: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'prefer-arrow-callback': 'off',
    'func-names': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
