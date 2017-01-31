var path = require('path')
// var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: getEntrySources(['./src/entry.js']),
  debug: true,
  output: {
    path: path.resolve(__dirname, 'build'),
    // publicPath: '/build/',
    publicPath: 'http://0.0.0.0:8080/',
    filename: 'bundle.js'
  },
  devtool: '#source-map',
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: path.join(__dirname, 'src'),
        // include: path.join(__dirname, 'scripts')
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ],
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass?sourceMap'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'url?limit=8192',
          'img'
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'file-loader?name=images/[hash].[ext]'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        // exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel?presets[]=stage-0,presets[]=react,presets[]=es2015'
        ]
      },
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        // exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.styl']
  }
}

function getEntrySources (sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-dev-server/client?http://0.0.0.0:8080')
    sources.push('webpack/hot/only-dev-server')
  }

  return sources
}
