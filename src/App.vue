<script setup>
import { useNotification } from "@kyvg/vue3-notification";
import { ref, onMounted, computed } from "vue";
import WOW from "wow.js/dist/wow";
import sidebar from "@/components/sidebar.vue";
import navbar from "@/components/header/navbar.vue";

// importted components

onMounted(() => {
  new WOW().init();
});
</script>

<template>
  <div class="app">
    <div class="main-content">
      <!--left-fixed -navigation-->
      <sidebar />
      <!--left-fixed -navigation-->

      <navbar />

      <!-- main content start-->
      <div class="page-wrapper bg-light" id="page-wrapper">
        <router-view v-slot="{ Component, route }">
          <transition name="fade">
            <component :is="Component" :key="route.path" />
          </transition>
        </router-view>
      </div>
    </div>

    <!-- start notifation comp -->
    <notifications position="top right" />
  </div>
</template>

<style lang="scss">
.page-wrapper {
  section {
    background-color: #fff;
    box-shadow: var(--mainShadow);
  }
}
</style>
