
const APP = __dirname;

module.exports =  {
  context: APP,
  entry: {
    app: './src/app.js'
  },
  output: {
    path: '/home/vincent/Bureau/test/public/js/',
    filename: 'app.js'
  },
  module: {
    loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        { test: /\.html$/, loader: 'raw-loader' }
    ]
 },
 node: { fs: 'empty' }
};
