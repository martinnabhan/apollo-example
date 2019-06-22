module.exports = api => {
  const presets = [
    ['@babel/typescript', { isTSX: true, allExtensions: true }],
    ['@babel/react', { development: true }],
    ['@babel/env'],
  ];

  const plugins = [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ];

  if (api.env('development')) {
    plugins.push('react-hot-loader/babel');
  }

  return {
    presets,
    plugins,
  };
};
