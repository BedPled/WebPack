const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: ['./src/main.js'],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ]

    },

    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: "./src/index.html",
    //     })
    //     ]

}