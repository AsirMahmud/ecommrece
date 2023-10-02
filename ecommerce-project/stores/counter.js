import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const products = ref([]);
  const productAmount = computed(() => products.value.length);
  const totalPrice = computed(() =>
    products.value.reduce((total, product) => total + product.price, 0)
  );

  const addProduct = (product) => {
    products.value.push(product);
  };

  const isCart = ref(false);
  const cartChanger = () => {
    isCart.value = true;
  };

  const removeCart = (index) => {
    products.value.splice(index, 1);
  };

  const filterCategory = ref("");
  const filterPrice = ref("0");

  const shouldIfilter = ref(false);

  const filterChanger = () => {
    shouldIfilter.value = true;
  };
  return {
    products,
    productAmount,
    totalPrice,
    addProduct,
    isCart,
    cartChanger,
    removeCart,
    filterCategory,

    filterPrice,
    shouldIfilter,
    filterChanger,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
}
