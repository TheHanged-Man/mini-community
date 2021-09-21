import { createApp } from 'vue'
import NutUI from '@nutui/nutui-taro'
import '@nutui/nutui-taro/dist/styles/themes/default.scss';
// import { createUI } from 'taro-ui-vue3'
// import 'taro-ui-vue3/dist/style/index.scss'

import './app.scss'

const app = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

app.use(NutUI)

// const tuv3 = createUI()
// App.use(tuv3)

export default app
