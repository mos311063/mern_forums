const path = require('path')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/App.js',
  output: {
    filename: 'main.js',
    publicPath: 'dist'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [new MomentLocalesPlugin()]
}
