<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";
import SocialLinks from "../helps/social-links.vue";
import { useNotification } from "@kyvg/vue3-notification";
import $ from "jquery";
const authStore = useAuthStore();
const { notify } = useNotification();

onMounted(() => {
  $(".logo h3").on("click", function () {
    notify({ title: "Admin", text: "you are welcome" });
  });
});
</script>

<template>
  <div class="top-bar">
    <img class="img-special" src="@/assets/images/download.png" />
    <div class="logo">
      <h3>
        <span class="logo"> big store</span>
        <span>
          t
          <br />h <br />e
        </span>
      </h3>
      <p>the best supermarket</p>
    </div>
    <ul class="list-unstyled links">
      <li>
        <RouterLink to="/wishlist">
          <i class="fa fa-heart"></i>
          wishlist
        </RouterLink>
      </li>

      <li>
        <button to="/auth/register">
          <i class="fa fa-sign-out"></i>
          logout
        </button>
      </li>

      <li>
        <RouterLink to="/auth/register">
          <i class="fa fa-user"></i>
          register
        </RouterLink>
      </li>

      <li>
        <RouterLink to="/auth/login">
          <i class="fa fa-sign-in"></i>
          login
        </RouterLink>
      </li>

      <li>
        <RouterLink to="/auth/login">
          <i class="fa fa-file-text"></i>
          order history
        </RouterLink>
      </li>

      <li>
        <RouterLink to="kitchen/water&beverages">
          <i class="fa fa-shopping-cart"></i>
          shipping
        </RouterLink>
      </li>
    </ul>

    <!-- start social links -->
    <SocialLinks />
  </div>
</template>

<style lang="scss" scoped>
@import "@/main.scss";

.top-bar {
  text-align: center;
  padding-top: 25px;
  position: relative;

  .img-special {
    position: absolute;
    left: 0;
    top: 0;
    width: 90px;
    @include media-breakpoint-down(sm) {
      width: 70px;
    }
  }

  .logo {
    display: inline-block;

    h3 {
      text-transform: capitalize;
      position: relative;
      letter-spacing: 3px;

      span:last-child {
        display: flex;
        position: absolute;
        left: 0;
        top: 0;
        flex-direction: column;
        font-size: 10px;
        background-color: var(--bs-red);
        color: #fff;
      }
    }

    p {
      letter-spacing: 4px;
      text-transform: capitalize;
      margin-bottom: 0;
    }
  }

  .links {
    display: flex;
    justify-content: center;
    padding-top: 10px;
    font-size: 13px;
    text-transform: capitalize;

    button {
      background: transparent;
      border: 0;
      outline: none;
      color: #ccc;
    }

    @include media-breakpoint-down(sm) {
      flex-wrap: wrap;

      li {
        padding-bottom: 4px;
      }
    }

    li {
      margin: 0 8px;

      @include media-breakpoint-down(sm) {
        margin: 0 16px;
      }

      a {
        text-decoration: none;
        color: #ccc;
      }

      i {
        color: #fab61a;
      }
    }
  }

  .special {
    @include media-breakpoint-down(sm) {
      margin-top: 8px;

      li {
        transform: scale(0.97);
        margin-right: 6px;
        border-radius: 4px;
        margin-top: 2px;

        a {
          background-color: #e7e7e7;
        }
      }
    }

    li {
      a {
        width: 37px;
        height: 37px;
        border-radius: 50%;
        transition: all 0.1s linear;
        line-height: 35px;
        margin-right: 13px;
        transform: scale(0.9);
      }

      &:first-of-type a {
        color: #3b5998;

        &:hover {
          color: #fff;
          background-color: #3b5998;
        }
      }

      &:nth-of-type(2) a {
        color: #4099ff;

        &:hover {
          color: #fff;
          background-color: #4099ff;
        }
      }

      &:nth-of-type(3) a {
        color: #cb2028;

        &:hover {
          color: #fff;
          background-color: #cb2028;
        }
      }

      &:last-of-type a {
        color: #e04d84;

        &:hover {
          color: #fff;
          background-color: #e04d84;
        }
      }
    }
  }
}
</style>
