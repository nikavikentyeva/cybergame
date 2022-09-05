const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const SvgSpriteHtmlWebpackPlugin = require('svg-sprite-html-webpack');
module.exports = {
  entry: {app: './src/index.js'},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash].js'
  },
  resolve: {
    alias: {
      "TweenLite": path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
      "TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
      "TimelineLite": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
      "TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
      "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
      "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
      "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.json$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: SvgSpriteHtmlWebpackPlugin.getLoader(),
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: path.resolve(__dirname, "src/"),
              outputPath: '/',
              publicPath: '../',
              useRelativePaths: true
            }
          }
        ]
      },
      {
        test: /\.(glb|gltf)$/,
        use:
          [
            {
              loader: 'file-loader',
              options:
                {
                  outputPath: 'assets/models/'
                }
            }
          ]
      },
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6,
        },
      }),
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['./dist/*']
    }),
    new CopyPlugin([
      {
        from: 'src/img', to: 'img',
      },
      {
        from: 'src/video', to: 'video',
      },
      {
        from: 'src/fonts', to: 'fonts',
      },
      {
        from: 'src/lottie-animation', to: 'lottie-animation',
      }
    ]),
    new MiniCssExtractPlugin({
      filename: 'css/app.[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/main.html',
      filename: 'main.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/tariff.html',
      filename: 'tariff.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/lessons.html',
      filename: 'lessons.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/forecasts.html',
      filename: 'forecasts.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/guarantee.html',
      filename: 'guarantee.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/marathon.html',
      filename: 'marathon.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/results.html',
      filename: 'results.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/error.html',
      filename: 'error.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/prelanding.html',
      filename: 'prelanding.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/about.html',
      filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/lk.html',
      filename: 'lk.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/login.html',
      filename: 'login.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/login2.html',
      filename: 'login2.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/login3.html',
      filename: 'login3.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/login4.html',
      filename: 'login4.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/sign-in.html',
      filename: 'sign-in.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/password1.html',
      filename: 'password1.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/password2.html',
      filename: 'password2.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/password3.html',
      filename: 'password3.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/profile-edit.html',
      filename: 'profile-edit.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/requisites.html',
      filename: 'requisites.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/contacts.html',
      filename: 'contacts.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/rules-payment.html',
      filename: 'rules-payment.html'
    }),
    new WebpackMd5Hash(),
    new SvgSpriteHtmlWebpackPlugin({
      includeFiles: [
        'src/img/icons/*.svg',
      ],
    }),
  ]
};
