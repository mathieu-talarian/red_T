const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// const dev = process.env.NODE_ENV === 'dev'
const dev = true;

let cssLoaders = [
  { loader: "css-loader", options: { importLoaders: 1, minimize: !dev } }
];

// if (!dev) {
cssLoaders.push({
  loader: "postcss-loader",
  options: {
    plugins: loader => [
      require("autoprefixer")({
        browsers: ["last 2 versions", "ie >= 7"]
      })
    ]
  }
});
// }

module.exports = {
  // mode: options.development ? 'development' : 'production',
  mode: "development",
  entry: "./src/client/index.js",
  output: {
    path: __dirname + "/src/server/dist",
    filename: "index.js"
  },
  devtool: dev ? "source-map" : false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-object-rest-spread"]
          }
        }
      },
      {
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [...cssLoaders, "sass-loader"]
        })
      },
      {
        test: /\.png$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true // webpack@2.x and newer
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          "babel-loader",
          {
            loader: "@svgr/webpack",
            options: { babel: false }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/client/index.html",
      filename: "./index.html"
    }),
    new ExtractTextPlugin({
      filename: dev ? "[name].css" : "[name].[contenthash:8].css",
      disable: false // ? dev
    })
  ]
};
