/**
 * aotoo-hub环境中webpack配置补充方法
 * @param {Object} wpconfig config of webpack
 * @param {String} fromdll is babel.options from dll or not
 */
const path = require('path')
module.exports = function(wpconfig, fromdll){
  let resolve = wpconfig.resolve
  let alias = resolve.alias
  alias.react = path.resolve('./node_modules/react')
  alias['react-dom'] = path.resolve('./node_modules/react-dom')
  resolve.alias = alias
  wpconfig.resolve = resolve

  if (!fromdll) {
    let externals = wpconfig.externals || {}
    externals.react = 'window.React'
    externals['react-dom'] = 'window.ReactDOM'
    wpconfig.externals = externals
  }
  return wpconfig
}