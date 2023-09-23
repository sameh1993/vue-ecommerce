<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

const store = useStore();
const Route = useRoute();
const Router = useRouter();

const user = computed(() => {
  return store.state.supplier.editSup;
});

function saveEditSup() {
  store.commit("supplier/saveEditSup", user);
  Router.push("/supplier/details");
}
</script>

<template>
  <div class="add-supplier position-relative">
    <div class="body">
      <!-- {{ user }} -->
      <div class="content bg-whote">
        <h4>{{ Route.name }}</h4>
        <div></div>
        <form @submit.prevent="saveEditSup" class="form">
          <div class="form-floating">
            <input
              type="text"
              placeholder="ادخل اسم المورد / الشركه"
              v-model="user.name"
              class="form-control"
            />
            <label> ادخل اسم الموارد/الشركه </label>
          </div>

          <div class="form-floating">
            <input
              type="text"
              placeholder="ادخل عنوان المورد / الشركه"
              v-model="user.address"
              class="form-control"
            />
            <label> ادخل عنوان الشركه </label>
          </div>

          <div class="form-floating">
            <input
              type="text"
              placeholder="ادخل اسم  مندوب "
              v-model="user.agentName"
              class="form-control"
            />
            <label> ادخل اسم المندرب</label>
          </div>

          <div class="form-floating">
            <input
              type="text"
              placeholder="ادخل رقم ت مندوب "
              v-model="user.agentPhone"
              class="form-control"
            />
            <label> ادخل رقم تليفون </label>
          </div>

          <div class="form-floating">
            <input
              type="text"
              placeholder="ادخل رقم2 مندوب "
              v-model="user.agentPhone2"
              class="form-control"
            />
            <label> ادخل رقم 2 </label>
          </div>

          <!-- <div class="form-group">
            <input
              type="text"
              placeholder="ادخل رقم3 مندوب الشركه"
              v-modal="user.agentPhone3"
              class="form-control"
            />
          </div> -->

          <button class="btn btn-primary m-auto">حفظ</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.content {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  background-color: #fff;
  padding: 25px 22px;
  border-radius: 5px;

  .form-floating {
    margin-bottom: 15px;
  }

  h4 {
    font-family: var(--fontFamily);
    padding: 15px 0;
    font-size: 21px;
    color: #222;
  }
  .form {
    .form-group {
      .form-control {
        height: 43px;
        border-radius: 5px;
        font-family: var(--fontFamily);
        &::placeholder {
          font-size: 16px;
          font-family: var(--fontFamily);
        }
        &:focus {
          box-shadow: none;
          border: 1px solid var(--secondColor);
        }
      }
    }

    .btn {
      color: #fff;
      background-color: #337ab7;
      border-color: #2e6da4;
      min-width: 120px;
      margin: auto;
      display: inherit;
      font-size: 16px;
      font-family: var(--fontFamily);
    }
  }
}
</style>
