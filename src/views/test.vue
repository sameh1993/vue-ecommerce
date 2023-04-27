<script setup>
import bxslider from "@/components/content/bxslider.vue";
import popularCategory from "@/components/content/popular-category.vue";
import products from "@/components/content/products.vue";
</script>

<template>
  <div class>
    <!-- start bxslider -->
    <bxslider :mainCategory="$route.name" />

    <!-- start popular categories -->
    <popularCategory :mainCategory="$route.name" />

    <!-- start products -->
    <products :mainCategory="$route.name" />
  </div>
</template>