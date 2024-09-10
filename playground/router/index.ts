import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: () => import("../pages/Home.vue") },
  {
    path: "/vue/test",
    name: "Home",
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "/vue/test-richtext",
    name: "RichTextDemo",
    component: () => import("../pages/RichTextDemo.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
