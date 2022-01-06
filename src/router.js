import Vue from "vue";
import VueRouter from "vue-router";

// Pages
import Home from "./components/Home";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4a from "./components/Page4a";
import Page4b from "./components/Page4b";


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
