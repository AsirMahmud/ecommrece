<script setup>
const route = useRoute();
const cateName = route.params.categori;
const { data, isPending } = await useFetch(
  `https://fakestoreapi.com/products/category/${cateName}`
);
</script>

<template>
  <div
    v-if="data"
    class="mt-[100px] m-10 flex flex-col justify-center items-center shadow"
  >
    <div class="flex md:justify-center justify-start items-center">
      <div class="mr-10">
        <FilterMobileScreen class="md:hidden"></FilterMobileScreen>
      </div>
      <h4>{{ cateName.toUpperCase() }}</h4>
    </div>

    <div class="flex w-full">
      <!-- Filter part -->
      <FilterMainFilter></FilterMainFilter>s

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
  <div v-else>
    <!-- Handle loading or error state here -->
    <p v-if="isPending">Loading...</p>
    <p v-else>Error loading data.</p>
  </div>
</template>
