<script>
export default {
  props: ["name"],
};
</script>

<template>
  <div class="banner">
    <div class="title">{{ $route.name }}</div>
    <div class="breadcrumb">
      <div class="container">
        <span class>home</span> /
        <span class="breadcrumb-item">{{ $route.name }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/main.scss";
.banner {
  height: 220px;
  background-image: url("@/assets/images/sh.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .title {
    font-size: 32px;
    text-transform: capitalize;
    letter-spacing: 2px;
    color: #fff;
    font-weight: 600;
  }

  .breadcrumb {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    color: #fff;
    text-transform: capitalize;
    padding-bottom: 15px;
    font-size: 18px;
    @include media-breakpoint-down(md) {
      padding-bottom: 1px;
      font-size: 15px;
    }
    span {
      color: #fff;
      &:first-child {
        margin-right: 5px;
      }
      &:last-child {
        margin-left: 5px;
      }
      &:after {
        color: #fff;
      }
    }
  }
}
</style>
