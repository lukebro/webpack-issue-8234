module.exports = {
  mode: 'development',
  entry: './index.js',
  plugins: [
    {
      apply(compiler) {
        compiler.hooks.done.tap('my-test', stats => {
          throw new Error('Oops');
        });
      }
    }
  ]
};
