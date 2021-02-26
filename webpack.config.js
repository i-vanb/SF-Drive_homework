const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')


module.exports = {
    entry: path.resolve(__dirname, 'public/js/script.js'),
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'main.js'
    },

    mode: "production",

    plugins: [new MiniCssExtractPlugin()],

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader",  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: false,
                    },
                }, "css-loader", "sass-loader",]
            },
            {
                test: /\.(ttf|aot)$/,
                use: ["file-loader"]
            }
        ],
    }
}
