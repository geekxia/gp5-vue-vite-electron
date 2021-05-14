import { defineComponent } from 'vue'

export default defineComponent({
	setup() {
		// 优先级更高
		return ()=>(
			<>
				<h1>测试页面</h1>
			</>
		)
	}
})
