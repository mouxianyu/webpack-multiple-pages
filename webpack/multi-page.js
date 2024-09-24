const path = require('path')
const fs = require('fs')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const workplaceDir = process.cwd()
const getMultiPageConfig = function ({srcDir = 'src', entryDir = 'entry', templateDir = 'html'} = {}) {
    const isDev = process.env.NODE_ENV === 'development'
    const files = glob.sync([
        path.resolve(workplaceDir, `${srcDir}/${entryDir}/**/*.js`),
        path.resolve(workplaceDir, `${srcDir}/${entryDir}/**/*.ts`)
    ])
    const config = files.reduce(
        (acc, file) => {
            // 获取js文件名，如
            const filename = path.relative(workplaceDir, file).slice(srcDir.length + entryDir.length + 2, -3)
            const chunkName = `static/js/${filename}`
            acc.entry[chunkName] = file
            const htmlName = `${filename}.html`
            const templatePath = path.resolve(workplaceDir, `${srcDir}/${templateDir}/${htmlName}`)
            const config = {
                filename: htmlName,
                chunks: [chunkName]
            }
            if (isDev && !config.filename.endsWith('index.html')) {
                // 去除.html后缀
                config.filename = config.filename.slice(0, -5)
            }
            if (fs.existsSync(templatePath)) {
                // 如果有模版文件才使用模版配置
                config.template = path.resolve(workplaceDir, `${srcDir}/${templateDir}/${htmlName}`)
            }
            acc.plugins.push(new HtmlWebpackPlugin(config))
            return acc
        },
        {entry: {}, plugins: []}
    )
    return config
}
module.exports = {
    getMultiPageConfig
}
