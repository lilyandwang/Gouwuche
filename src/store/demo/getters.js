export default {
    countNum: function (state) {
        let countNum = 0;
        state.cars.forEach((good)=>{
            countNum += good.num
        })
        return countNum;
    },
    countPrice: function (state) {
        let countPrice = 0;
        state.cars.forEach((good)=>{
            countPrice += good.num * good.api_price ;
        })
        return countPrice;
    }
}
