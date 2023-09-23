import { createStore } from "vuex";
import invoice from "./invoice.js";
import supplier from "./supplier.js";
import store from "./store.js";

export default createStore({
  state: () => ({
    name: "sameh sayed mohamed",
    smsm: "smsm",
  }),
  getters: {
    rootGetter() {
      return "getters root";
    },
  },
  mutations: {
    chnageSmsm(state) {
      state.smsm = "sameh moha";
    },
  },
  modules: {
    invoice,
    supplier,
    store,
  },
});
