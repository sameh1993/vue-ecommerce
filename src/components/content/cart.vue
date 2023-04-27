<script setup>
import { defineProps, computed, onMounted } from "vue";
import { useCartsStore } from "@/stores/carts.js";
import cart from "@/components/helps/cart.vue";
import { useRouter } from "vue-router";

const cartStore = useCartsStore();
const router = useRouter();

const products = computed(() => {
  return cartStore.products;
});

function routeWishlist() {
  router.push("/wishlist");
  document.querySelector(".btn-close").click();
}
</script>

<template>
  <div
    class="modal fade"
    id="cart"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-capitalize pl-3" id="exampleModalLabel">
            <i class="fa fa-shopping-cart"></i>
            carts
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">
          <div class="table-responsive">
            <!--  start cart -->
            <cart />
          </div>
        </div>
        <div v-if="products.length > 0" class="modal-footer text-center">
          <button @click="routeWishlist" type="button" class="btn" to="/wishlist">checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/main.scss";
.modal-dialog {
  max-width: 50%;
  @include media-breakpoint-down(sm) {
    max-width: 100%;
    margin-top: 50%;
  }
}

.btn {
  border: 1px solid var(--mainColor);
  color: var(--mainColor);
  border-radius: 25px;
  font-size: 13px;
  padding: 8px 25px;
  text-transform: capitalize;
  transition: all 0.3s;
  font-weight: 600;
  &:hover {
    background-color: var(--mainColor);
    color: #fff;
  }
}
</style>