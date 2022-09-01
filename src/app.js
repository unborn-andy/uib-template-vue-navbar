import Vue from "vue";
import App from "./components/App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import { Uib, uibuilder } from "./../../../node_modules/node-red-contrib-uibuilder/front-end/uibuilder.esm.js";
// Optionally install the BootstrapVue icon components plugin
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Optionally install the vue-json-pretty components
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";
Vue.component("VueJsonPretty", VueJsonPretty);

// window.uibuilder = uibuilder;
// uibuilder.logLevel = 5
uibuilder.start({ ioNamespace: `https://${document.location.hostname}:1880/navbar`, ioPath: "/uibuilder/vendor/socket.io", loadStylesheet: false });
// uibuilder.start("https://192.168.0.7:1880/navbar");
// uibuilder.debug(false)

// Enable Vue Devtools
Vue.config.devtools = true;

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
