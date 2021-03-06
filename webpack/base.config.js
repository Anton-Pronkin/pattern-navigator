const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    entry: {
        content: "./src/content.js",
        background: "./src/background.js",
        options: "./src/options.js"
    },
    module: {
        rules: [{
            test: /\.vue$/,
            exclude: /node_modules/,
            loader: 'vue-loader'
        }, {
            test: /\.s?css$/,
            use: ["vue-style-loader", "css-loader", "sass-loader"]
        }, { 
            test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
            loader: 'url-loader' 
        }],
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, '../app/scripts'),
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};