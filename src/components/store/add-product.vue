<script setup>
import { notify } from "@kyvg/vue3-notification";
import { computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const Route = useRoute();
const Router = useRouter();

const newProduct = computed(() => {
  return store.state.store.addProduct;
});

function addNewProduct() {
  Router.push("/store/details");
  store.commit("store/setAddProduct");
  notify({
    text: "تم اضافه صنف جديد",
  });
}
</script>

<template>
  <div class="add-product position-relative">
    <div class="body">
      <div class="content bg-white">
        <h4>{{ Route.name }}</h4>

        <!-- [ batcode -  ] -->
        <form @submit.prevent="addNewProduct" class="form">
          <div class="form-floating mb-3">
            <input
              v-model="newProduct.barcode"
              type="text"
              class="form-control"
              id="barcode"
            />
            <label for="barcode"> ادخل باركود </label>
          </div>

          <div class="form-floating mb-3">
            <input
              v-model="newProduct.name"
              type="text"
              class="form-control"
              id="name"
            />
            <label for="name"> ادخل اصم الصنف </label>
          </div>

          <div class="form-floating mb-3">
            <input
              v-model="newProduct.unitPrice"
              type="text"
              class="form-control"
              id="priceUnit"
            />
            <label for="priceUnit"> سعر الوحده </label>
          </div>

          <div class="form-floating mb-3">
            <input
              v-model="newProduct.boxPrice"
              type="text"
              class="form-control"
              id="boxPrice"
            />
            <label for="boxPrice"> سعر الكرتونه </label>
          </div>

          <div class="form-floating mb-3">
            <input
              v-model="newProduct.boxUnitCount"
              type="text"
              class="form-control"
              id="boxUnitCount"
            />
            <label for="boxUnitCount"> عدد الواحدات </label>
          </div>

          <div class="form-floating mb-3">
            <input
              v-model="newProduct.balance"
              type="text"
              class="form-control"
              id="balance"
            />
            <label for="category"> الرصيد </label>
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

  h4 {
    font-family: var(--fontFamily);
    padding: 15px 0;
    font-size: 21px;
    color: #222;
  }
  .form {
    .form-group {
      margin-bottom: 20px;
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
    label {
      color: #444;
      font-weight: 400;
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
