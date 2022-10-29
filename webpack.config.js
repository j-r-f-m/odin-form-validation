const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    // set the entry file
    // if you change the name here you change the name of the created
    // js file
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    // set the output folder
    path: path.resolve(__dirname, "dist"),
    // change the name of the created js file its connected to
    // entry -> bundle:
    // add chaching
    filename: "[name][contenthash].js",
    // deleting old files from the dist folder
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devServer: {
    static: {
      // specify the data the server should load
      directory: path.resolve(__dirname, "dist"),
    },
    // set port
    port: 3000,
    // open browser automatically
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  // create source map
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Form Validation",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
};
