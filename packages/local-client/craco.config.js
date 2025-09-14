const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Add polyfills for Node.js core modules
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        assert: require.resolve('assert/'),
        buffer: require.resolve('buffer/'),
        crypto: require.resolve('crypto-browserify'),
        path: require.resolve('path-browserify'),
        process: require.resolve('process/browser.js'),
        stream: require.resolve('stream-browserify'),
        util: require.resolve('util/'),
        url: require.resolve('url/'),
        os: require.resolve('os-browserify/browser'),
        constants: require.resolve('constants-browserify'),
        querystring: require.resolve('querystring-es3'),
        vm: false,
        fs: false,
        net: false,
        tls: false,
        child_process: false,
        module: false,
      };

      // Add plugins for polyfills
      webpackConfig.plugins = [
        ...webpackConfig.plugins,
        new webpack.ProvidePlugin({
          process: 'process/browser.js',
          Buffer: ['buffer', 'Buffer'],
        }),
      ];

      return webpackConfig;
    },
  },
};