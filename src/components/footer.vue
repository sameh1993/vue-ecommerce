<template>
  <div class="footer">
    <div class="container">
      <!--start links -->
      <div class="row">
        <div class="col-md-3">
          <h4>about us</h4>
          <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
        </div>

        <div class="col-md-3">
          <h4>menu</h4>
          <ul class="links list-unstyled">
            <li>
              <router-link to="/">home</router-link>
            </li>
            <li>
              <router-link to="/">kitchen</router-link>
            </li>
            <li>
              <router-link to="/">personal care</router-link>
            </li>
            <li>
              <router-link to="/">household</router-link>
            </li>
            <li>
              <router-link to="/">short codes</router-link>
            </li>
            <li>
              <router-link to="/">contact</router-link>
            </li>
          </ul>
        </div>

        <div class="col-md-3">
          <h4>customer serivces</h4>
          <ul class="links list-unstyled">
            <li>
              <router-link to="/">shipping</router-link>
            </li>
            <li>
              <router-link to="/">terms & conditions</router-link>
            </li>
            <li>
              <router-link to="/">faqs</router-link>
            </li>

            <li>
              <router-link to="/">contact</router-link>
            </li>
            <li>
              <router-link to="/">online shipping</router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <h4>my account</h4>
          <ul class="links list-unstyled">
            <li>
              <router-link to="/auth/login">login</router-link>
            </li>
            <li>
              <router-link to="/auth/register">register</router-link>
            </li>
            <li>
              <router-link to="/auth/register">wishlist</router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- start logo -->
      <div class="footer-logo">
        <div class="logo">
          <h3>
            big store
            <span>
              t
              <br />h
              <br />e
            </span>
          </h3>
          <p>the best supermarket</p>
        </div>
        <p
          class="text-white"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam deleniti porro, deserunt obcaecati qui at ut dicta velit, asperiores officiis repellat nemo rerum dolore beatae? Distinctio debitis dolorum necessitatibus! Officiis?</p>
        <div class="links d-flex justify-content-center">
          <i class="fa fa-facebook"></i>
          <i class="fa fa-twitter"></i>
          <i class="fa fa-pinterest-p"></i>
          <i class="fa fa-dribbble"></i>
        </div>

        <div class="info d-flex mt-3 justify-content-between text-white text-sm-center">
          <p>
            <i class="fa fa-home"></i> 12K Street , 45 Building Road Canada.
          </p>
          <p>
            <i class="fa fa-phone"></i> +1234 758 839 , +1273 748 730
          </p>
          <p>
            <i class="fa fa-envelope"></i> 12K Street , 45 Building Road Canada.
          </p>
        </div>

        <div
          class="copy-right text-center text-white"
        >© 2016 Big store. All Rights Reserved | Design by W3layouts</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/main.scss";
@import "@/../node_modules/bootstrap/scss/mixins/breakpoints.scss";
.footer {
  padding: 3em 0;
  background-color: #353535;
  color: #ababab;
  h4 {
    text-transform: capitalize;
    margin-bottom: 15px;
  }

  a {
    text-decoration: none;
    color: #ababab;
    margin-bottom: 7px !important;
    display: inline-block;
    text-transform: capitalize;
  }

  .footer-logo {
    .logo {
      width: 250px;
      margin: auto;

      h3 {
        text-transform: capitalize;
        position: relative;
        letter-spacing: 3px;
        text-align: center;
        font-size: 32px;

        span {
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
        margin-top: 15px;
      }
    }
    & > p {
      width: 70%;
      margin: auto;
      text-align: center;
      line-height: 2;
      font-size: 14px;
      margin-top: 15px;
      @include media-breakpoint-down(sm) {
        width: 100%;
      }
    }
    .links {
      margin-top: 20px;
      margin-bottom: 25px;
      i {
        width: 37px;
        height: 37px;
        border-radius: 50%;
        background-color: #3b5998;
        line-height: 37px;
        text-align: center;
        color: #fff;
        margin: 0 4px;
        transition: all 0.5s;
        &:nth-child(2) {
          background: #4099ff;
        }
        &:nth-child(3) {
          background: #cd2830;
        }
        &:nth-child(4) {
          background: #e35e90;
        }

        &:hover {
          transform: rotate(360deg);
        }
      }
    }

    .info {
      i {
        color: #b6b6b6;
      }
      p {
        color: #fff;
      }
      margin: 25px 0;
      @include media-breakpoint-down(sm) {
        text-align: center;
        flex-direction: column;
      }
    }
  }
}
</style>