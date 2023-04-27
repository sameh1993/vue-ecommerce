<script>
import titleComponent from "@/components/helps/title.vue";
import product from "@/components/helps/single-product.vue";
import emitter from "@/emitter.js";
import $ from "jquery";

export default {
  data() {
    return {
      currentCateg: "",
      staples: [
        {
          img: "of.png",
          title: "moong",
          price: 21,
          discount: 5,
          rating: 4.5,
          weight: 2,
        },
        {
          img: "of1.png",
          title: "sunflower",
          price: 654,
          discount: 5,
          rating: 2.5,
          weight: 8,
        },
        {
          img: "of2.png",
          title: "kabula chana",
          price: 987,
          discount: 10,
          rating: 1.5,
          weight: 10,
        },
        {
          img: "of2.png",
          title: "soya chucks",
          price: 321,
          discount: 4,
          rating: 5,
          weight: 60,
        },
      ],
      snacks: [
        {
          img: "of4.png",
          title: "lays",
          price: 65,
          discount: 9,
          rating: 4.5,
          weight: 100,
        },
        {
          img: "of5.png",
          title: "kurkure",
          price: 654,
          discount: 5,
          rating: 2.5,
          weight: 100,
        },
        {
          img: "of6.png",
          title: "popcom",
          price: 845,
          discount: 10,
          rating: 1.5,
          weight: 250,
        },
        {
          img: "of7.png",
          title: "nuts",
          price: 321,
          discount: 4,
          rating: 2.3,
          weight: 60,
        },
      ],
      fruitsVergatables: [
        {
          img: "of8.png",
          title: "banana",
          price: 65,
          discount: 9,
          rating: 4.5,
          weight: 6,
        },
        {
          img: "of9.png",
          title: "onion",
          price: 654,
          discount: 5,
          rating: 2.5,
          weight: 100,
        },
        {
          img: "of10.png",
          title: "popcom",
          price: 845,
          discount: 10,
          rating: 1.5,
          weight: 250,
        },
        {
          img: "of11.png",
          title: "nuts",
          price: 321,
          discount: 4,
          rating: 2.3,
          weight: 60,
        },
      ],
      breakfastCereal: [
        {
          img: "of12.png",
          title: "banana",
          price: 65,
          discount: 9,
          rating: 4.5,
          weight: 6,
        },
        {
          img: "of13.png",
          title: "onion",
          price: 654,
          discount: 5,
          rating: 2.5,
          weight: 100,
        },
        {
          img: "of14.png",
          title: "popcom",
          price: 845,
          discount: 10,
          rating: 1.5,
          weight: 250,
        },
        {
          img: "of15.png",
          title: "nuts",
          price: 321,
          discount: 4,
          rating: 2.3,
          weight: 60,
        },
      ],
    };
  },
  computed: {
    currentCategory() {
      if (this.currentCateg == "staples") {
        return this.staples;
      } else if (this.currentCateg == "snacks") {
        return this.snacks;
      } else if (this.currentCateg == "fruitsVergatables") {
        return this.fruitsVergatables;
      } else {
        return this.breakfastCereal;
      }
    },
  },
  components: {
    titleComponent,
    product,
  },
  methods: {
    getUrlImg(img) {
      const imageUrl = new URL(`/src/assets/images/${img}`, import.meta.url);
      return imageUrl;
    },
  },
  mounted() {
    $(".tabs li").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
      const category = $(this).data("tabs");
      this.currentCateg = category;
      emitter.emit("changeTab");
    });
  },
};
</script>

<template>
  <div class="special-offer">
    <div class="container">
      <!--start title  com -->
      <titleComponent name="special offers" />

      <!-- start tabs section -->
      <ul class="tabs d-flex justify-content-center list-unstyled">
        <li @click="currentCateg = 'staples'">staples</li>
        <li @click="currentCateg = 'snacks'">snacks</li>
        <li @click="currentCateg = 'fruitsVergatables'">friuts & vergtables</li>
        <li @click="currentCateg = 'breakfastCereal'">breackfast & cereal</li>
      </ul>

      <!-- start body section -->
      <div class="items">
        <div class="row">
          <div
            v-for="(item, index) of currentCategory"
            :key="index"
            class="col-md-6 col-xl-3"
          >
            <product :item="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/main.scss";
@import "@/../node_modules/bootstrap/scss/mixins/_breakpoints.scss";

.special-offer {
  padding: 2.7em 0;
}
.tabs {
  margin-top: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;

  li {
    text-decoration: none;
    font-size: 14px;
    text-transform: capitalize;
    transition: all 0.4s;
    font-size: 16px;
    font-weight: 600;
    border-radius: 5px;
    display: inline-block;
    cursor: pointer;
    min-width: 70px;
    text-align: center;
    padding-bottom: 8px;

    border-radius: 0;
    padding-left: 0;
    padding-right: 0;
    margin-left: 5px;
    margin-right: 5px;
    &:hover,
    &.active {
      color: green;
      border-bottom: 1px solid #050;
    }

    &:not(:first-child) {
      margin-left: 13px;
    }

    @include media-breakpoint-down(md) {
      flex: 1;
      flex-wrap: wrap;
    }

    @include media-breakpoint-down(sm) {
      flex: auto;
      margin-left: 0 !important;
    }
  }
}
</style>
