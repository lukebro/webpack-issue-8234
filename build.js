const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const compiler = webpack(webpackConfig);

// tap each hook
Object.keys(compiler.hooks).forEach(hook =>
  compiler.hooks[hook].tap('example', () => console.log(hook))
);

compiler.watch(
  {
    aggregateTimeout: 300
  },
  (err, stats) => {
    console.log('err:', err, 'stats.hasErrors():', stats.hasErrors());
  }
);
