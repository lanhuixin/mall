<template>
  <div class="tab-bar-item" @click="change">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
    export default{
      name: "TabBarItem",
      props:{
        path: String,
        activecolor:{
          type: String,
          default: 'red'
        }
      },
      data(){
        return{

        }
      },
      computed:{
        isActive(){
          return this.$route.path.indexOf(this.path) !== -1;
        },
        activeColor(){
          return this.isActive ? {color: this.activecolor}:{};
        }
      },
      methods:{
        change(){
          this.$router.push(this.path).catch(data => {} )
        }
      }
    }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    font-size: 13px;
  }
  .tab-bar-item img{
    width: 22px;
    height: 22px;
    margin-top: 5px;
    vertical-align: middle;
  }
</style>
