<script setup>
const { data, isPending } = await useFetch("https://fakestoreapi.com/products");

import { storeToRefs } from "pinia";
import { useCounterStore } from "~/stores/counter";

const store = useCounterStore();

const { filterCategory, filterPrice, shouldIfilter } = storeToRefs(store);
</script>
<template>
  <div class="mt-[100px] m-10 flex flex-col justify-center items-center shadow">
    <div class="flex md:justify-center justify-start items-center">
      <div class="mr-10">
        <FilterMobileScreen class="md:hidden"></FilterMobileScreen>
      </div>
      <h4>All Products</h4>
    </div>

    <div class="flex w-full">
      <!-- Filter part -->
      <FilterMainFilter></FilterMainFilter>

      <!-- Info part-->
      <div class="grid gap-4 lg:grid-cols-3 grid-cols-2 m-10">
        <HomePageCard
          v-for="i in data"
          :key="i.id"
          :img-data="i"
          class="w-full h-auto"
        ></HomePageCard>
      </div>
    </div>
  </div>
</template>
