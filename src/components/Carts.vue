<template>
    <div class="content">
        <mt-cell v-for = "good in cars" :key = "good.id" class="cell">
           <img slot="icon" :src = "good.origin_square_image_url">
           <div>
               <p>{{good.title}}</p>   
                <p>数量：{{good.num}}&nbsp;价格：￥ {{good.api_price}}</p>
           </div>
           <div>
               <mt-button @click = "reduceCart(good)" class="jian">-</mt-button>
               <span>{{good.num * good.api_price | roundInt}}</span>
               <mt-button size="small" @click = "addCart(good)" class="jia">+</mt-button>
               <i class="fa fa-trash" @click = "removeOne(good)"></i>
           </div>
       </mt-cell>
       <div class="count"><button class="empty" @click = "clearAll()">清空购物车</button><p>总件数:{{countNum}}件 &nbsp;&nbsp;&nbsp; 总价格:{{countPrice | roundInt}}元</p></div>
    </div>
</template>
<script>

import {mapActions,mapState,mapMutations,mapGetters} from "vuex";
import {INIT_CARS} from "../store/demo/const";

export default {
    name:"carts",
    data:function(){
        return {
            goods: []
        }
    },
    computed:{
        ...mapState({
            cars:store => store.Demo.cars
        }),
        ...mapGetters(["countNum","countPrice"])
    },
    filters:{
        roundInt:function(val){
            return val.toFixed(2);
        }
    },
    methods:{
        ...mapActions(["addCart","reduceCart","removeOne","clearAll"]),
        ...mapMutations([INIT_CARS])
    },
    created(){
        this.INIT_CARS();
    }
}
</script>
<style scoped>
.content{
    margin-top: 40px;
    margin-bottom: 70px;
    background: #999;
}
.cell{
    width: 100%;
    height: 100px;
    background: #333;
    padding: 10px;
    position: relative;
}
.cell img{
    width: 50px;
    height: 80px;
    float: left;
}
.cell div:nth-child(1){
    width: 70%;
    height: 100%;
    float: left;
}
.cell div:nth-child(1) p:nth-child(1){
    height: 45%;
    width: 90%;
    padding:5px 10px;
    overflow : hidden;
    text-overflow: ellipsis;
    display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
}
.cell div:nth-child(1) p:nth-child(2){
    height: 30px;
    padding: 10px;
}
.cell div:nth-child(2){
    width: 40%;
    float: right;
    height: 20px;
}
.cell div:nth-child(2) .jian{
    float: left;
    width: 15px;
    height: 15px;
    line-height: 15px;
    text-align: center;
}
.cell div:nth-child(2) .jia{
    float: right;
     width: 15px;
    height: 15px;
     line-height: 15px;
    text-align: center;
}
.cell div:nth-child(2) span{
    float: left;
    width: 53px;
    height: 10px;
    text-align: center;
}
.cell div:nth-child(2) i{
    font-size: 20px;
    position: absolute;
    bottom: 10px;
    right: 20px;
}
.count{
    width: 100%;
    height: 40px;
    position: fixed;
    bottom:32px;
    background: rgb(8, 115, 148);
    font-size: 17px;
    line-height: 30px;
    text-align: right;
    padding: 5px 10px; 
}
.empty{
    width:90px;
    float: left;
    font-size: 12px;
    height: 30px;
    line-height: 30px;
    text-align: center;
}
</style>
