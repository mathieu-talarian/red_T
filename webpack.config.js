const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
// const dev = process.env.NODE_ENV === 'dev'
const dev = true;

const sourceMaps = {
  eval: {
    name: "eval",
    build: "+++",
    rebuild: "+++",
    production: false
  },
  cheapEvalSourceMap: {
    name: "cheap-eval-source-map",
    build: "+",
    rebuild: "++",
    production: false
  },
  inlineSourceMap: {
    name: "inline-source-map"
  },
  sourceMap: {
    name: "source-map"
  }
};

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
  devtool: dev ? sourceMaps.sourceMap.name : false,
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    proxy: {
      "/socket.io": {
        target: "http://localhost:3004",
        ws: true
      }
    }
  },
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
