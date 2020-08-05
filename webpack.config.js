const path = require("path");
console.log("Dir", __dirname);
module.exports = {
  mode: "development",
  entry: "./client/js/main.js",
  output: {
    path: path.resolve(__dirname, "client"),
    // publicPath: '/client',
    filename: "bundle.js",
  },

  devServer: {
    contentBase: path.join(__dirname, "client"),
    compress: true,
    port: 8080,
  },
};
