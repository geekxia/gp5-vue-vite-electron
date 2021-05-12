// 引入createApp()创建根组件、根容器、Vue环境
import { createApp } from 'vue'
// 根组件
import App from './App.vue'

const app = createApp(App)
app.mount('#app')  // 装载
