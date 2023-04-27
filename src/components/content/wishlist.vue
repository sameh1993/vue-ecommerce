<script>
import heading from "@/components/helps/title.vue";
import cart from "@/components/helps/cart.vue";

export default {
  components: {
    heading,
    cart
  }
};
</script>

<template>
  <div class="wishlist">
    <div class="container">
      <!-- start heading -->
      <heading name="wishlist" />

      <div class="container">
        <!-- start cart -->
        <cart />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wishlist {
  padding: 2em 0;
}
</style>