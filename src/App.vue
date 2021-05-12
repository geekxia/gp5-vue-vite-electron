<template>

  <HelloWorld /><hr>

  <Counter /><hr>

  <TodoList /><hr>

</template>

<script lang="ts">
// v3中新增的api都要先引入再使用
import {
  defineComponent,
  ref
} from 'vue'

import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue'
import TodoList from './components/TodoList.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Counter,
    TodoList
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
