import '@testing-library/jest-dom';
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware({
      target: 'http://localhost:8000', // Your API server address
      changeOrigin: true,
    })
  );
};
