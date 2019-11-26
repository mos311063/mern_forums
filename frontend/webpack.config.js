const path = require("path");
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "dist/index.html"),
  filename: "./index.html"
});
module.exports = {
  // mode: "development",
  entry: "./src/App.js",
  output: {
    filename: "main.js"
  },
  devServer: {
    contentBase: "dist",
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [new MomentLocalesPlugin(), htmlWebpackPlugin]
};
