const path = require('path');

module.exports = {
  entry: './client/src/app.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './client/dist'),
  },
}