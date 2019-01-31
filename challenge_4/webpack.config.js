var path = require('path');

//coolio
module.exports = {
  entry: './client/apps.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  }
}