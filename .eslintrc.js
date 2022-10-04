module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/no-cycle': [0],
    'react/no-array-index-key': [0],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
  },
};
