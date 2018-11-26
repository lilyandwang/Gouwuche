<template>
  <div>
    <!-- 标题栏 -->
    <mt-header fixed title="淘宝吧" class="head">
      <router-link to="/" slot="left">
         <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- 脚部 -->
    <mt-tabbar fixed class="foot" v-model = "selected">  
      <mt-tab-item id="goods">
         <router-link to = "goods" tag="div">
            <i class="fa fa-list"></i>
            商品列表
         </router-link>
      </mt-tab-item>    
      <mt-tab-item id="carts">
        <router-link to = "carts" tag="div">
          <i class="fa fa-shopping-cart"></i>
          购物车列表
         </router-link>
      </mt-tab-item>   
    </mt-tabbar>
  </div>
</template>
<script>
export default {
    name:"Home",
    data:function(){
      return{
        selected:"goods"
      }
    }
}
</script>

<style scoped>
 .head{
    width :100%;
    height: 40px;
    line-height: 40px;
    background: rgb(8, 115, 148);
    font-size: 14px;
  }
  .foot{
    background: rgb(8, 115, 148);
    width: 100%;
    height: 30px;
    font-size: 16px;
  }
</style>

