<template>
  <div id="home">

    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommend="recommend"></recommend-view>
    <feature-view/>
    <ul>
      <li>111111111111</li>
      <li>111111111111</li>
      <li>111111111111</li>
      <li>111111111111</li>
      <li>111111111111</li>
      <li>111111111111</li>
      <li>111111111111</li>
      <li>111111111111</li>
      <li>111111111111</li>
      <li>111111111111</li>
      <li>111111111111</li>
      <li>111111111111</li>
    </ul>

  </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar';
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from './childComps/RecommendView';
  import FeatureView from "./childComps/FeatureView";
  import {getHomeMultdata} from "../../network/home";

  export default {
    name:'Home',
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView
    },
    data(){
      return {
        banners:[],
        recommend:[]
      }
    },
    created() {
      // 请求多个数据
      getHomeMultdata().then(res=>{
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
</style>
