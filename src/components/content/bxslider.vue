<script setup>
import { onMounted, computed, reactive } from "vue";
import { useRoute } from "vue-router";
import $ from "jquery";

const route = useRoute();

const slider = reactive([
  {
    img: "ba.jpg",
    category: "/kitchen/sameh",
  },
  {
    img: "ba1.jpg",
    category: "/personalCare/sameh",
  },
  {
    img: "ba2.jpg",
    category: "/household/sameh",
  },
]);

function getUrlImg(img) {
  const imageUrl = new URL(`/src/assets/images/${img}`, import.meta.url);
  return imageUrl;
}

onMounted(() => {
  $(".bxslider").bxSlider({
    auto: true,
    controls: false,
  });
});
</script>

<template>
  <div class="parent-slider">
    <div v-if="route.name == 'home'" class="bxslider">
      <div v-for="(item, index) of slider" :key="index">
        <router-link :to="item.category">
          <img :src="getUrlImg(item.img)" class="img-fluid" />
        </router-link>
      </div>
    </div>
    <div v-else class="bxslider">
      <div v-for="(item, index) of slider" :key="index">
        <img :src="getUrlImg(item.img)" class="img-fluid" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../assets/css/jquery.bxslider.min.css";
@import "@/main.scss";
@import "@/../node_modules/bootstrap/scss/mixins/_breakpoints.scss";

.bx-wrapper {
  height: 100% !important;
  box-shadow: none;
  border: 0;
  margin-bottom: 0;
}

.bx-viewport {
  @include media-breakpoint-down(sm) {
    height: 150px !important;
    background-color: #050;

    .bxslider {
      height: 100%;
      & > div {
        height: 100%;
        img {
          height: 100%;
        }
      }
    }
  }
}

.bx-wrapper .bx-pager.bx-default-pager a.active {
  background-color: #fab005;
}
.bx-wrapper .bx-pager.bx-default-pager a {
  background: green;
}

.parent-slider {
  margin-bottom: 2em;
}
</style>
