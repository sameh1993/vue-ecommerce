<script setup>
import { defineProps } from "vue";

const props = defineProps(["name"]);
</script>

<template>
  <div class="title text-center">
    <h2>{{ props.name }}</h2>
    <div class="res">
      <div class="parent">
        <div class="child"></div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.title {
  margin-bottom: 20px;
  h2 {
    text-transform: capitalize;
    font-size: 36px;
    margin-bottom: 13px;
  }
  .res {
    height: 30px;
    display: flex;
    justify-content: center;
    position: relative;

    &:after,
    &:before {
      content: "";
      width: 240px;
      height: 2px;
      background-color: green;
      top: 43%;
      position: absolute;
      z-index: -1;
    }

    &:before {
      top: 60%;
      width: 210px;
    }
    .parent {
      height: 100%;
      width: 40px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      .child {
        width: 20px;
        height: 20px;
        // background: #ddd;
        transform: rotate(-45deg);
        border: 2px solid green;
      }
    }
  }
}
</style>