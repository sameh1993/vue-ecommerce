<template>
  <div class="category">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="item">
            <router-link to="/">
              <img src="@/assets/images/co1.jpg" class="img-fluid" />
              <div class="overlay d-flex flex-column justify-content-center align-items-center">
                <p>new collection</p>
                <h3>seasoning</h3>
                <p>there are many variations of passages of lorem ipsum</p>
                <!-- <button class="btn btn-info">explore more</button> -->
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-md-4">
          <div class="item">
            <router-link to="/">
              <img src="@/assets/images/co.jpg" class="img-fluid" />
              <div class="overlay d-flex flex-column justify-content-center align-items-center">
                <h3>seasoning</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority</p>
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-md-4">
          <div class="last d-flex flex-column">
            <div class="item">
              <router-link to="/">
                <img src="@/assets/images/co3.jpg" class="img-fluid" />
                <div class="overlay flex-column d-flex justify-content-center align-items-center">
                  <h3>cooking oil</h3>
                  <p>It is a long established fact that a reader</p>
                </div>
              </router-link>
            </div>
            <div class="item">
              <router-link to="/">
                <img src="@/assets/images/co3.jpg" class="img-fluid" />
                <div class="overlay flex-column d-flex justify-content-center align-items-center">
                  <h3>cooking oil</h3>
                  <p>It is a long established fact that a reader</p>
                </div>
              </router-link>
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
  background: #f5f5f5;
  .item {
    background-color: rgba(0, 0, 0, 0.4);
    position: relative;
    @include media-breakpoint-down(sm) {
      margin-top: 15px;
    }
    img {
      width: 100%;
    }
    .overlay {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      top: 0;
      color: #fff;
      text-transform: capitalize;
      padding: 25px;
      text-align: center;

      h3 {
        letter-spacing: 2px;
      }

      p:first-child {
        margin-bottom: 5px;
      }

      h3 {
        font-size: 32px;
        color: #fff;
        margin-bottom: 15px;
      }

      button {
        border-radius: 25px;
        border: 1px solid green;
        padding: 8px 18px;
        display: block;
        background: #fff;
        color: green;
        text-transform: capitalize;
        transition: all 0.4s;
        position: relative;
        &:hover {
          background: green;
          color: #fff;
          border-color: #fff;
        }
      }
    }
  }

  .last {
    & > div {
      background-color: #000;
      &:first-child {
        margin-bottom: 32px;
      }

      @include media-breakpoint-down(sm) {
        margin-bottom: 0 !important;
      }
    }
  }
}
</style>