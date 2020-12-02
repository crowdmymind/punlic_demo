export default [{
    path: '/app/404',
    name: '404',
    hidden: true,
    meta: {
      title: '404',
      tabbar: false
    },
    component: () => import('@/views/Error/Error'),
  },
  {
    path: '/',
    redirect: '/app',
    hidden: true,
    meta: {
      tabbar: false
    },
  },
  {
    path: '*',
    redirect: '/app/404',
    hidden: true,
    meta: {
      tabbar: false
    },
  }]
