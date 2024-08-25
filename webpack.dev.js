const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: [
            {
                directory: './dist'
            },
            {
                directory: './src/static',
                publicPath: '/static'
            }
        ],
        port: 8080,
        hot: true
    },
    plugins: [
        // style-loader会比较快，但是考虑到开发生产一致
        new MiniCssExtractPlugin({
            filename: ({chunk}) => {
                return `${chunk.name.replace('/js/', '/css/')}.css`
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    }
})
