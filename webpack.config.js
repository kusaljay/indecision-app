const path = require('path');

module.exports = {
  /* mode configuration option tells webpack to use its built-in optimizations accordingly. */
  mode: 'none',

  /* Point or points where to start the application bundling process. If an array is passed then all items will be processed. */
  entry: './src/app.js',

  /* The top-level output key contains set of options instructing webpack on how and where it should output your bundles, assets and anything else you bundle or load with webpack. */
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },

  /* Determine how the different types of modules within a project will be treated. */
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },

  /* Controls if and how source maps are generated. */
  devtool: 'eval-cheap-module-source-map',

  /* Webpack development server */
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
}