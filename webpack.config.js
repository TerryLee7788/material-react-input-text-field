module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.js',
    index: './src/InputField/index.js'
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: '[name].js',
  },
  devServer: {
    contentBase: './dist',
    writetodisk: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          // 'eslint-loader'
        ]
      },
      {
        test: /\.(s[ac]ss|css)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.scss',
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
        },
      },
    },
  }
};