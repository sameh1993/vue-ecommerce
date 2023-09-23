<script setup>
import { useStore } from "vuex";
import { reactive, computed, onMounted } from "vue";
import { notify } from "@kyvg/vue3-notification";

const store = useStore();

const currentInvoice = computed(() => {
  return store.state.invoice.ourInvoice;
});

// [ id -  barcode -  name - price  - boxPrice - boxUnitCount - balance ]
var product = reactive({
  name: "",
  price: 0,
  unitCount: 1,
});

function addProduct(e) {
  e.preventDefault();
  var myProduct = product;
  product = {
    name: "",
    price: 0,
    unitCount: 1,
  };
  myProduct.id = currentInvoice.value.products.length + 1;
  store.dispatch("invoice/addNewProduct", myProduct);
}

function changeSaleUnit(e) {
  console.log(e);
}

function sendInvoice() {
  store.dispatch("invoceInvoice");
}

function test(item) {
  store.commit("invoice/calSubTitle", item);
  store.commit("invoice/calTotalPrice");
}

function deleteInvoice(item) {
  store.commit("invoice/deleteInvoice", item);
}
</script>

<template>
  <section class="invoice text-light">
    <h2 class="text-center text-capitalize">
      انشاء فاتوره {{ currentInvoice.products.length }}
    </h2>

    <!-- <div class="bg-light" v-for="item of currentInvoice.products">
      {{ item }}
    </div> -->

    <div class="body">
      <table class="table table-striped table-hover text-center">
        <thead class="thead-dark">
          <tr>
            <th scope="col">كود المنتج</th>
            <th scope="col">اسم المنتج</th>
            <th scope="col">وحده البيع</th>
            <th scope="col">سعر الوحده</th>
            <th scope="col">عدد الوحدات</th>
            <th scope="col">اجمالى المبلغ</th>
            <th scope="col"><i class="fa fa-trash"></i></th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="invoice-item text-center"
            v-for="(item, index) of currentInvoice.products"
          >
            <th scope="row">{{ item.id }}</th>
            <td>{{ item.name }}</td>
            <td>
              <select v-model="item.saleUnit">
                <option selected value="piece">القطعه</option>
                <option value="box">كرتونه</option>
              </select>
            </td>
            <td class="unitCount text-center">
              <input type="number" @input="test(item)" v-model="item.price" />
            </td>
            <td>
              <input
                @input="test(item)"
                type="number"
                v-model="item.unitCount"
              />
            </td>

            <td>{{ item.subTotal }}</td>
            <td>
              <i
                @click="deleteInvoice(item)"
                class="fa fa-trash text-danger"
              ></i>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="control">
        <div class="row">
          <div class="col-md-4">
            <div
              class="total bg-light h-100 rounded d-flex justify-centent-center align-items-center flex-column"
            >
              <h4 class="">الاجمالى</h4>
              <p>{{ currentInvoice.total }}ج</p>

              <button @click="sendInvoice" class="btn btn-info">
                اصدار الفاتوره
              </button>
            </div>
          </div>
          <div class="col-md-8">
            <form class="form border bg-light rounded">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-floating mb-3">
                    <select
                      v-model="product.name"
                      class="form-control"
                      id="sdas"
                    >
                      <option selected value=""></option>
                      <option value="جنبه تلاجه">جنبه تلاجه s</option>
                      <option value="جنبه سيدر">جنبه شيدر</option>
                      <option value="لب">لب</option>
                      <option value="فول سودانى">فول سودانى</option>
                      <option value="لبن">لبن</option>
                    </select>
                    <label for="sdas"> اختار الصنف </label>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-floating mb-3">
                    <input
                      v-model="product.price"
                      class="form-control"
                      id="sdas"
                    />
                    <label for="sdas"> سعر الشراء </label>
                  </div>
                </div>
              </div>

              <button @click="addProduct" class="btn btn-primary mt-2">
                اضافه
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.invoice {
  position: relative;

  h2 {
    font-family: var(--fontFamily);
    margin-bottom: 15px;
    color: var(--secondColor);
  }

  .invoice-item {
    input {
      text-align: center;
      border: 0 !important;
      width: 80px;
      padding: 4px;
    }
    .unitCount input {
      width: 70px;
    }
    .unit {
      display: flex;
      justify-content: center;
      i {
        padding-left: 7px;
        padding-right: 7px;
        font-weight: 600;
        background: #f8f8f8;
        width: 30px;
      }
    }

    select {
      word-wrap: normal;
      appearance: none;
      width: 60px;
      text-align: center;
      font-family: none;
      border: 0;
      padding: 4px;
    }
  }

  .control {
    position: absolute;
    left: 20px;
    bottom: 20px;
    right: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    .total {
      padding: 10px;
      h4 {
        color: #333;
        font-size: 19px;
        font-weight: 600;
      }
      p {
        color: #444;
        border: 1px dotted #444;
        min-width: 130px;
        margin-top: 15px;
        padding: 3px;
        border-radius: 4px;
        text-align: center;
      }
    }
    .btn {
      min-width: 150px;
      font-family: var(--fontFamily);
      margin: auto;
      display: block;
    }
    .form {
      padding: 14px 15px;
      .form-control:focus {
        box-shadow: none;
        border: 1px solid var(--secondColor);
      }
    }
  }
}
</style>
