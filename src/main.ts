// 引入createApp()创建根组件、根容器、Vue环境
import { createApp } from 'vue'
import router from "@/pages";
// 根组件
import App from './App.vue'


const app = createApp(App)
app.config.globalProperties.$url = 'http://cnode.com'

app.directive('highlight', {
  beforeMount(el, binding, vnode) {
    el.style.background = binding.value
  }
})

// 注册路由系统
app.use(router)

app.mount('#app')  // 装载
