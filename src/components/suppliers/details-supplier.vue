<script setup>
import { computed, nextTick, onUpdated } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const Router = useRouter();

const users = computed(() => {
  return store.getters["supplier/ourDetailsItems"];
});

onUpdated(() => {
  nextTick();
});

function editSupp(item) {
  console.log(item, "item");
  store.commit("supplier/editSupp", item);
  Router.push("/supplier/update");
}

function deleteItem(item) {
  store.commit("supplier/deleteItemDetails", item);
}
</script>

<template>
  <section class="details bg-white">
    <h2 class="text-center">بيانات موارد</h2>

    {{ users }}

    <div class="body mt-4">
      <table class="table table-striped border text-center">
        <thead class="thead-dark text-center">
          <tr class="">
            <th scope="col">كود الموارد</th>
            <th scope="col">اسم الموارد</th>
            <th scope="col">عنوان المورد</th>
            <th scope="col">اسم الندوب</th>
            <th scope="col">رقم المندروب</th>
            <th scope="col">رقم المندروب2</th>
            <th scope="col">تعديل</th>
            <th scope="col">حذف</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item of users">
            <th scope="row">1</th>
            <td>{{ item.name }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.agentName }}</td>
            <td>{{ item.agentPhone }}</td>
            <td>{{ item.agentPhone2 }}</td>
            <td>
              <i @click="editSupp(item)" class="fa fa-edit"></i>
            </td>
            <td>
              <i @click="deleteItem(item)" class="fa fa-trash text-danger"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style lang="scss">
.details {
  font-family: var(--fontFamily);
}
</style>
