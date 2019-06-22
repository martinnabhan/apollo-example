module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    warnOnUnsupportedTypeScriptVersion: false,
  },
  rules: {
    // camelcaseルールと一緒なので、こっちの方を無効にする
    '@typescript-eslint/camelcase': [0],
    // タイプでreturn typeすでに指定してる
    '@typescript-eslint/explicit-function-return-type': { allowTypedFunctionExpressions: true },
    '@typescript-eslint/no-unused-vars': [2, { argsIgnorePattern: '^_$'}],
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'no-unused-vars': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    // Prettierと被ってる
    'react/jsx-one-expression-per-line': 0,
    // Typescriptで対応済み
    'react/prop-types': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
