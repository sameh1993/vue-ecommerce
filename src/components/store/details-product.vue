<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { notify } from "@kyvg/vue3-notification";

const store = useStore();
const Router = useRouter();

const products = computed(() => {
  return store.state.store.products;
});

function updateProduct(item) {
  store.commit("store/addProductToEdtingPro", item);
  Router.push("/store/update");
}

function deleteProduct(item) {
  store.commit("store/deleteProduct", item);
  notify({
    text: "تم حذف الصنف بنجاح",
  });
}
</script>

<template>
  <section class="details bg-white">
    <h3 class="text-center">تفاصيل الصنف</h3>

    <div class="body mt-4">
      <table class="table table-striped border text-center">
        <thead class="thead-dark text-center">
          <tr class="">
            <th scope="col">كود الصنف</th>
            <th scope="col">اسم الصنف الصنف</th>
            <th scope="col">سعر الوحده</th>
            <th scope="col">سعر الكرتونه</th>
            <th scope="col">عدد الوحدات</th>

            <th scope="col">تعديل</th>
            <th scope="col">حذف</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item of products">
            <th scope="row">{{ item.id }}</th>

            <td>{{ item.name }}</td>
            <td>{{ item.unitPrice }}</td>
            <td>{{ item.boxPrice }}</td>
            <td>{{ item.boxUnitCount }}</td>
            <td>
              <i @click="updateProduct(item)" class="fa fa-edit"></i>
            </td>
            <td>
              <i
                @click="deleteProduct(item)"
                class="fa fa-trash text-danger"
              ></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style lang="scss">
.details {
  min-height: 600px;
  // background-color: ;//
  padding: 15px;
  border-radius: 17px;
}
</style>
