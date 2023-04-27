<script setup>
import { onMounted, computed, createElementBlock } from "vue";
import { useRouter } from "vue-router";
import { useCartsStore } from "@/stores/carts";
import { useAuthStore } from "@/stores/auth.js";
import { notify } from "@kyvg/vue3-notification";
import $ from "jquery";

const cartStore = useCartsStore();
const authStore = useAuthStore();
const router = useRouter();

const getProductCount = computed(() => {
  return cartStore.productsCount;
});

const isGetToken = computed(() => {
  return authStore.isIdToken;
});

const getMaintotal = computed(() => {
  return cartStore.cart.maintotal;
});

function logout() {
  authStore.logout().then((result) => {
    notify({
      title: "authentication",
      text: "sign out is done",
    });
    router.push("/");
  });
}

onMounted(() => {
  $("body").on("click", ".dropdown-toggle", function () {
    $(".profile .dropdown-menu").toggleClass("show");
  });

  $("body").on("click", ".dropdown-toggle a", function () {
    $(".profile .dropdown-menu").removeClass("show");
  });

  $(".nav-link:not(.dropdown-toggle), .dropdown-item").click(function () {
    $(".navbar-collapse").removeClass("show");
  });

  $(".dropdown-item").click(function () {
    $(this).parents(".dropdown-menu").removeClass("show");
  });

  $(".nav-item:not([class*='dropdown'])").click(function () {
    $(".dropdown-menu").removeClass("show");
  });

  $(".dropdown-item").css({
    background: "transparent",
  });

  $(".fa-shopping-cart").click(function () {
    if (isGetToken.value) {
      $("[data-bs-target]").click();
    } else {
      router.push("/auth/login");
      notify({
        title: "Registeration",
        text: "you must be logged",
      });
      notify({
        title: "Registeration",
        text: `
          user: user@example.com <br />
          pass: user12345
        `,
      });
    }
  });

  $(".dropdown-toggle").click(function () {
    $(this).siblings("ul").toggleClass("show");
    $(this)
      .parent(".nav-item")
      .siblings()
      .find(".dropdown-menu")
      .removeClass("show");
  });
});
</script>

