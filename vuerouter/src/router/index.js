import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Foo from '../views/Foo.vue'
import Bar from '../views/Bar.vue'
import Baz from '../views/Baz.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [{
      path: 'foo',
      component: Foo,
    },
    {
      path: 'bar',
      component: Bar,
    },
    {
      path: 'baz/baz1/:id/baz3',
      component: Baz,
      props: true
    }]
  },
  {
    path: '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
