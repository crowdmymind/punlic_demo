export default [{
  path: '/app',
  name: 'index',
  meta: {
    title: '教务资讯',
    tabbar: false
  },
  component: () => import('@/views/HelloWorld')
}, {
  path: '/app/aa',
  name: 'aa',
  hidden: true,
  meta: {
    title: '测试',
    tabbar: false
  },
  component: () => import('@/views/HelloWorld')
}, ]
