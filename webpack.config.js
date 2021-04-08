const path = require('path');

module.exports = {
    entry: {
        content: './src/scripts/content.js',
        background: './src/scripts/background.js'
    },
    mode: "development",
    devtool: "source-map",
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'app/scripts'),
    }
};