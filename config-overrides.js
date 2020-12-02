const {
  override,
  addWebpackAlias,
  addWebpackExternals,
} = require('customize-cra')


/**
 * 本文件基于 `react-app-rewired` 对 create-react-app 的 webpack配置进行扩展
 * 基于 `customize-cra` 对 webpack 配置做简化
 * @see https://github.com/timarney/react-app-rewired/blob/master/README_zh.md
 * @see https://github.com/arackaf/customize-cra/blob/HEAD/api.md
 */

// 以下为使用 babel-plugin-import 减少 material-ui/core 打包尺寸的使用
// fixBabelImports('@material-ui/core', {
//   'libraryDirectory': 'esm',
//   'camel2DashComponentName': false
// })

module.exports = override(
  addWebpackAlias({
    '@': require('path').resolve(__dirname, 'src')
  }),
  addWebpackExternals({
    'react': 'React',
    'react-dom': 'ReactDOM'
  })
)