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
    open: ["index.html"],
    
    static: {
      directory: path.join(__dirname, "public"),
      watch: true
    },
    
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