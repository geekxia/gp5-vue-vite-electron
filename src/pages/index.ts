import { createRouter, createWebHashHistory } from 'vue-router'

import Study from './study/Study.vue'
import Test from './study/Test'

export default createRouter({
	history: createWebHashHistory(),
	routes: [
		{ path: '/study', component: Study },
		{ path: '/test', component: Test }
	]
})
