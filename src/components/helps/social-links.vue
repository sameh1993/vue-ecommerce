<template>
  <ul class="list-unstyled social d-flex justify-content-center">
    <li class>
      <a href="#" class="fa fa-facebook"></a>
    </li>
    <li class>
      <a href="#" class="fa fa-twitter"></a>
    </li>
    <li class>
      <a href="#" class="fa fa-pinterest-p"></a>
    </li>
    <li class>
      <a href="#" class="fa fa-dribbble"></a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import "@/main.scss";

.social {
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
      text-align: center;
      background: #f5f5f5;
      text-decoration: none;
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
</style>
