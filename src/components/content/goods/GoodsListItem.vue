<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img">
    <div>
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
    <span></span>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {};
        }
      }
    }
  }
</script>

<style scoped>

</style>
