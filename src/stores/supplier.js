export default {
  namespaced: true,
  state: () => ({
    addSup: {
      // id: "",
      // name: "",
      // address: "",
    },
    detailsObject: [],
    editSup: {},
  }),
  getters: {
    ourDetailsItems(state) {
      return state.detailsObject;
    },
  },
  mutations: {
    saveSipplier(state) {
      state.detailsObject = [];
      state.detailsObject.push(state.addSup);
      state.addSup = {};
    },
    editSupp(state, payload) {
      state.editSup = payload;
    },
    saveEditSup(state, payload) {
      const index = state.detailsObject.findIndex((item) => {
        return item.name == payload.name;
      });
      state.detailsObject.splice(index, 1, payload);
    },
    deleteItemDetails(state, payload) {
      const index = state.detailsObject.findIndex((item) => {
        return item.name == payload.name;
      });
      state.detailsObject.splice(index, 1);
    },
  },
};
