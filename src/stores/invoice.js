import { notify } from "@kyvg/vue3-notification";

export default {
  namespaced: true,
  state: () => ({
    ourInvoice: {
      total: 0,
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
      ],
    },
    currentInvoice: {
      totalPrice: 0,
      products: [],
    },
  }),
  getters: {
    getOurInvoice(state) {
      return state.ourInvoice;
    },
  },
  mutations: {
    calSubTitle(state, payload) {
      const index = state.ourInvoice.products.indexOf(payload);
      const ourPayload = payload;
      ourPayload.subTotal = +ourPayload.price * +ourPayload.unitCount;
      state.ourInvoice.products.splice(index, 1, ourPayload);
    },
    calTotalPrice(state) {
      const products = state.ourInvoice.products;
      const totalPrice = products.reduce((acc, current) => {
        return +acc + +current.subTotal;
      }, 0);
      console.log(totalPrice, products.length);
      state.ourInvoice.total = totalPrice;
    },
    deleteInvoice(state, payload) {
      const index = state.ourInvoice.findIndex((item) => {
        return (item.id = payload.id);
      });
      state.ourInvoice.splice(index, 1);
    },
  },
  actions: {
    addNewProduct({ state, commit }, payload) {
      // product  [ id -  barcode -  name - price  - boxPrice - boxUnitCount - balance ]
      // add saleUnit [ piece - box ] default piece
      const currentProduct = payload;
      const findElement = state.ourInvoice.products.filter(
        (item) => item.id === payload.id
      );
      if (findElement.length > 0) {
        notify({ text: "هذا المنتج تم اضافته مسبقا" });
      } else {
        if (currentProduct.barcode) {
          currentProduct.saleUnit = "piece";
          currentProduct.price = payload.unitPrice;
          currentProduct.unitCount = 1;
          currentProduct.subTotal =
            currentProduct.price * currentProduct.unitCount;
        } else {
          currentProduct.subTotal = payload.price;
        }

        // currentProduct.saleUnit = "piece";
        // currentProduct.price = payload.unitPrice;
        // currentProduct.unitCount = 1;
        // currentProduct.subTotal =
        //   currentProduct.price * currentProduct.unitCount;
        state.ourInvoice.products.push(currentProduct);
        commit("calTotalPrice");
      }
    },
    invoceInvoice(state) {
      notify({ text: "تم اصدار الفاتوره" });
      state.ourInvoice = {
        total: 0,
        products: [],
      };
    },
  },
};
