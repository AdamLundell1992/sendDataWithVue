import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "buefy/dist/buefy.css";
import Buefy from "buefy";
import store from "./store/index.js";

Vue.config.productionTip = false;
Vue.use(Buefy);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
