<script>
import emitter from "@/emitter.js";
export default {
  mounted() {
    emitter.on("our", (e) => {
      console.log(e);
    });
  },
};
</script>

<template>
  <div class="regiter">
    <div class="container">
      <!-- vue router -->
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/main.scss";
.register {
  @include media-breakpoint-down(sm) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
}
</style>
