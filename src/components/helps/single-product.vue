<script>
import { useCartsStore } from "@/stores/carts.js";
import starRating from "@/components/helps/star-rating.vue";
import emitter from "@/emitter.js";
import { mapActions } from "pinia";
import { useProductStore } from "@/stores/products.js";
import { useAuthStore } from "@/stores/auth";
// import { useProductStore } from "@/stores/products";
import loading from "@/components/helps/loading-facebook.vue";
import { ref, onMounted } from "vue";

export default {
  props: ["item"],
  setup() {
    const cartStores = useCartsStore();
    const authStore = useAuthStore();
    let loading = ref(false);

    onMounted(() => {
      emitter.on("changeTab", function () {
        loading.value = true;
        setTimeout(() => {
          loading.value = false;
        }, 2000);
      });
    });
    return { cartStores, authStore, emitter, loading };
  },
  methods: {
    ...mapActions(useProductStore, ["assignProduct"]),
    stars(param) {
      const rating = String(param);
      return +rating.split(".")[0];
    },
    getUrlImg(img) {
      const imageUrl = new URL(`/src/assets/images/${img}`, import.meta.url);
      return imageUrl;
    },
    singleProduct(product) {
      this.assignProduct(product);
      this.$router.push(`/product/${product.title}`);
    },
    addToCart() {
      const isAuth = this.authStore.isIdToken;
      console.log(isAuth);
      if (isAuth) {
        this.cartStores.addToCart(this.item);
      } else {
        this.$router.push("/auth/login");
        this.$notify({
          title: "authentication",
          text: "you must be logged to add to cart",
        });
      }
    },
  },
  components: {
    starRating,
    loading,
  },
};
</script>

<template>
  <div class="parent">
    <div v-if="!loading" class="item">
      <div class="img">
        <img class="img-fluid" :src="getUrlImg(item.img)" />
      </div>
      <div class="info">
        <h4 @click="singleProduct(item)" class="text-capitalize">
          <!-- {{ item }} -->
          <button @click="singleProduct">{{ item.title }}</button>
        </h4>
        <div class="details d-flex justify-content-between">
          <p class="price">
            <span
              >${{
                (item.price - (item.price * item.discount) / 100).toFixed(2)
              }}</span
            >
            <del class="ml-3">${{ item.price }}</del>
          </p>

          <star-rating :rating="item.rating" />
        </div>
        <button @click="addToCart" class="btn main-button">add to card</button>
      </div>
    </div>

    <div v-else class="item-loading">
      <loading />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/main.scss";
.item {
  background-color: #fff !important;
  margin-top: 25px;
  padding: 15px;
  border-radius: 12px;
  padding-bottom: 30px;
  border: 1px solid var(--mainColor);
  .img {
    height: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 53%;
      margin: 0 auto;
    }
  }
  .price {
    color: #9f9f9f;
    span {
      margin-left: 4px;
    }
    del {
      margin-left: 10px;
    }
  }

  .fa-star,
  .fa-star-half-o {
    color: var(--mainColor);
  }

  .main-button {
    margin-top: 10px;
  }

  .info {
    margin-top: 20px;

    h4 {
      font-size: 21px;

      button {
        background: transparent;
        border: 0;
        outline: none;
        text-transform: capitalize;
      }
    }
  }
}

.parent {
  .item-loading {
    background-color: #f5f5f5;
    min-height: 360px;
    margin-top: 28px;
    border-radius: 15px;
    .lds-facebook {
      position: absolute !important;
    }
  }
}
</style>
