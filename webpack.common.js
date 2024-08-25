const path = require('path')
const {getMultiPageConfig} = require('./webpack/multi-page.js')
const multiPageConfig = getMultiPageConfig()
module.exports = {
    entry: multiPageConfig.entry,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    plugins: [...multiPageConfig.plugins]
}
