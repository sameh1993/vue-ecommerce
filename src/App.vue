<script setup>
import logoComponent from "@/components/header/logo.vue";
import navbar from "@/components/header/navbar.vue";
import footerComponent from "@/components/footer.vue";
import cart from "@/components/content/cart.vue";
import { RouterView } from "vue-router";
import { useNotification } from "@kyvg/vue3-notification";
import { useCartsStore } from "@/stores/carts.js";
import { useAuthStore } from "@/stores/auth.js";
import { ref, onMounted, computed } from "vue";
import WOW from "wow.js/dist/wow";

const cartStore = useCartsStore();
const authStore = useAuthStore();
const { notify } = useNotification();

const names = ref([
  { name: "sameh sayed", age: 30 },
  { name: "ahmed sayed", age: 23 },
  { name: "heba sayed", age: 26 },
]);

const getTotal = computed(() => {
  return cartStore.gettotalRevence;
});

const idToken = computed(() => authStore.isIdToken);

function getIndex(ourArray) {
  const filter = names.value.filter((res) => res.age == 23);
  return names.value.indexOf(filter[0]);
}

onMounted(() => {
  new WOW().init();
});
</script>

<template>
  <div class="app">
    <header class="wow slideInLeft" data-wow-duration="2s" data-wow-delay="3s">
      {{ getTotal }}
      <!-- start logo -->
      <logoComponent />

      <!-- start navbar -->
      <navbar />
    </header>

    <!--- start router -->
    <router-view v-slot="{ Component, route }">
      <transition name="fade">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>

    <!-- start footer -->
    <footerComponent />

    <cart />

    <notifications position="top right" />
  </div>
</template>

<style lang="scss" scoped>
@import "wow.js/css/site.css";

header {
  text-align: center;

  i {
    color: #fff;
  }
}

i {
  color: #fff;
}

body {
  overflow: hidden;
}

.vue-notification-group {
  margin: 20px;
}
</style>
