const path = require('path');

module.exports = {
    entry: './client/index.jsx',
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'mm.bundle.js',
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    resolve: {
      modules: [
        path.join(__dirname, 'node_modules'),
      ],
      extensions: ['.js', '.jsx'],
    },
}
