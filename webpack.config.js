const path = require("path")
const HtmlWebpackPlugin = require ("html-webpack-plugin")

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "_bundle.[hash].js"
  },
  module: {
    rules: [
      {
        //.js結尾的檔案，用babel-loader打包。將程式碼轉成ES5的樣子
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]

}
