<template>
  <div class="aside bg-primary">
    <ul class="my-4">
      <li v-for="item in navList" :key="item.id">
        <router-link :to="'/' + item.navTitle" class="d-flex ai-center">
          <i class="iconfont fs-xxl my-3" :class="item.iconName"></i>
          <div class="menuTitle text-grey fs-m">{{ item.navTitle }}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ConNav',
  data () {
    return {
      navList: [
        { id: '1', navTitle: 'doors', iconName: 'icon-home-fill' },
        { id: '2', navTitle: 'headLights', iconName: 'icon-home-fill' },
        { id: '3', navTitle: 'colors', iconName: 'icon-home-fill' },
        { id: '4', navTitle: 'visualPacks', iconName: 'icon-home-fill' },
        { id: '5', navTitle: 'wheels', iconName: 'icon-home-fill' }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
  .aside {
    width: 48px;
    height: 240px;
    border-radius: 0 36px 36px 0;
    box-shadow: 0 0 6px #18bcbc;
  }
  .iconfont {
    margin-left: 10px;
    margin-right: 10px;
    z-index: 999;
    color: #ffffff;
  }
  .menuTitle {
    display: none;
  }
  .router-link-active {
    .iconfont {
      color: #18bcbc;
    }
    .menuTitle {
      display: block;
      border-radius: 0 36px 36px 0;
      background-color: rgba(255, 255, 255, 0.8);
      margin-left: -44px;
      padding: 13px;
      padding-left: 64px;
    }
  }
  li:hover {
    .iconfont {
      color: #18bcbc;
    }
    .menuTitle {
      display: block;
      border-radius: 0 36px 36px 0;
      background-color: rgba(255, 255, 255, 0.8);
      margin-left: -50px;
      padding: 13px;
      padding-left: 64px;
    }
  }
</style>
