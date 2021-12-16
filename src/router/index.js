import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/sendDataWithProps",
    name: "props",
    component: () =>
      import(
        /* webpackChunkName: "SendDataProps" */ "../views/SendDataProps.vue"
      ),
  },

  {
    path: "/InjectProvide",
    name: "Provide",
    component: () =>
      import(
        /* webpackChunkName: "SendDataInkectProvide" */ "../views/SendDataInkectProvide.vue"
      ),
  },
  {
    path: "/sendDataRefs",
    name: "refs",
    component: () =>
      import(
        /* webpackChunkName: "SendDataWithRefs" */ "../views/SendDataWithRefs.vue"
      ),
  },
  {
    path: "/sendDataPrototype",
    name: "prototype",
    component: () =>
      import(
        /* webpackChunkName: "SendDataWithPrototype" */ "../views/SendDataWithPrototype.vue"
      ),
  },
  {
    path: "/sendWithParent",
    name: "parent",
    component: () =>
      import(
        /* webpackChunkName: "SendWithParent" */ "../views/SendWithParent.vue"
      ),
  },
  {
    path: "/sendDataWithVuex",
    name: "vuex",
    component: () =>
      import(
        /* webpackChunkName: "SendDataWithVuex" */ "../views/SendDataWithVuex.vue"
      ),
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
