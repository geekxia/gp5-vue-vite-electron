import { getCurrentInstance } from 'vue'

// 获取app实例上的全局数据
export function getApp() {
	return getCurrentInstance().appContext.config.globalProperties
}
