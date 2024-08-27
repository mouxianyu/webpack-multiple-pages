const path = require('path')
const {getMultiPageConfig} = require('./webpack/multi-page.js')
const multiPageConfig = getMultiPageConfig()

module.exports = {
    entry: multiPageConfig.entry,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
        // publicPath: '/'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [...multiPageConfig.plugins]
}
