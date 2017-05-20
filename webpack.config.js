var ExtractTextPlugin = require('extract-text-webpack-plugin'),
  HTMLWebpackPlugin = require('html-webpack-plugin'),
  webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  devServer: {
    colors: true,
    historyApiFallback: true
  },
  entry: [
    'babel-polyfill', './app/index.js'
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel"
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss')
      }
    ]
  },
  postcss: [require('postcss-cssnext')()],
  plugins: [
    new ExtractTextPlugin('styles.css', {allChunks: true}),
    new HTMLWebpackPlugin({
      template: __dirname + '/app/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
