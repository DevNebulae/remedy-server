const CleanWebpackPlugin = require("clean-webpack-plugin")
const StartServerPlugin = require("start-server-webpack-plugin")
const nodeExternals = require("webpack-node-externals")
const path = require("path")
const webpack = require("webpack")

const dist = path.resolve(process.cwd(), "dist/")
const src = path.resolve(process.cwd(), "src/")

module.exports = {
  entry: ["webpack/hot/poll?1000", path.resolve(src, "index")],
  externals: [
    nodeExternals({
      whitelist: ["webpack/hot/poll?1000"]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  output: {
    path: dist,
    filename: "server.js"
  },
  plugins: [
    new CleanWebpackPlugin([dist]),
    new StartServerPlugin("server.js"),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        BUILD_TARGET: JSON.stringify("server")
      }
    })
  ],
  target: "node",
  watch: true
}
