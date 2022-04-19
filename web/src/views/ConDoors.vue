<template>
  <div>
    <ul class="d-flex">
      <li v-for="item in doorsList" :key="item.id">
        <router-link
          :to="{
            name: 'DoorsTitle',
            query: {
              doorsTitle: item.doorsTitle,
            }
          }"
        >
          <i class="iconfont fs-xxl" :class="item.iconName"></i>
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'con-doors',
  data () {
    return {
      doorsList: [
        { id: '1', doorsTitle: 'left', iconName: 'icon-home-fill' },
        { id: '2', doorsTitle: 'right', iconName: 'icon-home-fill' }
      ]
    }
  }
}
</script>

<style>
.circle {
  display: block;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  margin: 0;
}
</style>
