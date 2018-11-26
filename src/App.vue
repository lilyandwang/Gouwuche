<template>
  <main>
    <!-- 公共的头部脚部 -->
    <app-home/>
    <!-- 内容区 -->
    <div class="content">
       <router-view></router-view>
    </div>    
  </main>
</template>
<script>
import Home from "./views/Home.vue"
export default {
  name:"App",
  components:{
     "app-home":Home
  },
  data:function(){
    return {
      selected:"goods"
    }
  }
}
</script>
<style scoped>
  html,body{
    height: 100%;
    width: 100%;
  }
  main{
    width:100%;
    position: relative;
  }
 
  .content{
    width:100%;
    overflow-y:auto;
  }
</style>


