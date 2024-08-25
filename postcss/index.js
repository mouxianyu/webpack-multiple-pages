// postcss-plugin.js
const postcss = require('postcss')
module.exports = postcss.plugin('myPlugin', function () {
    return function (css) {
        css.walkDecls('color', function (decl) {
            // 把颜色都变成大写
            console.log('------------------------')
            decl.value = decl.value.toUpperCase()
        })
    }
})
