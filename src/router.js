import Vue from "vue";
import VueRouter from "vue-router";

// Pages
import Home from "./components/Home.vue";
import Page1 from "./components/Page1.vue";
import Page2 from "./components/Page2.vue";
import Page3 from "./components/Page3.vue";
import Page4a from "./components/Page4a.vue";
import Page4b from "./components/Page4b.vue";


Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: "navbar",
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/page1",
      component: Page1,
    },
    {
      path: "/page2",
      component: Page2,
    },
    {
      path: "/page3",
      component: Page3,
    },
    {
      path: "/page4a",
      component: Page4a,
    },
    {
      path: "/page4b",
      component: Page4b,
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});

export default router;
