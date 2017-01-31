var path = require('path');

module.exports = {
  entry: './private/views/main.jsx',
  output: { path: __dirname, filename: './public/assets/js/bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
