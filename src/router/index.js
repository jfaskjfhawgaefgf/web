import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Home from '@/views/home.vue'
import VideoList from '@/views/videolist.vue'
import Player from '@/views/player.vue'
import Error from '@/views/error.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  { path: '/', component: Home },
  { path: '/videolist', component: VideoList },
  { path: '/error', component: Error },
  { path: '/player/:id', component: Player }
]

const router = new VueRouter({
  routes
})

export default router
