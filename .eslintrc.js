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
  extends: ['airbnb-base', 'plugin:prettier/recommended', 'prettier'],
  plugins: ['prettier'],
  rules: {},
};
