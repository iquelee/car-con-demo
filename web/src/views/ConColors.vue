<template>
  <div>
    <router-view class="d-flex jc-center mb-3"></router-view>
    <ul class="d-flex ai-center">
      <li v-for="item in colorsList" :key="item.id">
        <router-link
          :to="{
            name: 'ColorsTitle',
            query: {
              id: item.id,
              colorsTitle: item.colorsTitle
            }
          }"
        >
          <div :style="{ background: item.color }" class="circle"></div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'con-colors',
  data () {
    return {
      colorsList: [
        { id: '1', colorsTitle: 'Red', color: '#524783' },
        { id: '2', colorsTitle: 'Green', color: '#524585' },
        { id: '3', colorsTitle: 'Blue', color: '#985632' },
        { id: '4', colorsTitle: 'Yellow', color: '#ff9838' },
        { id: '5', colorsTitle: 'Cyan', color: '#18bcbc' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .circle {
    display: block;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    margin-left: 12px;
    margin-right: 12px;
  }
  .router-link-exact-active {
    .circle {
      border: 4px solid rgba($color: rgb(0, 0, 0), $alpha: 0.4);
      box-sizing: content-box;
      margin-left: 8px;
      margin-right: 8px;
    }
  }
  li:hover {
    .circle {
      border: 4px solid rgba($color: rgb(0, 0, 0), $alpha: 0.4);
      box-sizing: content-box;
      margin-left: 8px;
      margin-right: 8px;
    }
  }
</style>
