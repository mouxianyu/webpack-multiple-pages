const px2remConditional = require('./postcss/index.js')
module.exports = {
    // postcss-preset-env 自带autoprefixer，不用再另外配置
    plugins: [['postcss-preset-env', {}], px2remConditional]
}
