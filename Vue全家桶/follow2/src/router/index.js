import Vue from 'vue'
import Router from 'vue-router'
import tabbar from '@/components/tabbar'
import index from '@/components/index'
import my from '@/components/my'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [{
    path: '/',
    redirect: '/tabbar'
  }, {
    path: '/tabbar',
    name: '',
    component: tabbar,
    children: [{
      path: '',
      redirect: 'index'
    }, {
      path: 'index',
      name: 'index',
      component: index
    }, {
      path: 'my',
      name: 'my',
      component: my
    }]
  }]
})

export default router
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       redirct: tabbar
//     }, {
//       path: '/tabbar',
//       component: tabbar,
//       childrent: [{
//         path: 'index',
//         component: index
//       }]
//     }
//   ]
// })
