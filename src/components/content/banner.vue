<script>
import "@/assets/js/jquery.bxslider.min.js";
import LoadingFacebook from "../helps/loading-facebook.vue";

export default {
  props: ["name"],
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    getUrlImg(img) {
      // const imageUrl = new URL(`/src/assets/video/${img}`, import.meta.url);
      const imageUrl = `/src/assets/video/${img}`;
      return imageUrl;
    },
  },
  components: { LoadingFacebook },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 800);
  },
};
</script>

<template>
  <div class="parent-banner">
    <div v-if="!loading" class="">
      <div v-if="name == 'slider'" class="home-banner">
        <h2>slider</h2>
      </div>

      <div
        v-else
        class="page-banner d-flex justify-content-center align-items-center"
      >
        <div class="bg-video">
          <video autoplay loop muted>
            <source src="@/assets/video/video.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="content text-center">
          <div class="container">
            <h2>
              It is a long established fact that a reader will be distracted by
              the readable
            </h2>
            <form
              @submit.prevent="submiting()"
              class="form d-flex justify-content-center"
            >
              <div class="d-flex">
                <div class="form-group">
                  <input
                    type="text"
                    class="search form-control"
                    placeholder="Search..."
                  />
                </div>
                <button class="form-control" type="submit">
                  <i class="fa fa-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <LoadingFacebook v-if="loading" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/main.scss";
@import "@/assets/css/jquery.bxslider.min.css";
@import "@/assets/css/uikit.min.css";

.parent-banner {
  background: #efefef;
  overflow: hidden;
  @include media-breakpoint-up(sm) {
    height: 500px;
  }
}

.page-banner {
  height: 500px;
  background-color: transparent !important;
  color: #fff;
  position: relative;
  overflow: hidden;
  .bg-video {
    background-color: #f5f5f5;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 1;
    video {
      margin: auto;
      position: absolute;
      z-index: 0;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      visibility: visible;
      width: 1521px;
      height: auto;
    }
  }

  .content {
    z-index: 5;
    position: relative;
  }

  @include media-breakpoint-down(sm) {
    height: 230px;
  }
}

h2 {
  text-transform: capitalize;
  font-size: 2em;
  color: #fff;
  @include media-breakpoint-down(sm) {
    font-size: 1em;
  }
}

.form {
  margin-top: 50px;

  @include media-breakpoint-down(sm) {
    margin-top: 20px;
  }

  .form-group {
    width: 400px;
    margin-right: 2px;
    @include media-breakpoint-down(md) {
      width: 260px;
    }

    .search {
      width: 100%;
      padding: 8px 10px;
      background-color: rgba(255, 255, 255, 0.3);
      color: #222;
      border-radius: 2px;
      border-color: transparent;
      border-radius: 4px;
      height: 45px;

      &:focus {
        border-color: transparent;
        box-shadow: none;
        outline: none;
      }
    }

    .search::placeholder {
      color: #fff;
    }
  }

  button {
    border: 1px solid #ccc;
    padding: 8px 10px;
    color: #333;
    width: 45px;
    height: 45px;
  }
}
</style>
