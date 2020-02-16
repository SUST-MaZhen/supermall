<template>
  <tab-bar>
      <!-- <tab-bar-item path="/home" activeColor="deepPink">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item> -->
      <!-- <tab-bar-item path="/category" activeColor="deepPink">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="deepPink">
        <img slot="item-icon" src="~assets/img/tabbar/cart.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/cart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="deepPink">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item> -->

      <!--简洁写法-->
      <tab-bar-item v-for="item in tabbars" :key="item.id" :path="item.path" :activeColor="item.textColor">
        <img slot="item-icon" :src="item.img" alt="">
        <img slot="item-icon-active" :src="item.actimg" alt="">
        <div slot="item-text">{{item.text}}</div>
      </tab-bar-item>

    </tab-bar>

</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";
  export default {
    name:'MainTabBar',
    data(){
      return {
          tabbars:[
            {
              path:'/home',
              img:require('assets/img/tabbar/home.svg'),
              textColor:'deepPink',
              actimg:require('assets/img/tabbar/home_active.svg'),
              text:'首页'
            },
            {
              path:'/category',
              img:require('assets/img/tabbar/category.svg'),
              textColor:'deepPink',
              actimg:require('assets/img/tabbar/category_active.svg'),
              text:'分类'
            },
            {
              path:'/cart',
              img:require('assets/img/tabbar/cart.svg'),
              textColor:'deepPink',
              actimg:require('assets/img/tabbar/cart_active.svg'),
              text:'购物车'
            },
            {
              path:'/profile',
              img:require('@/assets/img/tabbar/profile.svg'),
              textColor:'deepPink',
              actimg:require('@/assets/img/tabbar/profile_active.svg'),
              text:'我的'
            }
          ],

        }
    },
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
</style>
