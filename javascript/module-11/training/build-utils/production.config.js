const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = env => ({
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        // Если загрузчиков более чем 1, указываются слева направо, а выполняются справо - налево
        use: [
          // из js вытягивает в отдельный файл
          MiniCssExtractPlugin.loader,
          // вытягивает css js
          'css-loader',
          // сначала пройдется автопрефиксер
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new OptimizeCssAssetsPlugin({}),
  ],
});
