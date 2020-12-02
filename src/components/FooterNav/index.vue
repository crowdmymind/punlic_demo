<template>
   <div class="bottom_btn">
      <van-tabbar v-model="active">
         <van-tabbar-item
            v-for="(item, index) in tabbars"
            :key="index"
            @click="tab(index, item.name)"
         >
            <span :class="currIndex == index ? active : ''">
               {{ item.title }}
            </span>
            <template slot="icon" slot-scope="props">
               <img :src="props.active ? item.active : item.normal" />
            </template>
         </van-tabbar-item>
      </van-tabbar>
   </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
   components: {
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem,
   },
   data() {
      return {
         currIndex: 0,
         active: 0,
         tabbars: [],
      };
   },
   mounted() {
      this.$router.options.routes.forEach((item, index) => {
         if (item.meta.tab_bar) {
            let menu = {
               name: item.name,
               title: item.meta.title,
               normal: require(`@/assets/${item.meta.menu_img[0]}`),
               active: require(`@/assets/${item.meta.menu_img[1]}`),
            };
            this.tabbars.push(menu);
         }
      });
   },
   methods: {
      tab(index, val) {
         this.currIndex = index;
         this.$router.push({ name: val });
      },
   },
};
</script>

<style>
.active_tab img {
   width: 26px;
   height: 26px;
}
</style>