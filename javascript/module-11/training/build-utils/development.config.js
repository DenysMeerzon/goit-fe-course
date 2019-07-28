const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => ({
  // помогает при дебаге, отображать визуально понятный (читабельный) код
  devtool: 'cheap-eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        // Если загрузчиков более чем 1, указываются слева направо, а выполняются справо - налево
        use: [
          // не выполнится
          'style-loader',
          // из js вытягивает в отдельный файл
          //   MiniCssExtractPlugin.loader,
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
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    // архивирует
    compress: true,
    port: 4040,
    noInfo: true,
    quiet: true,
    clientLogLevel: 'warning',
    // в консоли будет показывать только ошибки
    clientLogLevel: 'error',
    stats: 'errors-only',
    open: true,
  },
});
