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
      path: "/invoice",
      name: "invoice",
      children: [
        {
          path: "add",
          name: "انشاء فاتوره",
          component: () => import("@/components/invoice/add-invoice.vue"),
        },
        {
          path: "update",
          name: "add invoice",
          children: [
            { path: "search", name: "search invoice", import("@/components/invoice/search-invoice.vue") },
            { path: "search", name: "search invoice", import("@/components/invoice/update-invoice.vue") },
          ]
        },
        {
          path: "view",
          name: "add invoice",
          component: () => import("@/components/invoice/all-invoice.vue"),
        },

        {
          path: "search",
          name: "ابحث بالكود",
          component: () => import("@/components/invoice/search-invoice.vue"),
        },
      ],
    },
    {
      path: "/store",
      name: "store",
      children: [
        {
          path: "add",
          name: "اضافه صنف جديد",
          component: () => import("@/components/store/add-product.vue"),
        },
        {
          path: "search",
          name: "استعلام عن سنف",
          component: () => import("@/components/store/search-product.vue"),
        },

        {
          path: "update",
          name: "تعديل صنف",
          component: () => import("@/components/store/edit-product.vue"),
        },
        {
          path: "details",
          name: "كارت صنف",
          component: () => import("@/components/store/details-product.vue"),
        },
      ],
    },
    {
      path: "/supplier",
      children: [
        {
          path: "",
          name: "استعلام عن مورد",
          component: () => import("@/components/suppliers/search-supplier.vue"),
        },
        {
          path: "add",
          name: "أضافه مورد",
          component: () => import("@/components/suppliers/add-supplier.vue"),
        },
        {
          path: "update",
          name: "تعديل مورد",
          component: () => import("@/components/suppliers/edit-supplier.vue"),
        },
        {
          path: "details",
          name: "بيانات الموارد",
          component: () =>
            import("@/components/suppliers/details-supplier.vue"),
        },
      ],
    },

    // {
    //   path: "/catchAll(.*)*",
    //   name: "not found",
    //   component: () => import("@/views/not-found-page.vue"),
    // },
  ],
});

export default router;
