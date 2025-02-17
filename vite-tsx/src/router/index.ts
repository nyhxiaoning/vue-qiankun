import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('@/views/table')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/404')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// router.beforeEach(
//   (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
//     const user = localStorage.getItem('user')
//     if (to.meta.type === 'login' && user) {
//       next({ name: 'home' })
//       return
//     }

//     if (to.meta.type === 'home' && !user) {
//       next({ name: 'login' })
//       return
//     }

//     next()
//   }
// )

export default router
