const HtmlWebPackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.resolve(__dirname, "src/build");
var APP_DIR = path.resolve(__dirname, "src");

var config = {
    entry: APP_DIR + "/index.js",
    output: {
        path: BUILD_DIR,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: APP_DIR,
                use: [{ loader: "babel-loader" }]
            },
            {
                test: /\.css$/,
                use: [{ loader: "css-loader" }]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};

module.exports = config;
