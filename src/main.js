import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'


import {
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faShoppingCart, faInstagram, faFacebook, faTwitter);

Vue.component("font-awesome-icon", FontAwesomeIcon);

import "./assets/sass/main.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
