<script setup>
import { defineProps, onMounted } from "vue";
// import components
import banner from "@/components/content/banner.vue";
import specialOffer from "@/components/content/special-offers.vue";
import categories from "@/components/content/categories.vue";
import ourSlider from "@/components/content/bxslider.vue";
import products from "@/components/content/products.vue";
// import emitter from "@/emitter.js";
const props = defineProps(["name"]);

// onMounted(() => {
//   emitter.on("our", (er) => {
//     console.log(er);
//   });
// });
</script>

<template>
  <main>
    <!-- start banner  -->
    <banner name="video" />

    <!-- start special offers -->
    <specialOffer />

    <!-- start categories -->
    <categories />

    <!-- start bxslider -->
    <ourSlider />

    <!-- start products -->
    <products />
  </main>
</template>
