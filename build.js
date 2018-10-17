const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');
const port = 9989;

const compiler = webpack(webpackConfig);
const devServer = new WebpackDevServer(compiler, {stats: true});
// Launch WebpackDevServer.
devServer.listen(port, '0.0.0.0', err => {
    if (err) {
        return console.log(err);
    }
    console.log(`WebpackDevServer listening on http://localhost:${port}/`);
});
