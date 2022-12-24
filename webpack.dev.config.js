const path = require("path");
// const TerserPlugin = require("terser-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    // 개발중 불필요
    // filename: "bundle.[contenthash].js",
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    // publicPath: "dist/",
    publicPath: "",
    // clean: {
    //   dry: true,
    //   keep: /\.css$/,
    // },
  },
  mode: "development",
  devServer: {
    port: 9000,
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    devMiddleware: {
      index: "index.html",
        writeToDisk: true,
    },
  },
  module: {
    rules: [
      //   {
      //     test: /\.(png|jpg)$/,
      //     type: "asset/resource",
      //   },
      //   {
      //     test: /\.(png|jpg)$/,
      //     type: "asset/inline",
      //   },
      {
        test: /\.(png|jpg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024,
          },
        },
      },
      {
        test: /\.txt$/,
        type: "asset/source",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        // use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        // use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
    ],
  },
  plugins: [
    //   개발중 불필요
    // new TerserPlugin(),
    // 개발중 빌드시간이 길어짐
    // new MiniCssExtractPlugin({
    //   filename: "style.[contenthash].css",
    // }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*",
        path.join(process.cwd(), "build/**/*"),
      ],
    }),
    new HtmlWebpackPlugin({
      title: "Hello world",
      filename: "subfolder/custom_filename.html",
      publicPath: "../",
      meta: {
        description: "Some Description",
      },
    }),
  ],
};