<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              >Home {{ getMaintotal }}</router-link
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >kitchen</a
            >
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <div class="row">
                <div class="col-md-4 col-lg-3 col-sm-6">
                  <li>
                    <RouterLink
                      class="dropdown-item"
                      to="/kichen/breackfast&cereal"
                    >
                      water & beverages
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      class="dropdown-item"
                      to="/kichen/breackfast&cereal"
                      >fruits & verigetables</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      class="dropdown-item"
                      to="/kichen/breackfast&cereal"
                      >staples</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      class="dropdown-item"
                      to="/kichen/breackfast&cereal"
                      >brnaded food</RouterLink
                    >
                  </li>
                </div>

                <div class="col-md-4 col-lg-3 col-sm-6">
                  <li>
                    <RouterLink
                      class="dropdown-item"
                      to="/kichen/breackfast&cereal"
                      >breackfast & cereer</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      class="dropdown-item"
                      to="/kichen/breackfast&cereal"
                      >Snackes</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      class="dropdown-item"
                      to="/kichen/breackfast&cereal"
                      >branded food</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      class="dropdown-item"
                      to="/kichen/breackfast&cereal"
                      >discuit & cookie</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      class="dropdown-item"
                      to="/kichen/breackfast&cereal"
                      >sweets</RouterLink
                    >
                  </li>
                </div>
                <div class="col-md-4 col-lg-3 col-sm-6">
                  <li>
                    <RouterLink
                      class="dropdown-item"
                      to="/kichen/breackfast&cereal"
                      >pickle & condment</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink class="dropdown-item" to="/kichen/snacks"
                      >instant food</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink class="dropdown-item" to="/kichen/snacks"
                      >dry fruit</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink class="dropdown-item" to="/kichen/snacks"
                      >tea & coffee</RouterLink
                    >
                  </li>
                </div>

                <div class="col-md-8 col-lg-3 col-sm-6 img">
                  <img src="/src/assets/images/me1.png" class="img-fluid" />
                </div>
              </div>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >personal care</a
            >
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <div class="row">
                <div class="col-md-4 col-lg-3 col-sm-6">
                  <li>
                    <RouterLink
                      class="dropdown-item"
                      to="/personalCare/ayurvedic"
                      >ayurvedic</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      class="dropdown-item"
                      to="/personalCare/baby&care"
                      >baby care</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      class="dropdown-item"
                      to="/personalCare/cosmetics"
                      >cosmetics</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      class="dropdown-item"
                      to="/personalCare/deo&purtumies"
                      >deo & purtumies</RouterLink
                    >
                  </li>
                </div>
                <div class="col-md-4 col-lg-3 col-sm-6">
                  <li>
                    <RouterLink
                      class="dropdown-item"
                      to="/personalCare/hair-care"
                      >hair care</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      class="dropdown-item"
                      to="/personalCare/oral-care"
                      >oral care</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      class="dropdown-item"
                      to="/personalCare/personal-hygiane"
                      >personal hygiane</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      class="dropdown-item"
                      to="/personalCare/skin care"
                      >skin care</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      class="dropdown-item"
                      to="/personalCare/plasic wear"
                      >plasic wear</RouterLink
                    >
                  </li>
                </div>
                <div class="col-md-4 col-lg-3 col-sm-6">
                  <li>
                    <RouterLink
                      class="dropdown-item"
                      to="/personalCare/pooja needs"
                      >pooja needs</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      class="dropdown-item"
                      to="/personalCare/serveware"
                      >serveware</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      class="dropdown-item"
                      to="/personalCare/safefy accessories"
                      >safefy accessories</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      class="dropdown-item"
                      to="/personalCare/festive devoreatives"
                      >festive devoreatives</RouterLink
                    >
                  </li>
                </div>
                <div class="col-md-8 col-lg-3 col-sm-6 img">
                  <img src="/src/assets/images/me1.png" class="img-fluid" />
                </div>
              </div>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >household</a
            >
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <div class="row">
                <div class="col-md-4 col-lg-3 col-sm-6">
                  <li>
                    <RouterLink class="dropdown-item" to="/houseHold/sameh"
                      >cleaning accessories</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink class="dropdown-item" to="/houseHold/sameh"
                      >cookVear</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink class="dropdown-item" to="/houseHold/sameh"
                      >deteregent</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink class="dropdown-item" to="/houseHold/sameh"
                      >grandening needs</RouterLink
                    >
                  </li>
                </div>
                <div class="col-md-4 col-lg-3 col-sm-6">
                  <li>
                    <RouterLink
                      class="dropdown-item"
                      to="/houseHold/cleaning accessories"
                      >cleaning accessories</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink class="dropdown-item" to="/houseHold/cookVear"
                      >cookVear</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink class="dropdown-item" to="/houseHold/deteregent"
                      >deteregent</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      class="dropdown-item"
                      to="/houseHold/grandening needs"
                      >grandening needs</RouterLink
                    >
                  </li>
                </div>
                <div class="col-md-4 col-lg-3 col-sm-6">
                  <li>
                    <RouterLink
                      class="dropdown-item"
                      to="/houseHold/peeja needs"
                      >peeja needs</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink class="dropdown-item" to="/houseHold/servewaves"
                      >servewaves</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      class="dropdown-item"
                      to="/houseHold/safely accessories"
                      >safely accessories</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      class="dropdown-item"
                      to="/houseHold/festive decortrives"
                      >festive decortrives</RouterLink
                    >
                  </li>
                </div>
                <div class="col-md-8 col-lg-3 col-sm-6 img">
                  <img src="@/assets/images/me2.png" class="img-fluid" />
                </div>
              </div>
            </ul>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/contactus">contact us</RouterLink>
          </li>
        </ul>
      </div>
      <ul class="right list-unstyled d-flex">
        <li class="cart">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          <span class="productCount">
            {{ cartStore.productsCount }}
          </span>
          <span class data-bs-target="#cart" data-bs-toggle="modal"></span>
        </li>
        <li v-if="!authStore.isIdToken" class="nav-item user">
          <router-link
            to="/auth/login"
            class="fa fa-user-circle-o"
          ></router-link>
        </li>
        <li v-else class="nav-item dropdown position-relative profile">
          <a
            class="nav-link dropdown-toggle"
            role="button"
            aria-expanded="false"
          >
            <img
              src="@/assets/images/user.png"
              class="rounded rounded-circle user"
            />
          </a>
          <ul
            class="dropdown-menu options-profile"
            aria-labelledby="navbarDropdown"
          >
            <li>
              <router-link class="dropdown-item reset" to="/wishlist">
                your carts</router-link
              >
            </li>
            <li class="dropdown-item" @click="logout()">logout</li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import "@/main.scss";

