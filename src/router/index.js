// import Vue from "vue";
import VueRouter from "vue-router";
// Vue.use(VueRouter);
import AddPlace from "@/pages/AddPlace.vue";
// import PlaceDetail from "@/pages/PlaceDetail.vue";
import App from "../App.vue";
const routes = [
    {
      path: "/",
      name: "App",
      component: App,
    },
    //訂單相關
    {
      path: "/add",
      name: "AddPlace",
      component: AddPlace,
    },
    {
    //   path: "/list/:id",
    //   name: "ListInfo",
    //   component: ListInfo,
    //   beforeEnter: (to, from, next) => {
    //     if (JSON.parse(sessionStorage.getItem("userData")).role != "user") {
    //       next({ name: "List" });
    //     } else {
    //       next();
    //     }
    //   },
    },
    //產品相關
    {
      // path: "/detail",
      // name: "Detail",
      // component: Detail,
    //   beforeEnter: (to, from, next) => {
    //     if (JSON.parse(sessionStorage.getItem("userData")).role == "user") {
    //       console.log("無法修改訂單");
    //       next({ name: "List" });
    //     } else {
    //       next();
    //     }
    //   },
    }
  ];
  
  const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });
export default router;