import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  methods: {
    openNav: function() {
      document.getElementById("mySidenav").style.width = "0px";
    },
    closeNav: function() {
      document.getElementById("mySidenav").style.width = "0";
    },
  },
  render: h => h(App)
}).$mount("#app");
