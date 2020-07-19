/* eslint linebreak-style: ["error", "windows"] */

const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const cssnano = require('cssnano');
const StylelintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map((item) => {
    const parts = item.split('.');
    const name = parts[0];
    const extension = parts[1];
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      inject: false,
    });
  });
}

const htmlPlugins = generateHtmlPlugins('./src/html/views');

module.exports = {
  entry: [
    './src/js/index.js', './src/scss/style.scss',
  ],
  output: {
    filename: './js/bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader',
          },
        },
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        {
          loader: 'eslint-loader',
        },
        ],
      },
      {
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, 'src/scss'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: () => [
                cssnano({
                  preset: [
                    'default',
                    {
                      discardComments: {
                        removeAll: true,
                      },
                    },
                  ],
                }),
                // eslint-disable-next-line global-require
                require('autoprefixer')({}),
              ],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        include: path.resolve(__dirname, 'src/html/includes'),
        use: ['raw-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/style.bundle.css',
    }),
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: './src/fonts',
          to: './fonts',
        },
        {
          from: './src/favicon',
          to: './favicon',
        },
        {
          from: './src/img',
          to: './img',
        },
        {
          from: './src/uploads',
          to: './uploads',
        },
      ],
    }),
    new StylelintPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      Vue: ['vue/dist/vue.esm.js', 'default'],
    }),
    new MomentLocalesPlugin({
      localesToKeep: ['es-us', 'ru'],
    }),
  ].concat(htmlPlugins),
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js', // 'vue/dist/vue.common.js' для webpack 1
    },
  },
};
