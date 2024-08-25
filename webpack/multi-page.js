const path = require('path')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const workplaceDir = process.cwd()
const getMultiPageConfig = function ({srcDir = 'src', jsDir = 'js', templateDir = 'html'} = {}) {
    const files = glob.sync(path.resolve(workplaceDir, `${srcDir}/${jsDir}/**/*.js`))
    const config = files.reduce(
        (acc, file) => {
            const filename = path.relative(workplaceDir, file).slice(srcDir.length + jsDir.length + 2, -3)
            const chunkName = `static/${jsDir}/${filename}`
            acc.entry[chunkName] = file
            const htmlName = `${filename}.html`
            acc.plugins.push(
                new HtmlWebpackPlugin({
                    template: path.resolve(workplaceDir, `${srcDir}/${templateDir}/${htmlName}`),
                    filename: htmlName,
                    chunks: [chunkName]
                })
            )
            return acc
        },
        {entry: {}, plugins: []}
    )
    return config
}
module.exports = {
    getMultiPageConfig
}
