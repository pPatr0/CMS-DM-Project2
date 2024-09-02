import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageNotFound from '../views/PageNotFound.vue'
import BlogView from '@/views/BlogView.vue';
import SingleBlog from '@/views/SingleBlog.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: "Home"
      }
    },
    {
      path: '/views/PageNotFound.vue',
      name: 'pagenotfound',
      component: PageNotFound,
      meta: {
        title: "PageNotFound"
      }
    },
    {
      path: '/views/BlogView.vue',
      name: 'blogview',
      component: BlogView,
      meta: {
        title: "BlogView"
      }
    },
    {
      path: '/views/SingleBlog.vue',
      name: 'singleblog',
      component: SingleBlog,
      meta: {
        title: "SingleBlog"
      }
    }
  ]
})

document.title = `GymTabletka`;


export default router