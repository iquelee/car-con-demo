<template>
  <div id="app">
    <ue4Player/>
    <router-view/>
  </div>
</template>

<script>
import ue4Player from './ue4Player/ue4Player.vue'
import { appLoad } from './ue4Player/app.js'

export default {
  name: 'App',
  components: {
    ue4Player
  },
  mounted () {
    appLoad('127.0.0.1', () => {
      console.log('画面出现之前的回调，可进行一些初始操作')
    })
  }
}
</script>
