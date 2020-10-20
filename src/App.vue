<template>
  <div id="app">
    <router-view/>
    <mainTabbar></mainTabbar>
  </div>
</template>

<script>
import mainTabbar from 'components/content/mainTabbar/mainTabbar'
export default {
  name: 'App',
  components: {
    mainTabbar
  }
}
</script>

<style lang="scss">
  @import 'assets/css/base.css';
  #app{
    .son{
      color: yellow;
    }
  }
</style>
