module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': 'src/assets',
        'network': 'src/network',
        'views': 'src/views',
      }
    },
  },
  lintOnSave: false
}
