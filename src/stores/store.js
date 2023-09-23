export default {
  namespaced: true,
  // id: 13, barcode: "" name: "شبيسى بالجبنه", unitPrice: 5, boxPrice: 30, boxUnitCount:
  // 50, balance: 600
  state: () => ({
    addProduct: {
      barcode: "",
      name: "",
      unitPrice: 0,
      boxPrice: 0,
      boxUnitCount: 0,
      balance: 0,
    },
    less5Unit: [],
    products: [],
    editingProduct: {},
  }),
  mutations: {
    setAddProduct(state) {
      const product = state.addProduct;
      product.id = state.products.length + 1;
      state.products.push(product);
      state.addProduct = {
        barcode: "",
        name: "",
        unitPrice: 0,
        boxPrice: 0,
        boxUnitCount: 0,
        balance: 0,
      };
    },
    addProductToEdtingPro(state, payload) {
      state.editingProduct = payload;
    },
    // saveUpdatedPro(state, payload) {
    //   console.log(payload);
    // },
    deleteProduct(state, payload) {
      const index = state.products.findIndex((item) => {
        return (item.id = payload.id);
      });
      state.products.splice(index, 1);
    },
  },
  actions: {},
};
