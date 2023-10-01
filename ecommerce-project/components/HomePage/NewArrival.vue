<script setup>
import { useWindowSize } from "@vueuse/core";

const { width, height } = useWindowSize();
const windowChanger = () => {
  if (width >= 768) {
    return 3;
  } else {
    return 2;
  }
};
console.log(width);
const { data, pending, error } = await useFetch(
  `https://fakestoreapi.com/products?limit=${windowChanger()}`
);
</script>

<template>
  <HomePageProtoypeGrid
    head-line="New Arrival"
    :cardData="data"
  ></HomePageProtoypeGrid>
</template>
