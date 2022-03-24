const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "public", "js"),
    filename: "app.js",
    publicPath: "/js/"
  },
  devServer: {
    open: true,
    openPage: "index.html",
    contentBase: path.join(__dirname, "public"),
    watchContentBase: true,
    port: 3010
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"]
          }
        }
      }
    ]
  }
};