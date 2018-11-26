import { PUSH_CARS , SET_CARS ,INIT_CARS} from "./const";


export default {
    [PUSH_CARS](state,good){
        state.cars.push(good);
    },
    [SET_CARS](state,cars){
        state.cars = cars;
    },
    [INIT_CARS](state){
        let cars =getStroage();
        state.cars = cars;
    }
}

function getStroage(){
    return localStorage.cars ? JSON.parse(localStorage.cars) :[];
}