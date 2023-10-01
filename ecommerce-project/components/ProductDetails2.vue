<script setup>
const router = useRoute();
const id = router.params.id;
const { data, pending, error } = await useFetch(
  `https://fakestoreapi.com/products/${id}`
);
console.log(data);
</script>
<template></template>
