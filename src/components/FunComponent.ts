import { h } from 'vue'

// 函数式组件
const FunComponent = () => {
	// 相当于是 React中的 createElement('div', {}, [])
  return h('h1', {}, '我是一个函数式组件')
}

FunComponent.props = ['level']

export default FunComponent
