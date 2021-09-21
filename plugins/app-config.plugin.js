module.exports = (ctx) => {
  ctx.modifyMiniConfigs(({ configMap }) => {
    const list = configMap['app.config'].content.tabBar.list;
    configMap['app.config'].content.tabBar.list = list.map(path => {
      const pageConfig = configMap[path + '.config'].content;
      return {
        pagePath: path,
        text: pageConfig.navigationBarTitleText
      }
    });
    console.log('使用 tab 页面的 navigationBarTitleText 作为 tab 名称');
  })
}
