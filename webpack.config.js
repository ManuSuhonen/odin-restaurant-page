// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        // css-loader: Read CSS files from javascript files
        // style-loader: Apply CSS styles
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        // Read local files mentioned in HTML files.
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        // Read image local files mentioned in javascript files.
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
