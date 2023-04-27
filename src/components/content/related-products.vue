<script setup>
import maintitle from "@/components/helps/title.vue";
import singleProduct from "../helps/single-product.vue";
import { useProductStore } from "../../stores/products";
import { computed } from "@vue/reactivity";
const productStore = useProductStore();

const products = computed(() => {
  return productStore.allProducts;
});
</script>

<template>
  <div class="related">
    <div class="container">
      <!-- start main title -->
      <maintitle name="related products" />

      <!-- start body component -->
      <div class="row">
        <div v-for="(item, index) of products" class="col-md-3">
          <singleProduct :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.related {
  padding: 2.7em 0;
  background-color: #f5f5f5 !important;

  .title {
    .parent {
      background: #f5f5f5 !important;
      z-index: 50;
    }
    .res {
      position: relative;
      z-index: 9;
      &:after,
      &:before {
        z-index: 0;
      }
    }
  }
}
</style>
