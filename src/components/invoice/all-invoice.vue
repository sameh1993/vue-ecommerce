<script setup>
import { useStore } from "vuex";
import { reactive } from "vue";

const store = useStore();

const invoice = reactive({
  id: 321,
  data: new Date(),
  products: [
    {
      id: 1,
      barcode: "321659898651323",
      name: "شبيسى بالفراخ",
      saleUnit: "piece",
      unitPrice: 80,
      unitCount: 1,
      boxPrice: 130,
      subTotal: 0,
      price: 0,
    },
    {
      id: 1,
      barcode: "321659898651323",
      name: "شبيسى بالجبنه",
      saleUnit: "piece",
      unitPrice: 5,
      unitCount: 2,
      boxPrice: 130,
      subTotal: 0,
      price: 0,
    },
  ],
  total: 730,
});

function updateInvoice(data) {
  Router.push("/invoice/details");
  store.commit("/invoice/addEditiingInvoice", user);
}

function deleteInvoice() {}
</script>

<template>
  <section class="details bg-white">
    <h2 class="text-center">تفاصيل موارد</h2>

    <div class="body mt-4">
      <table class="table table-striped border text-center">
        <thead class="thead-dark text-center">
          <tr class="">
            <th scope="col">رقم الفاتوره</th>
            <th scope="col">التاريخ</th>
            <th scope="col">عدد الاصناف</th>
            <th scope="col">اجمالى المبلغ</th>
            <th scope="col">تعديل</th>
            <th scope="col">حذف</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{{ invoice.id }}</th>
            <td>
              {{
                invoice.data.getDate() +
                "/" +
                invoice.data.getMonth() +
                "/" +
                invoice.data.getFullYear()
              }}
            </td>
            <td>{{ invoice.products.length }}</td>
            <td>{{ invoice.total }}</td>
            <td>
              <i @click="updateInvoice(invoice)" class="fa fa-edit"></i>
            </td>
            <td>
              <i
                @click="deleteInvoice(invoice)"
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
  font-family: var(--fontFamily);
}
</style>
