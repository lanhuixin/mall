<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import {getHomeMultidata} from 'network/home-request.js'
  export default {
    name: "Home",
    components: {
      NavBar
    },
    //钩子函数
    created(){
      getHomeMultidata().then(res=>{
        console.log(res);
      })
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
