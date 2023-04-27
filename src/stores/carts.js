import { defineStore } from "pinia";
import $ from "jquery";

export const useCartsStore = defineStore("cart", {
  state: () => ({
    cart: {
      mainTotal: 0,
      products: [],
    },
  }),
  getters: {
    productsCount(state) {
      return state.cart.products.length;
    },
    getMainTotal(state) {
      return state.cart.mainTotal;
    },
    products(state) {
      return state.cart.products;
    },
  },
  actions: {
    updateMainTotal() {
      // recalculate main total cost
      return this.cart.products.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.total;
      }, 0);
    },
    addToCart(product) {
      // return console.log(product)
      const isFindProduct = this.cart.products.filter(
        (res) => res.title == product.title
      );
      // return console.log(isFindProduct)
      if (isFindProduct[0]) {
        console.log("update");
        const updatedproduct = isFindProduct[0];
        updatedproduct.amount = updatedproduct.amount + 1;
        let discountCPrice =
          updatedproduct.price -
          (updatedproduct.price * updatedproduct.discount) / 100;
        updatedproduct.total = updatedproduct.amount * discountCPrice;
        const index = this.cart.products.findIndex(
          (res) => res.title == product.title
        );
        this.cart.products.splice(index, 1, updatedproduct);
        console.log("total cast : ", this.updateMainTotal());
      } else {
        // return console.log("not found prod")
        let newProduct = product;
        newProduct.amount = 1;
        let discountCPrice =
          newProduct.price - (newProduct.price * newProduct.discount) / 100;
        newProduct.total = newProduct.amount * discountCPrice;
        this.cart.products.push(newProduct);
      }
      const outBtn = document.querySelector("[data-bs-toggle='modal']");
      outBtn.click();
    },
    deleteProduct(title) {
      try {
        let index = this.cart.products.findIndex((res) => res.title == title);
        this.cart.products.splice(index, 1);
      } catch (err) {
        console.log(err);
      }
    },
    decrease(item) {
      let product = item;
      if (product.amount > 1) {
        product.amount = product.amount - 1;
        let discountCValue = (product.price * product.discount) / 100;
        product.total = product.amount * (product.price - discountCValue);
        const index = this.cart.products.findIndex(
          (res) => res.title == product.title
        );
        this.cart.products.splice(index, 1, product);
      } else {
        this.deleteProduct(item.title);
      }
    },
    increase(item) {
      let product = item;
      let singleproductPrice = product.total / product.amount;
      product.amount += 1;
      product.total = product.amount * singleproductPrice;
    },
  },
});
