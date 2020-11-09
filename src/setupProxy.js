const { createProxyMiddleware } = require('http-proxy-middleware')

/**
 * @param {import('express').Express} app 
 */
module.exports = function(app) {
  app.use(
    [process.env.REACT_APP_LOCAL_PROXY_PATH],
    createProxyMiddleware({
      target: process.env.REACT_APP_API_DOMAIN,
      changeOrigin: true,
      pathRewrite: {
        [`^${process.env.REACT_APP_LOCAL_PROXY_PATH}`]: process.env.REACT_APP_API_CONTEXT_PATH
      },
    })
  )
}