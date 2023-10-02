<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "~/stores/counter";

const store = useCounterStore();
const { products, productAmount, totalPrice, addProduct, isCart, cartChanger } =
  storeToRefs(store);
const route = useRoute();
const cateName = route.params.categori;
const { data, isPending } = await useFetch(
  `https://fakestoreapi.com/products/category/${cateName}`
);
</script>

<template>
  <div
    v-if="data"
    class="mt-[100px] m-5 flex flex-col justify-center items-center shadow"
  >
    <div class="flex justify-center items-center">
      <h2 class="flex">{{ cateName.toUpperCase() }}</h2>
    </div>

    <div class="flex w-full">
      <!-- Filter part -->

      <!-- Info part-->
      <div class="grid gap-2 lg:grid-cols-3 grid-cols-2 m-2">
        <HomePageCard
          v-for="i in data"
          :key="i.id"
          :img-data="i"
          class="w-full h-auto"
        ></HomePageCard>
      </div>
    </div>
  </div>
  <div v-else>
    <!-- Handle loading or error state here -->
    <p v-if="isPending">Loading...</p>
    <p v-else>Error loading data.</p>
  </div>
</template>
