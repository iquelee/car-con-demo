<template>
  <div class="login-container">
    <el-card header="请先登录" class="login-card">
      <el-form @submit.native.prevent="enter(xxx)">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { apiSend, apiRegister } from '../ue4Player/app'
export default {
  data () {
    return {
      model: {},
      xxx: 'login'
    }
  },
  mounted () {
    apiRegister('onUE4Call', (info) => {
      console.log(info)
    })
  },
  methods: {
    async enter(xxx) {
      const res = await this.$http.post('login', this.model)
      localStorage.token = res.data.token
      this.$router.push({
        name: 'con-home',
        params: res.data
      })
      this.$message({
        type: 'success',
        message: '登录成功'
      })
      apiSend(xxx, () => {
      })
    }
  }
}
</script>

<style>
  .login-card {
    width: 25rem;
    margin: 5rem auto;
  }
</style>
