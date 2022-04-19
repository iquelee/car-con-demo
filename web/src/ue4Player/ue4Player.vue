<template>
  <div id="player" @mousedown="xxx()">
    <div id="videoPlayOverlay"></div>
    <video id="streamingVideo" playsinline style="width: 100%; height: 100%"/>
  </div>
</template>

<script>
export default {
  name: 'ue4Player',
  methods: {
    xxx () {
      console.log('点击ue层')
    }
  }
}
</script>

<style scoped>
#player {
  width: 100%;
  height: 100%;
  background-color: black;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}
#videoPlayOverlay {
  width: 100%;
  height: 100%;
  /* background-color: rgba(100, 100, 100, 0.7); */
  position: absolute;
  left: 0;
  top: 0;
}
</style>