.navbar {
  .container {
    position: relative;
  }

  .profile {
    & > .nav-link {
      padding-left: 0 !important;
      padding-right: 0 !important;
      text-decoration: none;
      &:after,
      &::before {
        display: none;
      }
      &:hover {
        text-decoration: none;
      }
    }
    img {
      width: 39px;
    }
    .dropdown-menu {
      left: auto;
      right: 0;
      padding: 15px 15px;
      margin: 0 !important;
      i {
        position: absolute;
        left: 10px;
        bottom: 25px;
      }
    }
  }

  .user {
    text-decoration: none;
  }
  .nav-item {
    position: static;
    text-transform: capitalize;
    background-color: transparent;
    font-size: 14px;
    .nav-link {
      position: relative;
      z-index: 5;
      padding-left: 17px;
      padding-right: 17px;
      text-decoration: none;

      &:after {
        position: absolute;
        right: 0;
        bottom: 0;
        top: 0;
        background-color: #fab005;
        z-index: -1;
        content: "";
        border-top: 0;
        border-right: 0;
        border-left: 0;
        transition: all 0.5s;
        width: 0;
        opacity: 0;
        height: 100%;
      }

      &:before {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        content: "";
        background: var(--mainColor);
        width: 0;
        z-index: 2;
        transition: width 0.4s;
      }

      &:hover:after {
        width: 100%;
        opacity: 1;
      }

      &:hover:before {
        width: 4px;
        opacity: 1;
      }
    }
  }

  .dropdown-menu {
    padding: 25px 22px 13px 11px;
    @include media-breakpoint-up(md) {
      margin-left: 50px;
    }
    @include media-breakpoint-down(sm) {
      margin-left: 13px;
      margin-right: 13px;
    }

    .dropdown-item {
      font-size: 14px;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .options-profile:hover {
    background-color: #f8f8f8;
    a {
      text-decoration: none;
    }
  }

  & > .dropdown {
    position: static;
    .navbar-collapse > .dropdown-menu {
      min-width: 790px;
      padding: 23px 20px;
      position: absolute !important;
      top: 100%;
      border-top: 1px solid #ababab;
      z-index: 10;

      @include media-breakpoint-up(md) {
        padding: 13px 8px;
        margin-left: 50px !important;
      }

      .dropdown-item {
        font-size: 12px;
        padding-left: 4px;
        background: transparent !important;

        &:before {
          font-family: "fontAwesome";
          content: "\f105";
          margin-right: 8px;
          text-decoration: none !important;
        }

        &.active,
        &:hover {
          background-color: transparent;
          color: inherit;
        }

        .nav-link {
          @include media-breakpoint-up(md) {
            &:hover {
              text-decoration: underline !important ;
              background-color: transparent !important;
            }
          }
        }
        @include media-breakpoint-up(md) {
          img {
            @include media-breakpoint-up(md) {
              transform: translatey(-23px);
            }
          }
        }
      }

      .row > div:last-child {
        padding-top: 30px;
      }
    }
  }

  .navbar-toggler:focus {
    box-shadow: none;
  }

  .right {
    margin-bottom: 0;
    align-items: center;
    .cart {
      position: relative;

      .fa-shopping-cart {
        font-size: 27px;
        color: var(---mainColor);
      }

      span {
        line-height: 14px;
        background-color: yellow;
        position: absolute;
        top: -2px;
        right: -4px;
        border-radius: 50%;
        font-size: 10px;
        padding: 3px;
      }
    }
    li {
      margin-left: 15px;
      font-size: 21px;
    }
    .profile {
      .dropdown-item {
        margin-left: 0;
      }
    }

    a {
      color: #000;
      text-decoration: none;
    }
  }
}

.navbar-toggler:hover {
  outline: none;
}

.navbar-toggler {
  outline: none;
  box-shadow: none !important;
}

.navbar-collapse {
  @include media-breakpoint-down(lg) {
    position: absolute !important;
    top: 119%;
    right: 0;
    left: 0;
    background: #f8f9fa;
    z-index: 60;
    margin-left: 15px;
    margin-right: 15px;
    border-top: 1px solid #ababab;

    .dropdown-item {
      font-size: 13px;
      &:hover {
        background-color: transparent !important;
      }
    }

    img {
      width: 62%;
      margin: 25px auto;
      display: block;
    }
  }
}
</style>
