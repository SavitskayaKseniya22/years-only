
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
  },
  module: {
      rules: [
         { 
          test: /\.js$/, 
          exclude: /node_modules/, 
          use: {
            loader: 'babel-loader',
          },
        },{
           test: /\.tsx?$/,
           use: 'ts-loader',
           exclude: /node_modules/
         },{
        test: /\.[cs]([ac])*?ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      ]
  },
  resolve: {
      extensions: ['.tsx', '.ts', '.js'] 
    },
  plugins:[
    new HtmlWebpackPlugin({
      title: 'Years',
      template:"./src/index.html"
      
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost', 
    historyApiFallback: true,
    port: 3000, 
    open: true,  
    hot: true 
  }
}