<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "~/stores/counter";

const store = useCounterStore();
const { filterChanger } = store;

const { filterCategory, filterPrice, shouldIfilter } = storeToRefs(store);
const { data, isPending } = await useFetch(
  "https://fakestoreapi.com/products/categories"
);
const categories = ref("");
const price = ref(0);
</script>
<template>
  <div>
    <h3 class="text-black text-2xl">Category</h3>
    <div v-for="(i, index) in data" class="mt-2">
      <div class="flex justify-between">
        <label :for="index">{{ i }}</label>
        <input
          type="radio"
          name="radio-1"
          class="radio"
          :id="index"
          v-model="filterCategory"
          :value="i"
        />
      </div>
    </div>
    <div class="flex mt-5 text-2xl justify-center">${{ filterPrice }}</div>
    <input
      v-model="filterPrice"
      type="range"
      min="0"
      max="1000"
      class="range range-md mt-10"
    />
    <div class="flex justify-center pt-10">
      <div class="btn rounded-xl bg-black text-white" @click="filterChanger">
        Filter
      </div>
    </div>
  </div>
</template>
