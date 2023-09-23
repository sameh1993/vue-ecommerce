<script setup>
import { reactive, computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

const store = useStore();
const Route = useRoute();
const Router = useRouter();

const addSup = computed(() => {
  return store.state.supplier.addSup;
});

function saveSipplier() {
  store.commit("supplier/saveSipplier");
  Router.push("/supplier/details");
}
</script>

<template>
  <div class="add-supplier position-relative">
    <div class="body">
      <div class="content bg-whote">
        <h4>{{ Route.name }}</h4>
        <form @submit.prevent="saveSipplier" class="form">
          <div class="form-floating">
            <input
              type="text"
              placeholder="ادخل اسم المورد / الشركه"
              v-model="addSup.name"
              class="form-control"
            />
            <label> ادخل اسم الموارد/الشركه </label>
          </div>

          <div class="form-floating">
            <input
              type="text"
              placeholder="ادخل عنوان المورد / الشركه"
              v-model="addSup.address"
              class="form-control"
            />
            <label> ادخل عنوان الشركه </label>
          </div>

          <div class="form-floating">
            <input
              type="text"
              placeholder="ادخل اسم  مندوب "
              v-model="addSup.agentName"
              class="form-control"
            />
            <label> ادخل اسم المندرب</label>
          </div>

          <div class="form-floating">
            <input
              type="text"
              placeholder="ادخل رقم ت مندوب "
              v-model="addSup.agentPhone"
              class="form-control"
            />
            <label> ادخل رقم تليفون </label>
          </div>

          <div class="form-floating">
            <input
              type="text"
              placeholder="ادخل رقم2 مندوب "
              v-model="addSup.agentPhone2"
              class="form-control"
            />
            <label> ادخل رقم 2 </label>
          </div>

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
