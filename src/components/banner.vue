<script setup>
import { defineProps } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const props = defineProps(["tab"]);
</script>

<template>
  <div class="banner d-flex">
    <router-link to="/">
      <i class="fa fa-home" aria-hidden="true"></i>
    </router-link>
    <span> / </span>
    {{ props.tab }}
    <span> / </span>
    {{ route.name }}
  </div>
</template>

<style lang="scss">
.banner {
  color: #222;
  font-family: var(--fontFamily);
  background-color: #fff;
  padding: 15px;
  span {
    margin: 0 7px;
    display: inline-block;
  }
}
</style>
