<script>
export default {
  props: ["rating"],
  methods: {
    stars(param) {
      const rating = String(param);
      return +rating.split(".")[0];
    }
  }
};
</script>

<template>
  <div class="star-rating">
    <div class="votes">
      <div class="back">
        <i class="fa fa-star-o"></i>
        <i class="fa fa-star-o"></i>
        <i class="fa fa-star-o"></i>
        <i class="fa fa-star-o"></i>
        <i class="fa fa-star-o"></i>
      </div>

      <div class="front" :style="`width:${stars((rating / 5) * 100)}%`">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.votes {
  // background-color: #f5f5f5;
  position: relative;
  z-index: 1;
  position: relative;
  display: inline-block;

  i {
    margin-left: 3px;
    color: #222;
    position: relative;
    z-index: 15;
  }

  .front {
    position: absolute;
    left: 0;
    top: 0;
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>