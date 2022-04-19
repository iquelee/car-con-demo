import Vue from 'vue'
import VueRouter from 'vue-router'
import ConMain from '../views/ConMain'
import AdminUserEdit from '../views/AdminUserEdit'
import AdminUserList from '../views/AdminUserList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'con-main',
    component: ConMain,
    redirect: { name: 'admin-users-create' },
    children: [
      { path: 'admin-users/create', name: 'admin-users-create', component: AdminUserEdit },
      { path: 'admin-users/edit/:id', name: 'admin-users-edit', component: AdminUserEdit, props: true },
      { path: 'admin-users/list', name: 'admin-users-list', component: AdminUserList }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
