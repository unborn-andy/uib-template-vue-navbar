
import Vue from "vue";
import App from "./components/App.vue";
import router from "./router";

import uibuilder from "./../../../node_modules/node-red-contrib-uibuilder/front-end/src/uibuilderfe.js";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";


window.uibuilder = uibuilder;

new Vue({
  el: "#app",
  // runtimerCompiler: true,
  router,
  //  store,
  render: (h) => h(App),
});
