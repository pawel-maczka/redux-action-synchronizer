import { join } from 'path';

const include = join(__dirname, 'src');

export default {
  entry: './src/syncStorage',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'reduxActionSynchronizer'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', include }
    ]
  }
}
