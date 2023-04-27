<script setup>
import { computed } from "vue";
import { useCartsStore } from "@/stores/carts.js";
import { useProductStore } from "@/stores/products.js";
import { useRouter, useRoute } from "vue-router";

const cartStore = useCartsStore();
const productStore = useProductStore();
const router = useRouter();
const route = useRoute();

const props = defineProps(["products"]);

const routeToDetialProduct = function (item) {
  console.log("sameh");
  productStore.assignProduct(item);
  router.push(`/product/${route.params.item}`);
  $("[data-bs-target]").click();
};
</script>

<template>
  <div class="cart">
    <div v-if="cartStore.products.length > 0" class="table-responsive">
      <table class="table table-striped text-center text-capitalize">
        <thead>
          <tr class="table-dark">
            <td>image</td>
            <td>product name</td>
            <td>price</td>
            <td>discount</td>
            <td>amount</td>
            <td>total</td>
            <td>
              <i class="fa fa-trash text-white"></i>
            </td>
          </tr>
        </thead>
        <tbody class="body">
          <tr v-for="(item, index) of cartStore.products" :key="index">
            <td>
              <img :src="`/src/assets/images/${item.img}`" />
            </td>
            <td>
              <button class="product" @click="routeToDetialProduct(item)">
                {{ item.title.substring(0, 15) }} ....
              </button>
            </td>
            <td>${{ item.price }}</td>
            <td class="text-danger">{{ item.discount }}%</td>
            <td class="amount">
              <i
                @click="cartStore.decrease(item)"
                class="fa fa-angle-left border"
              ></i>
              <div class>{{ item.amount }}</div>
              <i
                @click="cartStore.increase(item)"
                class="fa fa-angle-right border"
              ></i>
            </td>
            <td>${{ item.total.toFixed(2) }}</td>
            <td>
              <i
                @click="cartStore.deleteProduct(item.title)"
                class="fa fa-trash bg-gray"
              ></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="alert alert-danger text-capitalize display-3">
      your cart is empty
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/main.scss";
.cart {
  .product {
    background: transparent;
    border: 0;
    outline: none;
    color: var(--secondColor);
  }
  .modal-header {
    padding: 15px 20px;
    i {
      font-size: 21px;
      margin-right: 8px;
    }
  }
  .fa-trash {
    color: var(--bs-danger);
  }

  .amount {
    display: flex;
    justify-content: center;
    div {
      font-size: 13px;
      line-height: 1.5;
      background-color: #e0e0e0;
      width: 21px;
      padding-top: 5px;
    }
  }

  .body {
    .fa {
      padding: 8px;
      margin: 0 5px;
      background-color: #d4d4d4;
    }
    img {
      width: 25px;
    }
  }

  .alert-danger {
    padding: 10px 15px;
    font-size: 15px;
  }
}

table {
  @include media-breakpoint-down(sm) {
    min-width: 500px;
  }
  .body {
    tr {
      line-height: 2;
    }
  }
}

.table > :not(caption) > * > * {
  font-size: 14px;
}
</style>
