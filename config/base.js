const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require("path");

const baseConf = (_path) => {
  const htmlSrc = path.normalize(_path + "/src/index.html");

  const entry = {
    application: ['babel-polyfill', path.normalize(_path + "/src/app.js")],
    vendors: path.normalize(_path + "/src/vendors.js")
  };

  return {
    entry,
    output: {
      filename: "[name].js",
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader'
            }
          ]
        },
        {
          test: /\.js/,
          exclude: /(node_modules)/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['env']
              }
            }
          ]
        },
        {
          test: /\.scss/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'autoprefixer-loader?browsers=last 5 version', 'sass-loader']
          })
        },
        {

          /**
           * ASSET LOADER
           * Reference: https://github.com/webpack/file-loader
           * Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
           * Rename the file using the asset hash
           * Pass along the updated reference to your code
           * You can add here any file extension you want to get copied to your output
           */
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          loader: 'file-loader?name=assets/images/[name].[ext]'
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          loader: 'file-loader?name=assets/fonts/[name].[ext]'
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: 'styles.css',
        disable: false,
        allChunks: true
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors',
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: htmlSrc
      }),
      new HtmlWebpackPlugin({
        filename: 'blog.html',
        template: 'src/blog.html'
      }),
      new HtmlWebpackPlugin({
        filename: 'product.html',
        template: 'src/product.html'
      }),
      new HtmlWebpackPlugin({
        filename: 'search.html',
        template: 'src/search.html'
      }),
      new HtmlWebpackPlugin({
        filename: 'categories.html',
        template: 'src/categories.html'
      }),
      new HtmlWebpackPlugin({
        filename: 'article.html',
        template: 'src/article.html'
      }),
      new HtmlWebpackPlugin({
        filename: 'registration.html',
        template: 'src/registration.html'
      }),
      new HtmlWebpackPlugin({
        filename: 'forgot-password.html',
        template: 'src/forgot-password.html'
      }),
      new HtmlWebpackPlugin({
        filename: 'account.html',
        template: 'src/account.html'
      }),
      new HtmlWebpackPlugin({
        filename: 'account-map.html',
        template: 'src/account-map.html'
      }),
      new HtmlWebpackPlugin({
        filename: 'account-subscribe.html',
        template: 'src/account-subscribe.html'
      }),
      new HtmlWebpackPlugin({
        filename: 'account-referal.html',
        template: 'src/account-referal.html'
      }),
      new HtmlWebpackPlugin({
        filename: 'account-order.html',
        template: 'src/account-order.html'
      }),
      new HtmlWebpackPlugin({
        filename: 'account-featured.html',
        template: 'src/account-featured.html'
      }),
      new HtmlWebpackPlugin({
        filename: 'letter.html',
        template: 'src/letter.html'
      }),
      new HtmlWebpackPlugin({
        filename: 'blog-life.html',
        template: 'src/blog-life.html'
      }),
      new HtmlWebpackPlugin({
        filename: 'blog-page-error.html',
        template: 'src/blog-page-error.html'
      }),
      new HtmlWebpackPlugin({
        filename: 'blog-search.html',
        template: 'src/blog-search.html'
      }),
      new HtmlWebpackPlugin({
        filename: 'order.html',
        template: 'src/order.html'
      }),
      new HtmlWebpackPlugin({
        filename: 'order-last.html',
        template: 'src/order-last.html'
      }),
      new HtmlWebpackPlugin({
        filename: 'order-last-v2.html',
        template: 'src/order-last-v2.html'
      }),
      new HtmlWebpackPlugin({
        filename: 'cart-page.html',
        template: 'src/cart-page.html'
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      }),
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
        VERSION: JSON.stringify("5fa3b9"),
        BROWSER_SUPPORTS_HTML5: true,
        "typeof window": JSON.stringify("object")
      })
    ]
  };
};

module.exports = baseConf;