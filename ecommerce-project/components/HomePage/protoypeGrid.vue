<script setup>
const props = defineProps(["headLine", "cardData"]);
</script>
<template>
  <div
    class="bg-neutral flex flex-col justify-center shadow border rounded-xl md:m-10"
  >
    <div class="flex justify-center items-center p-3 w-full">
      <h4 class="m-2">{{ headLine }}</h4>
    </div>
    <div class="m-5 sm:m-10 flex bg-neutral rounded-xl justify-evenly">
      <HomePageCard v-for="i in cardData" :imgData="i"></HomePageCard>
    </div>
    <div class="flex justify-center mb-2">
      <NuxtLink
        :to="headLine == 'New Arrival' ? '/newArrival' : '/TopSelling'"
        class="btn btn-outline rounded-xl"
        >View All</NuxtLink
      >
    </div>
  </div>
</template>
