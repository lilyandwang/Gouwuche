import {PUSH_CARS,SET_CARS} from "./const";

export default {
    addCart : function(store,good){        
        setTimeout(()=>{
            let cars = getStroage();
            let hasGood = cars.some(function(item){
                if(item.id == good.id){
                    item.num ++;
                    return true;
                }
            })
            if(!hasGood){
                cars.push(good)
            }
            localStorage.cars = JSON.stringify(cars)
            store.commit(SET_CARS,cars);
        },100)
    },
    reduceCart:function(store,good){
        setTimeout(()=>{
            let cars = getStroage();
            cars.some(function(item){
                if(item.id == good.id){
                    item.num --;
                    if(item.num <= 1){
                        item.num =1;
                    }
                    return true;
                } 
            })
            localStorage.cars = JSON.stringify(cars)
            store.commit(SET_CARS,cars);
            
        },100)
    },
    removeOne:function(store,good){      
        let cars = getStroage();
        cars.splice(cars.findIndex(item => item.id === good.id), 1)       
        localStorage.cars = JSON.stringify(cars)
        store.commit(SET_CARS,cars);
    },
    clearAll:function(store){
        let cars = getStroage();
        localStorage.cars = [];
        store.commit(SET_CARS,cars);
    }
}

function getStroage(){
    return localStorage.cars ? JSON.parse(localStorage.cars):[];
}