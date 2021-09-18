/**
 * TODO 修改项目配置，用页面标题生成 tabBar 标题
 * configMap['app.config']
 */
module.exports = (ctx) => {
  ctx.modifyMiniConfigs(({ configMap }) => {
    console.log(configMap['app.config'], 'config  <<<<<<<<');
  })
}
