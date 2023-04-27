
import { defineStore } from "pinia"


export const useProductStore = defineStore("product", {
    state: () => ({
        singleProduct: {},
        products: [
            {
              img: "of.png",
              title: "moong",
              price: 100,
              discount: 10,
              rating: 4.5,
              weight: 2
            },
            {
              img: "of1.png",
              title: "sunflower",
              price: 654,
              discount: 5,
              rating: 2.5,
              weight: 8
            },
            {
              img: "of2.png",
              title: "kabula chana",
              price: 987,
              discount: 10,
              rating: 1.5,
              weight: 10
            },
            {
              img: "of2.png",
              title: "soya chucks",
              price: 321,
              discount: 4,
              rating: 5,
              weight: 60
            },
            {
              img: "of4.png",
              title: "lays",
              price: 65,
              discount: 9,
              rating: 4.5,
              weight: 100
            },
            {
              img: "of5.png",
              title: "kurkure",
              price: 654,
              discount: 5,
              rating: 2.5,
              weight: 100
            },
            {
              img: "of6.png",
              title: "popcom",
              price: 845,
              discount: 10,
              rating: 1.5,
              weight: 250
            },
            {
              img: "of7.png",
              title: "nuts",
              price: 321,
              discount: 4,
              rating: 2.3,
              weight: 60
            }
          ]
    }),
    getters: {
        allProducts (state) {
            return state.products
        }
    },
    actions: {
        assignProduct(value) {
            this.singleProduct = value
        }
    }

})