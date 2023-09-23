<script setup>
import "@/assets/js/classie.js";
import { onMounted } from "vue";

onMounted(() => {
  var menuLeft = document.getElementById("cbp-spmenu-s1"),
    showLeftPush = document.getElementById("showLeftPush"),
    body = document.body;

  showLeftPush.onclick = function () {
    classie.toggle(this, "active");
    classie.toggle(body, "cbp-spmenu-push-toright");
    classie.toggle(menuLeft, "cbp-spmenu-open");
    disableOther("showLeftPush");
  };

  function disableOther(button) {
    if (button !== "showLeftPush") {
      classie.toggle(showLeftPush, "disabled");
    }
  }

  $(".sidebar .collapse").addClass("animate__animated animate_fadeInLeft");

  $(".scrollbar .nav li").click(function () {
    $(this).addClass("active").siblings("li").removeClass("active");
    $(this).find(".collapse").slideDown(300);
    $(this).siblings("li").find(".collapse").slideUp(300);
  });

  $(".scrollbar .nav li > ul a").click(function () {
    $(this).toggleClass("active").removeClass("active");
  });

  $("#showLeftPush").click(function () {
    $("body").toggleClass("cbp-spmenu-push-toright");
  });
});
</script>
<template>
  <div class="sidebar" role="navigation">
    <div class="navbar-collapse">
      <nav
        class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right dev-page-sidebar mCustomScrollbar _mCS_1 mCS-autoHide mCS_no_scrollbar"
        id="cbp-spmenu-s1"
      >
        <div class="scrollbar scrollbar1">
          <ul class="nav" id="side-menu">
            <li>
              <router-link class="" to="/">
                <i class="fa fa-home nav_icon"></i> الصفحه الرئيسيه
              </router-link>
            </li>
            <li>
              <h4 href="#">
                <i class="fa fa-cogs nav_icon"></i> الفوتير
                <span class="fa arrow"></span>
              </h4>
              <ul class="nav nav-second-level collapse">
                <li>
                  <router-link to="/invoice/add"> انشاء فاتوره </router-link>
                </li>
                <li>
                  <router-link to="/invoice/search">
                    استعلام عن فاتوره
                  </router-link>
                </li>
                <li>
                  <!-- <router-link to="/invoice/del"> حذف فاتوره </router-link> -->
                </li>
              </ul>
              <!-- /nav-second-level -->
            </li>
            <li>
              <h4 href="#">
                <i class="fa fa-book nav_icon"></i>الموردين
                <span class="fa arrow"></span>
              </h4>
              <ul class="nav nav-second-level collapse">
                <li>
                  <router-link to="/supplier/add">
                    اضافه مورد جديد
                  </router-link>
                </li>
                <li>
                  <router-link to="/supplier"> الاستعلام عن مورد </router-link>
                </li>
                <li>
                  <router-link to="/supplier/update"> تعديل مورد</router-link>
                </li>
              </ul>
              <!-- /nav-second-level -->
            </li>
            <li>
              <h4 href="widgets.html">
                <i class="fa fa-th-large nav_icon"></i> مخزن
              </h4>
              <ul class="nav nav-second-level collapse">
                <li>
                  <router-link to="/store/add"> اضافه صنف جديد </router-link>
                </li>
                <li>
                  <router-link to="/store/search">
                    الاستعلام عن صنف
                  </router-link>
                </li>
                <li>
                  <router-link to="/store/per-recieving">
                    اذن استلام
                  </router-link>
                </li>
                <li>
                  <router-link to="/store/"> رد بضاعه</router-link>
                </li>
              </ul>
            </li>

            <!-- <li>
              <h4>
                <i class="fa fa-check-square-o nav_icon"></i> جرد
                <span class="fa arrow"></span>
              </h4>
              <ul class="nav nav-second-level collapse">
                <li>
                  <a href="inputs.html">Inputs</a>
                </li>
                <li>
                  <a href="validation.html">Form Validation</a>
                </li>
              </ul>
              
            </li> -->

            <li>
              <a href="maps.html"
                ><i class="fa fa-location-arrow nav_icon"></i> تسجيل خروج
              </a>
            </li>
          </ul>
        </div>
        <!-- //sidebar-collapse -->
      </nav>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/css/animate.css";

.scrollbar {
  overflow: hidden !important;
  & > .nav {
    display: flex;
    flex-direction: column;
    direction: rtl;
    text-align: right;
    i.nav_icon {
      margin-right: 0;
      margin-left: 15px;
    }
    li {
      position: relative;
      i.nav_icon {
        margin-right: 0;
        margin-left: 15px;
      }
      &.active > h4,
      &.active > i {
        color: var(--mainColor);
      }

      h4 {
        color: #fff;
        font-size: 16px;
        padding: 10px 23px;
        cursor: pointer;
      }
      & > a {
        padding-right: 27px;
      }

      span {
        position: absolute;
        left: 20px;
      }

      .collapse {
        margin-right: 34px;
        border-right: 1px dotted var(--mainColor);
      }
    }
  }
  .scrollbar {
    overflow: hidden;
  }
}
</style>
