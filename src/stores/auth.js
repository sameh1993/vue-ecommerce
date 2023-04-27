import { defineStore } from "pinia";
import { signout } from "@/firebase/auth.js";
import { notify } from "@kyvg/vue3-notification";

export const useAuthStore = defineStore("register", {
  state: () => ({
    idToken: "",
  }),
  getters: {
    isIdToken: (state) => {
      return state.idToken;
    },
  },
  actions: {
    updateToken(value) {
      this.idToken = value;
    },
    logout() {
      signout()
        .then((result) => {
          this.idToken = null;
          notify({
            title: "authentication",
            text: "the singout is done",
          });
        })
        .catch((err) => {
          notify({
            title: "error authentication . there is a problem",
          });
        });
    },
  },
});
