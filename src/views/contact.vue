<script>
import heading from "@/components/helps/title.vue";
import useVulidate from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";
import { defineComponent } from "vue";
import ourBanner from "@/components/helps/main-banner.vue";

export default defineComponent({
  components: {
    heading,
    ourBanner,
  },
  data() {
    return {
      sender: "",
      email: "",
      msg: "",
      loading: true,
    };
  },
  setup() {
    return { v$: useVulidate() };
  },
  validations() {
    return {
      sender: { required }, // Matches this.sender
      email: { required, email }, // Matches this.subject
      msg: { required, minLength: minLength(6), maxLength: maxLength(500) },
    };
  },
  methods: {
    status(validation) {
      return {
        error: validation.$error,
        dirty: validation.$dirty,
      };
    },
  },
  mounted() {
    this.$notify({ title: "sameh sayed", text: "sameh sayed mohamed " });

    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
});
</script>

<template>
  <div class="">
    <!-- start banner -->
    <ourBanner />
    <!-- start contact -->
    <div class="contactus">
      <div class="container">
        <!-- start title -->
        <heading name="contact us" />
        <div v-if="!loading" class="row">
          <div class="col-md-5">
            <div class="left">
              <img src="@/assets/images/cac.jpg" class="img-fluid" />
              <iframe
                class="map"
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2482.432383990807!2d0.028213999961443994!3d51.52362882484525!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1423469959819"
                style="border: 0"
              ></iframe>
            </div>
          </div>
          <div class="col-md-7">
            <div class="right">
              <h4>Contact Information</h4>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur
              </p>
              <ul
                class="contact-list d-flex justify-content-between list-unstyled"
              >
                <li>
                  <i class="fa fa-map-marker"></i> 756 Global Place, New York
                </li>
                <li>
                  <i class="fa fa-envelope"></i>
                  <a href="#">mail@example.com</a>
                </li>
                <li><i class="fa fa-phone"></i> 2222 222</li>
              </ul>
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a
                    class="nav-link active fa fa-envelope"
                    aria-current="page"
                    data-bs-target="#home"
                    data-bs-toggle="tab"
                  ></a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link fa fa-map-marker"
                    data-bs-target="#profile"
                    data-bs-toggle="tab"
                  ></a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link fa fa-phone"
                    data-bs-target="#contact"
                    data-bs-toggle="tab"
                  ></a>
                </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <form @submit.prevent="submitimg" class="form">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <input
                            v-model="v$.sender.$model"
                            :class="status(v$.sender)"
                            placeholder="Name"
                            type="text"
                            class="form-control"
                          />
                          <p
                            v-for="(item, index) of v$.sender.$errors"
                            :key="index"
                            class="text-danger"
                          >
                            {{ item.$message }}
                          </p>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <input
                            :class="status(v$.email)"
                            v-model="v$.email.$model"
                            type="text"
                            class="form-control"
                            placeholder="email"
                          />
                          <p
                            class="text-danger"
                            v-for="(item, index) of v$.email.$errors"
                            :key="index"
                          >
                            {{ item.$message }}
                          </p>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <textarea
                            :class="status(v$.msg)"
                            v-model="v$.msg.$model"
                            placeholder="Message..."
                            class="form-control"
                          ></textarea>
                          <p
                            class="text-danger"
                            v-for="(item, index) of v$.msg.$errors"
                            :key="index"
                          >
                            {{ item.$message }}
                          </p>
                        </div>
                      </div>
                      <button
                        :disabled="v$.$invalid"
                        class="btn btn-success mt-2"
                      >
                        send
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  class="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <h3>our branches</h3>
                  <ul class="list-unstyled branches">
                    <li>
                      <i class="fa fa-arrow-right"></i> 756 Global Place, New
                      York.
                    </li>
                    <li>
                      <i class="fa fa-arrow-right"></i> 889 diamond street, USA.
                    </li>
                    <li>
                      <i class="fa fa-arrow-right"></i> 756 global Place, New
                      York.
                    </li>
                    <li>
                      <i class="fa fa-arrow-right"></i> 889 diamond street, USA.
                    </li>
                  </ul>
                </div>
                <div
                  class="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <h3>Contact Me Through</h3>
                  <ul class="list-unstyled branches">
                    <li>Mobile No : +123 456 7890</li>
                    <li>Office No : +123 222 2222</li>
                    <li>Home No : +123 456 7890</li>
                    <li>Fax No : +123 456 7890</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="row loading">
          <div class="col-md-5">
            <div class="left">
              <div class="parent-img">
                <img
                  data-loading="img"
                  src="@/assets/images/placeholder-image.png"
                />
              </div>
              <iframe
                class="map"
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2482.432383990807!2d0.028213999961443994!3d51.52362882484525!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1423469959819"
                style="border: 0"
              ></iframe>
            </div>
          </div>
          <div class="col-md-7">
            <div class="right">
              <h4 data-loading="text">Contact Information</h4>
              <p data-loading="text">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur
              </p>
              <ul
                class="contact-list d-flex justify-content-between list-unstyled"
              >
                <li>
                  <i class="fa fa-map-marker"></i> 756 Global Place, New York
                </li>
                <li>
                  <i class="fa fa-envelope"></i>
                  <a href="#">mail@example.com</a>
                </li>
                <li><i class="fa fa-phone"></i> 2222 222</li>
              </ul>
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a
                    class="nav-link active fa fa-envelope"
                    aria-current="page"
                    data-bs-target="#home"
                    data-bs-toggle="tab"
                  ></a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link fa fa-map-marker"
                    data-bs-target="#profile"
                    data-bs-toggle="tab"
                  ></a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link fa fa-phone"
                    data-bs-target="#contact"
                    data-bs-toggle="tab"
                  ></a>
                </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <form @submit.prevent="submitimg" class="form">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <input
                            v-model="v$.sender.$model"
                            :class="status(v$.sender)"
                            placeholder="Name"
                            type="text"
                            class="form-control"
                          />
                          <p
                            v-for="(item, index) of v$.sender.$errors"
                            :key="index"
                            class="text-danger"
                          >
                            {{ item.$message }}
                          </p>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <input
                            :class="status(v$.email)"
                            v-model="v$.email.$model"
                            type="text"
                            class="form-control"
                            placeholder="email"
                          />
                          <p
                            class="text-danger"
                            v-for="(item, index) of v$.email.$errors"
                            :key="index"
                          >
                            {{ item.$message }}
                          </p>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <textarea
                            :class="status(v$.msg)"
                            v-model="v$.msg.$model"
                            placeholder="Message..."
                            class="form-control"
                          ></textarea>
                          <p
                            class="text-danger"
                            v-for="(item, index) of v$.msg.$errors"
                            :key="index"
                          >
                            {{ item.$message }}
                          </p>
                        </div>
                      </div>
                      <button
                        :disabled="v$.$invalid"
                        class="btn btn-success mt-2"
                      >
                        send
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  class="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <h3>our branches</h3>
                  <ul class="list-unstyled branches">
                    <li>
                      <i class="fa fa-arrow-right"></i> 756 Global Place, New
                      York.
                    </li>
                    <li>
                      <i class="fa fa-arrow-right"></i> 889 diamond street, USA.
                    </li>
                    <li>
                      <i class="fa fa-arrow-right"></i> 756 global Place, New
                      York.
                    </li>
                    <li>
                      <i class="fa fa-arrow-right"></i> 889 diamond street, USA.
                    </li>
                  </ul>
                </div>
                <div
                  class="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <h3>Contact Me Through</h3>
                  <ul class="list-unstyled branches">
                    <li>Mobile No : +123 456 7890</li>
                    <li>Office No : +123 222 2222</li>
                    <li>Home No : +123 456 7890</li>
                    <li>Fax No : +123 456 7890</li>
                  </ul>
                </div>
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
.contactus {
  padding: 3em 0;
  .left {
    padding-top: 20px;
    iframe {
      width: 100%;
      margin-top: 15px;
    }
    img {
      width: 100%;
    }
    .map {
      height: 250px;
    }
  }
  .right {
    padding-top: 20px;
    h4 {
      font-size: 31px;
    }
    & > p {
      line-height: 2;
    }
    .contact-list {
      @include media-breakpoint-down(sm) {
        flex-direction: column;
        li {
          margin-top: 8px;
          font-size: 14px;
        }
      }
      & > li {
        flex: 1;
        font-size: 14px;

        cursor: pointer;
        i {
          margin-right: 8px;
          font-size: 21px;
        }
        a {
          text-decoration: none;
          color: #333;
        }
      }
    }
  }
}

form {
  padding-bottom: 20px;
  .row > div {
    margin-top: 15px;
  }

  .form-control {
    border-radius: 0;
    font-size: 13px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 13px;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
  textarea {
    min-height: 100px;
  }

  .btn-success {
    width: 130px;
    margin-left: 13px;
    margin-top: 13px !important;
  }
}

.loading {
  .parent-img {
    background-color: #cecece;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 45%;
    }
  }
}

.nav-tabs {
  .nav-link {
    color: #555;
    background: #fff;
    padding: 24px 52px;
    font-size: 18px;
    &.active {
      color: var(--mainColor) !important;
    }
  }

  @include media-breakpoint-down(sm) {
    & > li {
      flex: 1;
    }
  }
}

.nav-tabs .nav-link:not(.active) {
  border-bottom: 1px solid #ced4da;
}

.tab-content {
  border-bottom: 1px solid #ced4da;
  border-right: 1px solid #ced4da;
  border-left: 1px solid #ced4da;
  padding: 20px;

  h3 {
    text-transform: capitalize;
    margin-bottom: 28px;
  }
  .branches {
    li {
      margin-bottom: 15px;
      font-size: 14px;
      i {
        color: #ed0612;
        margin-right: 15px;
      }
    }
  }
}
</style>
