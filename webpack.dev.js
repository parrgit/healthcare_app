const path = require('path')

module.exports = {
  mode: 'development', // 'production' -> 'development' でbundle.jsがみやすくなる
  entry: './src/food-app/main.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  devtool: 'inline-source-map', //ソースマップをbundle.jsのコメントに追記→chromeのsourceで確認可
  //どのファイルをどのモジュールで扱うかを書く
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /mode_modules/, //node_moduleはts-loaderでは扱わない(bundleはする)
      },
    ],
  },
  //importファイルに拡張子がついてない場合、付加する
  resolve: {
    //tsあるかな？ -> jsあるかな？
    extensions: ['.ts', '.js'],
  },
}
