import Vue from "vue";
import vuex from "vuex";

Vue.use(vuex)

import Demo from "./demo";

export default new vuex.Store({
    modules:{
        Demo
    }
})