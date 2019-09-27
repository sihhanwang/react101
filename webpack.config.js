const path = require("path")
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "_bundle.js"
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
  }

}
