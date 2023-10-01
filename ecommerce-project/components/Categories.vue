<script setup>
const { data, isPending } = await useFetch(
  "https://fakestoreapi.com/products/categories"
);
</script>
<template>
  <div class="mt-[100px] m-10 flex flex-col justify-center items-center shadow">
    <div class="flex justify-center items-center">
      <h4>All Categories</h4>
    </div>

    <div class="flex w-full justify-center">
      <!-- Filter part -->

      <!-- Info part-->
      <div class="grid gap-2 lg:grid-cols-3 grid-cols-1 m-10">
        <div
          @click="navigateTo(`CategoriDetails/${category}`)"
          v-for="category in data"
          :key="category"
          class="w-56 md:h-72 h-56 flex justify-center items-center bg-neutral m-10"
        >
          <div>
            <h3>{{ category.toUpperCase() }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
