const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.tsx',
   devtool: 'inline-source-map',
   output: {
     path: path.join(__dirname, 'build/'),
     publicPath: '/',
     filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(sass|less|css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      { test: /\.tsx$/, use: 'ts-loader' },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./index.html'),
    }),
  ]
}