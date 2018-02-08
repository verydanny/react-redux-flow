const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ( paths, server ) => {
  let plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: `${ paths.app }/index.hbs`
    })
  ];

  return {
    devtool: "eval",
    cache: true,
    entry: [
      "regenerator-runtime/runtime",
      `webpack-dev-server/client?http://${ server.domain }:${ server.port }`,
      "webpack/hot/only-dev-server",
      paths.app
    ],
    output: {
      filename: "app.js",
      publicPath: "/"
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.hbs$/,
          use: 'handlebars-loader'
        }
      ]
    },
    resolve: {
      alias: {
        app: paths.app
      }
    },
    plugins: plugins
  };
};