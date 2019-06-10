/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env) => {
  const entry = [
    './src/index.tsx',
    'whatwg-fetch',
  ];

  const devtool = 'inline-source-map';

  const optimization = {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  };

  const module = {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
    ],
  };

  const resolve = {
    extensions: ['.js', '.ts', '.tsx', '.json'],
  };

  const plugins = [
    // momentのいらないlocaleを削除する
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    // [contenthash]でキャッシュを防いでいるため、html-webpack-pluginで<script>のsrcを自動的に作成する
    new HtmlWebpackPlugin({
      filename: `${__dirname}/public/index.html`,
      inject: false,
      template: 'index.ejs',
    }),
  ];

  const output = {
    filename: 'runtime.js',
    path: `${__dirname}/public/js`,
    publicPath: '/js/',
    chunkFilename: '[name].js',
  };

  const devServer = {
    hot: true,
    host: '0.0.0.0',
    contentBase: `${__dirname}/public/`,
    overlay: true,
  };

  module.rules.push({
    test: /\.jsx?$/,
    include: /node_modules/,
    use: ['react-hot-loader/webpack'],
  });

  plugins.push(new webpack.HotModuleReplacementPlugin());

  return {
    entry,
    devtool,
    output,
    optimization,
    module,
    resolve,
    plugins,
    devServer,
  };
};
