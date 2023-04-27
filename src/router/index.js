import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/:department/:mainCategory",
      name: "department name",
      component: () => import("../views/test.vue"),
    },
    {
      path: "/product/:name",
      name: "product",
      component: () => import("@/views/single-product.vue"),
    },
    {
      path: "/contactus",
      name: "contact us",
      component: () => import("../views/contact.vue"),
    },
    {
      path: "/wishlist",
      name: "wishlist",
      component: () => import("@/views/cart-page.vue"),
    },
    {
      path: "/product/:item",
      name: "product details",
      component: () => import("../views/single-product.vue"),
      props: true,
    },
    {
      path: "/auth",
      component: () => import("@/views/register.vue"),
      children: [
        {
          path: "register",
          name: "register",
          component: () => import("@/components/auth/signup.vue"),
        },
        {
          path: "login",
          name: "login",
          component: () => import("@/components/auth/login.vue"),
        },
      ],
    },
    {
      path: "/catchAll(.*)*",
      name: "not found",
      component: () => import("@/views/not-found-page.vue"),
    },
  ],
});

export default router;
