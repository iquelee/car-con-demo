<template>
  <div>
    <h1>管理员列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="260">
      </el-table-column>
      <el-table-column prop="username" label="用户名">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template v-slot="scope">
          <el-button type="text" size="small" @click="$router.push(`/admin-users/edit/${scope.row._id}`)">
            编辑
          </el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: []
    }
  },
  methods: {
    async fetch () {
      const res = await this.$http.get('/admin-users')
      this.items = res.data
    },
    async remove(row) {
      this.$confirm(`是否确认删除"${row.username}"`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async() => {
        await this.$http.delete(`/admin-users/${row._id}`)
        this.$message({
          type: "success",
          message: '删除成功！'
        });
        this.fetch()
      })
    }
  },
  created () {
    this.fetch()
  }
}
</script>

<style>

</style>