const path = require('path');
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    entry: {
        content: './src/scripts/content.js',
        background: './src/scripts/background.js'
        options: "./src/scripts/options.js"
    },
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.vue$/,
            exclude: /node_modules/,
            loader: 'vue-loader'
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ["vue-style-loader", "css-loader"]
        }],
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'app/scripts'),
    },
    plugins: [
      new VueLoaderPlugin()
    ]
};