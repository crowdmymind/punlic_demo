export default [{
  path: '/app/tab_bar1',
  name: 'tab_bar1',
  meta: {
    title: '菜单一',    //title或者菜单名
    tab_bar: true,      //是否创建tab_bar
    menu_img: ["btn-bottom1_1.png", "btn-bottom1_0.png"] //底部菜单图片，默认为第一个为选中状态
  },
  component: () => import('@/views/HelloWorld')
}, {
  path: '/app/tab_bar2',
  name: 'tab_bar2',
  meta: {
    title: '菜单二',
    tab_bar: true,
    menu_img: ["btn-bottom2_0.png", "btn-bottom2_1.png"]
  },
  component: () => import('@/views/HelloWorld')
}, {
  path: '/app/tab_bar3',
  name: 'tab_bar3',
  meta: {
    title: '菜单三',
    tab_bar: true,
    menu_img: ["btn-bottom3_0.png", "btn-bottom3_1.png"]
  },
  component: () => import('@/views/HelloWorld')
}, {
  path: '/app/tab_bar4',
  name: 'tab_bar4',
  meta: {
    title: '菜单四',
    tab_bar: true,
    menu_img: ["btn-bottom2_0.png", "btn-bottom2_1.png"]
  },
  component: () => import('@/views/HelloWorld')
}]
