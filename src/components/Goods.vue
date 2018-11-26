<template>
    <div class="content">
       <mt-cell v-for = "good in goods" :key = "good.id" class="cell">
           <img slot="icon" :src = "good.origin_square_image_url">
           <div>
               <p>{{good.title}}</p>
                <p>￥ {{good.api_price}}</p>
           </div>
           <i class="fa fa-shopping-cart" @click = "addCart(good)"></i>
       </mt-cell>
    </div>
</template>
<script>

import {mapActions,mapMutations} from "vuex";
import {INIT_CARS} from "../store/demo/const";


export default {
    name:"goods",
    data:function(){
        return {
            goods:[]
        }
    },
    methods:{
        ...mapActions(["addCart"]),
        ...mapMutations([INIT_CARS])
    },
    created(){
         this.$http.get("/data.json"
            ).then((res)=>{
                this.goods = res.data;
            })           
        this.INIT_CARS();
    }
}
</script>
<style scoped>
.content{
    margin-top: 40px;
    background: #999;
}
.cell{
    width: 100%;
    height: 100px;
    background: #333;
    padding: 10px;
}
.cell img{
    width: 50px;
    height: 80px;
    float: left;
}
.cell div{
    width: 90%;
    height: 100%;
    float: left;
}
.cell div p:nth-child(1){
    height: 70%;
    width: 90%;
    padding:5px 10px;
}
.cell div p:nth-child(2){
    height: 30px;
    padding: 10px;
}
.cell i{
    font-size: 30px;
}
</style>
