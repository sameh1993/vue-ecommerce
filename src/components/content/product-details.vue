<script setup>
import ourTitle from "@/components/helps/title.vue";
import starRating from "@/components/helps/star-rating.vue";
import socialLinks from "@/components/helps/social-links.vue";
import { useProductStore } from "../../stores/products";
import { useCartsStore } from "@/stores/carts.js";
import { useAuthStore } from "@/stores/auth.js";
import { notify } from "@kyvg/vue3-notification";
import { computed } from "vue";
import vZoom from "vue-zoom";

const cartStore = useCartsStore();
const authStore = useAuthStore();
const productStore = useProductStore();

const item = computed(() => {
  return productStore.singleProduct;
});

function clickToAddCart(item) {
  // return console.log(authStore.isIdtoken);
  if (authStore.isIdtoken) {
    cartStore.addToCart(item);
  } else {
    notify({
      title: "Authorization",
      text: "You have been logged in!",
    });
  }
}
</script>

<template>
  <div class="product-details">
    <div class="container">
      <!-- start head com -->
      <ourTitle name="single product" />
      <div class="body">
        <div class="row">
          <div class="col-md-5">
            <div class="parent-img w-100 text-center">
              <img :src="`/src/assets/images/${item.img}`" alt />
              <!-- <vZoom :src="`/src/assets/images/${item.img}`" width="100%" /> -->
            </div>
          </div>

          <div class="col-md-7">
            <h3 class="text-capitalize">{{ item.title }}</h3>
            <div class="price">
              <div v-if="item.discount > 0">
                <span>
                  ${{ item.price - (item.price * item.discount) / 100 }}
                </span>
                <del class="text-danger"> ${{ item.price }} </del>
              </div>
              <div v-else>
                {{ item.price }}
              </div>
            </div>

            <!-- start rating -->
            <star-rating rating="2.5" />

            <p class="desc">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>

            <socialLinks />

            <button @click="clickToAddCart(item)" class="main-button btn">
              add to card
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/main.scss";
.product-details {
  padding: 2.9em 0;
  .row {
    margin-top: 15px;
  }

  .parent-img {
    img {
      width: 44%;
      transform: translatey(-19px);
    }
    @include media-breakpoint-down(md) {
      height: 250px;
    }
  }
  .price {
    span {
      margin-right: 10px;
    }
  }

  .desc {
    margin-top: 10px;
    line-height: 1.8;
    font-size: 16px;
  }
  .social {
    justify-content: flex-start !important;
  }

  .main-button {
    display: inline-block;
    margin-top: 5px;
  }
}
</style>
