<script setup>
import { useWindowSize } from "@vueuse/core";

const { width, height } = useWindowSize();
const a = ref("");
const { data, isPending } = await useFetch(
  "https://fakestoreapi.com/products?limit=5"
);

if (width > 768) {
  a.value = data.value.slice(-3);
} else {
  a.value = data.value.slice(-2);
}
</script>

<template>
  <HomePageProtoypeGrid
    head-line="Top selling"
    :card-data="a"
  ></HomePageProtoypeGrid>
</template>
