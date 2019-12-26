const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  
  app.use(
    '/api',
    proxy({
      target: 'http://10.20.152.38:3002',
      changeOrigin: true
    })
  );

};