const path = require('path');
const webpackMerge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const WebpackBar = require('webpackbar');
const loadModeConfig = env => require(`./build-utils/${env.mode}.config`)(env);

module.exports = env =>
  webpackMerge(
    {
      mode: env.mode,
      // контекст указывается для оптимизации пути к другим файлам
      context: path.resolve(__dirname, 'src'),
      // Итоговые файлы, которые будут сформированы в результате сборки
      entry: './index.js',
      // Объект, в котором указывается абсолютный путь и имя папки, в которую необходимо вкладывать готовый проект
      output: {
        path: path.resolve(__dirname, 'dist'),
        // При указании [name] - файл именуется таким именем, которое указано в entry
        filename: '[name].bundle.js',
      },
      // Загрузчики, применяются к каждому файлу
      module: {
        // Правила для билда
        rules: [
          {
            // Типы файлов
            test: /\.js$/,
            // Файлы, которые мы не хотим обрабатывать
            exclude: /node_modules/,
            // Какие загрузчики мы хотим юзать
            use: ['babel-loader'],
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  name: '[path]/[name].[ext]',
                  limit: 5000,
                },
              },
            ],
          },
          {
            test: /\.hbs$/,
            use: 'handlebars-loader',
          },
          { test: /\.html$/, use: 'html-loader' },
        ],
      },
      // плагины - применяются к результирующему бандлу, после загрузчиков. Могут обновлять, удалять, вытягивать css и т.д.
      plugins: [
        // настройки описываются в репозитории
        // для очищения папки dist, перед сборкой
        new CleanWebpackPlugin(),
        new FriendlyErrorsWebpackPlugin(),
        new WebpackBar(),
      ],
    },
    loadModeConfig(env),
  );
