<script setup>
import productDetails from "@/components/content/product-details.vue";
import relatedProducts from "../components/content/related-products.vue";
</script>

<template>
  <div class="single-product">
    <!-- start product details -->
    <productDetails />

    <!--- start special offers -->
    <relatedProducts />
  </div>
</template>
