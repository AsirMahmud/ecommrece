<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "~/stores/counter";

const store = useCounterStore();
const { products, productAmount, totalPrice, addProduct, isCart, cartChanger } =
  storeToRefs(store);
</script>
<template>
  <div>
    <NavBar></NavBar>
    <ShoppingCart v-if="isCart"></ShoppingCart>
    <slot></slot>
    <MainTarget></MainTarget>
    <Footer></Footer>
  </div>
</template>
