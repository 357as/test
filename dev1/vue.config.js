/* const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
}) */
const { defineConfig } = require('@vue/cli-service')
const path = require('path')
// module.exports = defineConfig({
//     transpileDependencies: true,
//     lintOnSave: false
// })

module.exports = {

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            // 引入需要全局加载的 less 文件
            patterns: (__dirname, './src/style/global.less'),
        },
    },
    transpileDependencies: true,
    //取消严格命名检查
    lintOnSave: false,
}
