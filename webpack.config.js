const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const base = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ]
      },

    ],
  },
  optimization: {
    minimize: true,
  },
};

if (process.env.NODE_ENV === 'development') {
  tempConfig = {
    ...base,
    entry: path.join(__dirname, 'example/index.tsx'),
    output: {
      path: path.join(__dirname, 'example/dist'),
      filename: 'bundle.js',
      libraryTarget: 'umd',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, './example/index.html'),
        filename: 'index.html',
      }),
    ],
    devServer: {
      port: 8080
    },
  };
} else {
  tempConfig = {
    ...base,
    entry: './src/index.tsx',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      library: 'umd',
      libraryTarget: 'umd',
    },
    externals: {
      'react': {
        root: "React",
        commonjs2: "react",
        commonjs: "react",
        amd: "react"
      },
      'react-dom': {
        root: "ReactDOM",
        commonjs2: "react-dom",
        commonjs: "react-dom",
        amd: "react-dom"
      }
    }
  };
}

module.exports = tempConfig;

