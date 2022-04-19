import Vue from 'vue'
import VueRouter from 'vue-router'
import ConLogin from '../views/ConLogin'
import ConHome from '../views/ConHome'
import ConDoors from '../views/ConDoors'
import HeadLights from '../views/HeadLights'
import ConColors from '../views/ConColors'
import VisualPacks from '../views/VisualPacks'
import ConWheels from '../views/ConWheels'
import ColorsTitle from '../views/ColorsTitle'
import DoorsTitle from '../views/DoorsTitle'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'con-login',
    component: ConLogin
  },
  {
    path: '/',
    name: 'con-home',
    component: ConHome,
    children: [
      {
        path: 'doors',
        name: 'con-doors',
        component: ConDoors,
        children: [
          {
            path: 'doorsTitle',
            name: 'DoorsTitle',
            component: DoorsTitle,
            props ($route) {
              return { doorsTitle: $route.query.doorsTitle }
            }
          }
        ]
      }, {
        path: 'headLights',
        name: 'HeadLights',
        component: HeadLights
      }, {
        path: 'colors',
        name: 'con-colors',
        redirect: { name: 'ColorsTitle', query: { id: 1, colorsTitle: 'Red' } },
        component: ConColors,
        children: [
          {
            path: 'colorsTitle',
            name: 'ColorsTitle',
            component: ColorsTitle,
            props ($route) {
              return { id: $route.query.id, colorsTitle: $route.query.colorsTitle }
            }
          }
        ]
      }, {
        path: 'visualPacks',
        name: 'VisualPacks',
        component: VisualPacks
      }, {
        path: 'wheels',
        name: 'con-Wheels',
        component: ConWheels
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
