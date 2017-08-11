const path = require('path')
const { DefinePlugin, optimize: { UglifyJsPlugin } } = require('webpack')

const config = {
  devtool: 'eval',
  entry: ['babel-polyfill', path.join(__dirname, 'src', 'app.js')],
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: [
      '.js', '.jsx', // JavaScript
      '.css', // Styles
      '.png', '.jpg', // images
      '.woff', '.woff2', '.ttf', '.eot', '.svg' // fonts
    ]
  },
  module: {
    rules: [
      {
        test: /\.raw\.jsx?$/,
        exclude: /node_modules/,
        use: ['raw-loader']
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules|\.raw\.jsx?$|ratatosk-(event-handlers|ramda|router|redux)/,
        use: ['babel-loader?cacheDirectory', 'standard-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: (
    process.env.NODE_ENV === 'production'
    ? [
      new DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new UglifyJsPlugin()
    ]
    : []
  )
}

module.exports = config
