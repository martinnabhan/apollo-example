module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    warnOnUnsupportedTypeScriptVersion: false,
  },
  rules: {
    // camelcaseルールと一緒なので、こっちの方を無効にする
    '@typescript-eslint/camelcase': [0],
    // タイプでreturn typeすでに指定してる
    '@typescript-eslint/explicit-function-return-type': { allowTypedFunctionExpressions: true },
    '@typescript-eslint/no-unused-vars': [2, { argsIgnorePattern: '^_$'}],
    // TODO: これを解決して
    'import/no-cycle': 0,
    'no-unused-vars': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
};
