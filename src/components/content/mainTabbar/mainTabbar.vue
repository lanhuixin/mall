<template>
  <tabbar>
    <tabbaritem path="/home">
      <img slot="item-icon" src="~assets/img/tarbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tarbar/home-active.svg" alt="">
      <div slot="item-text">首页</div>
    </tabbaritem>
    <tabbaritem path="/catagory">
      <img slot="item-icon" src="~assets/img/tarbar/catagory.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tarbar/catagory-active.svg" alt="">
      <div slot="item-text">分类</div>
    </tabbaritem>
    <tabbaritem path="/cart">
      <img slot="item-icon" src="~assets/img/tarbar/cart.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tarbar/cart-active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tabbaritem>
    <tabbaritem path="/profile">
      <img slot="item-icon" src="~assets/img/tarbar/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tarbar/profile-active.svg" alt="">
      <div slot="item-text">我的</div>
    </tabbaritem>
  </tabbar>
</template>

<script>
  import tabbar from 'components/common/tabbar/TabBar.vue'
  import tabbaritem from 'components/common/tabbar/TabBarItem.vue'
  export default {
    name: "mainTabbar",
    components:{
      tabbar,
      tabbaritem
    }
  }
</script>

<style scoped>

</style>
