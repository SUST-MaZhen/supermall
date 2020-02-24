<template>
  <div id="home">

    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommend="recommend"></recommend-view>
    <feature-view/>
    <tab-control class="tab-control" :titles="['精选','潮流','新款']"/>
    <goods-list :goods="goods['pop'].list"/>
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
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";

  import {getHomeMultiData, getHomeGoods} from "network/home";

  export default {
    name:'Home',
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList
    },
    data(){
      return {
        // 轮播图数据
        banners:[],
        // 推荐商品数据
        recommend:[],
        // 潮流商品
        goods:{
          "pop":{
            page:0,
            list:['eee']
          },
          "new":{
            page:0,
            list:[]
          },
          "sell":{
            page:0,
            list:[]
          }

        }
      }
    },
    created() {
      // 请求多个数据
      this.getMultiData();
      // 请求潮流数据
      this.getGoods('pop');
      this.getGoods('new');
      this.getGoods('sell');

    },
    methods:{
      getMultiData(){
        getHomeMultiData().then(res=>{
          console.log(res);
          this.banners = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        })
      },
      getGoods(type){
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then((res)=>{
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page++;
        })
      }
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

  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>
