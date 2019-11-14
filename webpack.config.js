const path = require('path')

module.export = {
  module: {
    rules: [{
      test: /\.tsx$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  }

}