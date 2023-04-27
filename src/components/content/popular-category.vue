<script>
// import { getImageUrl } from "../../helps/funs-helps";

export default {
  props: ["mainCategory"],
  data() {
    return {
      kitchen: [
        {
          img: "ki.jpg",
          title: "Dal",
          desc: "Nam libero tempore",
        },
        {
          img: "ki2.jpg",
          title: "Snacks",
          desc: "Nam libero tempore",
        },
        {
          img: "ki3.jpg",
          title: "Spice",
          desc: "Nam libero tempore",
        },
      ],
      personalCare: [
        {
          img: "ki.jpg",
          title: "Dal",
          desc: "Nam libero tempore",
        },
        {
          img: "ki2.jpg",
          title: "Snacks",
          desc: "Nam libero tempore",
        },
        {
          img: "ki3.jpg",
          title: "Spice",
          desc: "Nam libero tempore",
        },
      ],
      houseHold: [
        {
          img: "ki.jpg",
          title: "Dal",
          desc: "Nam libero tempore",
        },
        {
          img: "ki2.jpg",
          title: "Snacks",
          desc: "Nam libero tempore",
        },
        {
          img: "ki3.jpg",
          title: "Spice",
          desc: "Nam libero tempore",
        },
      ],
    };
  },
  methods: {
    getImageUrl(img) {
      const imageUrl = new URL(`/src/assets/images/${img}`, import.meta.url);
      //   const imageUrl = `/src/assets/video/${img}`;
      return imageUrl;
    },
  },
};
</script>

<template>
  <div class="category">
    <div class="container">
      <div class="head">
        <h3>popular categories</h3>
      </div>
      <div class="body">
        <div class="row">
          <div
            v-for="(item, index) of kitchen"
            :key="index"
            class="col-md-6 col-lg-4"
          >
            <div class="item">
              <div class="img">
                <img :src="getImageUrl(item.img)" class="img-fluid" />
              </div>
              <div class="info">
                <h3>{{ item.title }}</h3>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/main.scss";
@import "@/../node_modules/bootstrap/scss/mixins/_breakpoints.scss";
.category {
  padding: 3em 0;
  .head {
    h3 {
      text-transform: capitalize;
    }
  }
  .item {
    .img {
      height: 240px;
      margin-top: 15px;
      margin-bottom: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .tabs li {
      @include media-breakpoint-down(sm) {
        margin-left: 0;
      }
    }
    .info {
      h3 {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 3px;
        text-transform: capitalize;
      }
      p {
        margin-bottom: 3px;
      }
    }
  }
}
</style>
