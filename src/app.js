
import Vue from "vue";
import App from "./components/App.vue";
import router from "./router";

// import uibuilder from "./../../../node_modules/node-red-contrib-uibuilder/front-end/src/uibuilderfe.js";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Optionally install the vue-json-pretty components
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';
Vue.component('VueJsonPretty', VueJsonPretty);

window.uibuilder = uibuilder;
uibuilder.start('/navbar', '/uibuilder/vendor/socket.io')
// uibuilder.start()

// Enable Devtools
Vue.config.devtools = true

new Vue({
  el: "#app",
  // runtimerCompiler: true,
  router,
  render: (h) => h(App),
});
