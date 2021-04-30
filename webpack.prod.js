const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') //「npm run build」でdistのbundle.js以外を消す

module.exports = {
  mode: 'production', // 'production' -> 'development' でbundle.jsがみやすくなる
  entry: './src/food-app/main.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/dist/',
  },
  // devtool: 'inline-so urce-map', //ソースマップをbundle.jsのコメントに追記→chromeのsourceで確認可
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
  plugins: [new CleanWebpackPlugin()],
}
