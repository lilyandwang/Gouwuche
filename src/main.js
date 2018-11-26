import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
// mint-ui
import {InfiniteScroll} from "mint-ui";
import "mint-ui/lib/style.css"
Vue.use(InfiniteScroll)

// 引入mint需要的组件
import { Tabbar, TabItem ,Header , Cell ,Button} from 'mint-ui';

Vue.component("mt-cell", Cell);
Vue.component("mt-button", Button);
Vue.component("mt-tabbar", Tabbar);
Vue.component("mt-tab-item", TabItem);
Vue.component("mt-header", Header);

// 图标:直接引入font-awesome文件夹
import "../public/font-awesome/font-awesome-4.7.0/css/font-awesome.min.css"

// axios
import axios from "axios";
Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
