<script setup>
const { data, pending, error } = await useFetch(
  "https://fakestoreapi.com/products?limit=2"
);
</script>

<template>
  <HomePageProtoypeGrid
    head-line="New Arrival"
    :cardData="data"
  ></HomePageProtoypeGrid>
</template>
