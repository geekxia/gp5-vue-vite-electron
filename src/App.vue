<template>
  <div class='navs'>
    <router-link tag='span' to='/study' active-class='on'>学习</router-link>
    <router-link tag='span' to='/test' active-class='on'>测试</router-link>
  </div>
  <router-view></router-view>
</template>

<script lang="ts">
// v3中新增的api都要先引入再使用
import {
  defineComponent,
} from 'vue'

export default defineComponent({
  name: 'App'
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
.navs a {
  padding: 0 20px;
  cursor: pointer;
}
.navs a.on {
  color: red;
}
</style>
