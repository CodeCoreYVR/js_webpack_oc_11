const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

// entry points
// https://webpack.js.org/concepts/entry-points/

// output
// https://webpack.js.org/concepts/output/
module.exports = {
  mode: "development",
  // by default the mode is production but, we can change it
  // to development here
  devtool: "none",

  entry: {
    //   Create a bundle "./dist/client.js" (named after the key)
    client: "./src/client.js",
    // Create a bundle "./dist/defaults.js" (named after the key)
    defaults: "./src/defaults.js",
    server: "./src/defaults.js"
  },
  output: {
    //   The 'path' property is used to specify the location where
    // our bundled files are created. By default, it is
    // path.join(__dirname, 'build');
    path: path.join(__dirname, "build"),
    filename: "[name].bundle.js"
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "Webpack Demo", // <title>Webpack Demo</title>
      chunks: ["client"]
    })
  ]
};
