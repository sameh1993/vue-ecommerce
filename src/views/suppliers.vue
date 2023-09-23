<script setup>
import banner from "@/components/banner.vue";
</script>

<template>
  <div class="suppliers">
    <div class="ban">
      <!-- start banner -->
      <banner tab="مواردين" />
    </div>

    <!-- start nested router-->
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
.suppliers {
  .nested {
    background-color: #fff;
  }
}
</style>
