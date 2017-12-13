const base = require("./base")
const merge = require("webpack-merge")
const nodeExternals = require("webpack-node-externals")

module.exports = merge(base, {
  externals: [nodeExternals()]
})
