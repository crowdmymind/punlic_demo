<template>
   <div id="app">
      <!-- main 内容 -->
      <transition :name="mainName">
         <keep-alive v-if="$route.meta.keepAlive">
            <!-- 这里是会被缓存的视图组件 -->
            <router-view id="view" v-if="$route.meta.keepAlive" />
         </keep-alive>
         <!-- 这里是不被缓存的视图组件 -->
         <router-view
            v-if="!$route.meta.keepAlive && isRouterAlive"
            id="view"
         />
      </transition>

      <!-- 底部导航 -->
      <transition :name="navName">
         <footer-nav
            v-if="isShowNav"
            :activeNavIndex="activeNavIndex"
         ></footer-nav>
      </transition>
   </div>
</template>

<script>
import FooterNav from "./components/FooterNav/index";
export default {
   name: "app",
   components: {
      "footer-nav": FooterNav,
   },
   data() {
      return {
         mainName: "", // 内容区域动画名
         navName: "", // 导航动画名
         isShowNav: true, // 是否显示底部导航 Tab
         activeNavIndex: 0, // 底部导航激活下标
         isRouterAlive: true, // 用于刷新页面用
         navTabs: [], // 底部导航
      };
   },
   mounted() {
      this.$router.options.routes.forEach((item) => {
         if (item.meta.tabbar) {
            let name = item.name;
            this.navTabs.push(name);
         }
      });
   },
   watch: {
      activeNavIndex(newValue) {
         if (newValue === 0) {
            this.$router.push("/app/home");
         }
      },
   },
   watch: {
      $route(to, from) {
         const { navTabs } = this.$data;
         const toName = to.name;
         const fromName = from.name;
         // console.log(to);
         //如果是在 navTab 页面内刷新浏览器或初始进入系统，则显示导航栏
         if (navTabs.includes(toName) && !fromName) this.isShowNav = true;
         switch (toName) {
            case "tab_bar1":
               this.activeNavIndex = 0;
               break;
            case "tab_bar2":
               this.activeNavIndex = 1;
               break;
            case "tab_bar3":
               this.activeNavIndex = 2;
               break;
            case "tab_bar4":
               this.activeNavIndex = 3;
               break;
         }
         /* 判断footer-nav是否显示
          * 根据meta.index判断页面向左滑动 or 向右滑动
          */
         // 判断是否是底部导航之间相互切换
         if (navTabs.includes(toName) && navTabs.includes(fromName)) {
            this.mainName = "fade";
            this.isShowNav = true;
            // 如果 to 索引大于 from 索引, 判断为前进状态, 反之则为后退状态
         } else if (to.meta.index > from.meta.index) {
            this.mainName = "slide-left";
            this.navName = "nav-slide";
            this.isShowNav = false;
         } else if (to.meta.index < from.meta.index) {
            this.mainName = "slide-right";
            this.navName = "nav-slide";
            navTabs.includes(toName) && (this.isShowNav = true);
         }

         document.title = to.meta.title;
         
         this.$router.options.routes.forEach((item) => {
            if (item.path == to.path) {
               if (item.hidden == true) {
                  console.log(item);
                  this.isShowNav = false;
               } else {
                  this.isShowNav = true;
               }
            }
         });
      },
   },
};
</script>

<style scoped>
.nav-slide-enter,
.nav-slide-leave-to {
   transform: translate3d(-100%, 0, 0);
}
.nav-slide-enter-active,
.nav-slide-leave-active {
   transition: all 5.5s;
}
.slide-left-enter {
   transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
   transform: translate3d(-100%, 0, 0);
}
.slide-left-enter-active,
.slide-left-leave-active {
   will-change: transform;
   transition: all 0.5s;
   position: absolute;
}
.slide-right-enter {
   transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
   transform: translate3d(100%, 0, 0);
}

.slide-left-enter-active,
.slide-left-leave-active {
   will-change: transform;
   transition: all 0.5s;
   position: absolute;
}
.fade-enter {
   opacity: 0;
}
.fade-leave {
   opacity: 1;
}
.fade-enter-active {
   transition: opacity 0.5s;
}
.fade-leave-active {
   opacity: 0;
   transition: opacity 0s;
}
</style>
