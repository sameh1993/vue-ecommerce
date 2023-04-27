<script setup>
import titleComp from "@/components/helps/title.vue";
import singleProduct from "@/components/helps/single-product.vue";
import { useProductStore } from "../../stores/products";
import { computed } from "vue";

const productsStore = useProductStore();

const products = computed(() => {
  return productsStore.allProducts;
});
</script>

<template>
  <div class="products">
    <div class="container">
      <!-- start title -->
      <titleComp name="products" />

      <!-- start body -->
      <div class="row">
        <div
          v-for="(item, index) of products"
          :key="index"
          class="col-sm-6 col-xl-3"
        >
          <singleProduct :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.products {
  padding: 2.5em 0 3em;
}
</style>
