<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const products = computed(() => {
  return store.state.store.editingProduct;
});

const current = computed(() => {
  return store.state.store.addProduct;
});

onMounted(() => {
  $("#showLeftPush").click(function () {
    $("body").toggleClass("cbp-spmenu-push-toright");
  });
});
</script>

<template>
  <!-- header-starts -->
  <div class="sticky-header header-section">
    <div class="header-left">
      <div class="profile_details">
        <ul class="pr-0">
          <li class="dropdown profile_details_drop">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <div class="profile_img">
                <span class="prfil-img d-flex align-items-center">
                  <img src="@/assets/images/a.png" alt="" />
                  <p class="mr-3">سامح سيد محمد</p>
                </span>
                <div class="clearfix"></div>
              </div>
            </a>
            <!-- <ul class="dropdown-menu drp-mnu">
              <li>
                <a href="#"><i class="fa fa-cog"></i> Settings</a>
              </li>
              <li>
                <a href="#"><i class="fa fa-user"></i> Profile</a>
              </li>
              <li>
                <a href="#"><i class="fa fa-sign-out"></i> Logout</a>
              </li>
            </ul> -->
          </li>
        </ul>
      </div>
      <div class="header-right header-right-grid">
        <div class="profile_details_left">
          <!--notifications of menu start -->
          <ul class="nofitications-dropdown">
            <li class="dropdown head-dpdn">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown"
                ><i class="fa fa-envelope"></i><span class="badge">3</span></a
              >
              <ul class="dropdown-menu anti-dropdown-menu">
                <li>
                  <div class="notification_header">
                    <h3 class="text-center">You have 3 new messages</h3>
                  </div>
                </li>
                <li>
                  <a href="#">
                    <div class="notification_desc">
                      <p>Lorem ipsum dolor amet</p>
                      <p><span>1 hour ago</span></p>
                    </div>
                    <div class="user_img">
                      <img src="@/assets/images/1.png" alt="" />
                    </div>
                    <div class="clearfix"></div>
                  </a>
                </li>
                <li class="odd">
                  <a href="#">
                    <div class="notification_desc">
                      <p>Lorem ipsum dolor amet</p>
                      <p><span>1 hour ago</span></p>
                    </div>
                    <div class="user_img">
                      <img src="@/assets/images/2.png" alt="" />
                    </div>
                    <div class="clearfix"></div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="notification_desc">
                      <p>Lorem ipsum dolor amet</p>
                      <p><span>1 hour ago</span></p>
                    </div>
                    <div class="user_img">
                      <img src="@/assets/images/3.png" alt="" />
                    </div>

                    <div class="clearfix"></div>
                  </a>
                </li>
                <li>
                  <div class="notification_bottom">
                    <a href="#">See all messages</a>
                  </div>
                </li>
              </ul>
            </li>
            <!-- <li class="dropdown head-dpdn">
              <a
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                aria-expanded="false"
                ><i class="fa fa-bell"></i><span class="badge blue">3</span></a
              >
              <ul class="dropdown-menu anti-dropdown-menu">
                <li>
                  <div class="notification_header">
                    <h3>You have 3 new notification</h3>
                  </div>
                </li>
                <li>
                  <a href="#">
                    <div class="user_img">
                      <img src="@/assets/images/2.png" alt="" />
                    </div>
                    <div class="notification_desc">
                      <p>Lorem ipsum dolor amet</p>
                      <p><span>1 hour ago</span></p>
                    </div>
                    <div class="clearfix"></div>
                  </a>
                </li>
                <li class="odd">
                  <a href="#">
                    <div class="user_img">
                      <img src="@/assets/images/1.png" alt="" />
                    </div>
                    <div class="notification_desc">
                      <p>Lorem ipsum dolor amet</p>
                      <p><span>1 hour ago</span></p>
                    </div>
                    <div class="clearfix"></div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="user_img">
                      <img src="@/assets/images/3.png" alt="" />
                    </div>
                    <div class="notification_desc">
                      <p>Lorem ipsum dolor amet</p>
                      <p><span>1 hour ago</span></p>
                    </div>
                    <div class="clearfix"></div>
                  </a>
                </li>
                <li>
                  <div class="notification_bottom">
                    <a href="#">See all notifications</a>
                  </div>
                </li>
              </ul>
            </li>
            <li class="dropdown head-dpdn">
              <a
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                aria-expanded="false"
                ><i class="fa fa-tasks"></i
                ><span class="badge blue1">15</span></a
              >
              <ul class="dropdown-menu anti-dropdown-menu">
                <li>
                  <div class="notification_header">
                    <h3>You have 8 pending task</h3>
                  </div>
                </li>
                <li>
                  <a href="#">
                    <div class="task-info">
                      <span class="task-desc">Database update</span
                      ><span class="percentage">40%</span>
                      <div class="clearfix"></div>
                    </div>
                    <div class="progress progress-striped active">
                      <div class="bar yellow" style="width: 40%"></div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="task-info">
                      <span class="task-desc">Dashboard done</span
                      ><span class="percentage">90%</span>
                      <div class="clearfix"></div>
                    </div>
                    <div class="progress progress-striped active">
                      <div class="bar green" style="width: 90%"></div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="task-info">
                      <span class="task-desc">Mobile App</span
                      ><span class="percentage">33%</span>
                      <div class="clearfix"></div>
                    </div>
                    <div class="progress progress-striped active">
                      <div class="bar red" style="width: 33%"></div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="task-info">
                      <span class="task-desc">Issues fixed</span
                      ><span class="percentage">80%</span>
                      <div class="clearfix"></div>
                    </div>
                    <div class="progress progress-striped active">
                      <div class="bar blue" style="width: 80%"></div>
                    </div>
                  </a>
                </li>
                <li>
                  <div class="notification_bottom">
                    <a href="#">See all pending tasks</a>
                  </div>
                </li>
              </ul>
            </li> -->
          </ul>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
    <!--logo -->
    <div class="logo">
      <a href="#">
        <ul class="d-flex flex-row-reverse text-right">
          <li>
            <h1>حمـــــزاوى</h1>
          </li>
          <li><img src="@/assets/images/logo1.png" alt="" /></li>
        </ul>
      </a>
    </div>
    <!--//logo-->
    <div class="header-right">
      <!--notification menu end -->

      <!--toggle button start-->
      <button id="showLeftPush"><i class="fa fa-bars"></i></button>
    </div>
  </div>
  <!-- //header-ends -->
</template>

<style lang="scss">
.sticky-header {
  padding-left: 25px;
  padding-right: 25px;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  padding-right: 0;
  flex-direction: row-reverse;
  & > div {
    float: none;
  }

  .logo {
    transform: translate(-104px);
    h1 {
      // font-family: var(--fontFamily);
      color: var(--secondColor);
    }
  }
}

.nofitications-dropdown {
  ul {
    p {
      margin-bottom: 0 !important;
    }
  }
}
.profile_details {
  & > ul {
    margin: 0;
  }

  p {
    margin-bottom: 0;
  }

  .dropdown-toggle {
    margin-right: 15px;
    margin-left: 25px;
    padding-right: 0;
    &:after {
      display: none;
    }
  }
  .dropdown-toggle::after {
    display: none !important;
  }

  .dropdown-menu {
    li {
      text-align: right;
      img {
        transform: translatex(9px);
      }
    }
  }
}
</style>
