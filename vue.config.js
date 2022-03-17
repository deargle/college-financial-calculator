module.exports = {
  publicPath: process.env.NODE_ENV == 'production'
    ? '/college-financial-calculator/'
    : '/',
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'College Financial Calculator'
    }
  }
}
