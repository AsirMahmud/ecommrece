<script setup>
const props = defineProps({
  imgData: Object,
});
const isOkbutton = ref(false);
const titleMaker = (a) => {
  return a.slice(0, 30);
};
</script>

<template>
  <div
    @click="navigateTo(`/ProductDetails/${imgData.id}and${imgData.category}`)"
    class="lg:72 w-56 rounded-xl md:h-96 shadow m-2 bg-white"
  >
    <div class="w-full h-56">
      <img
        :src="imgData.image"
        class="h-full w-full p-1 object-contain rounded-xl shadow"
      />
    </div>
    <div class="m-2 flex flex-col justify-between">
      <div @click="() => (isOkbutton = !isOkbutton)" class="cursor-pointer">
        <p class="bold text-sm my-2">
          {{ isOkbutton ? imgData.title : titleMaker(imgData.title) }}
          <span v-if="isOkbutton == false" class="text-sm">.....</span>
        </p>
      </div>
      <div>
        <div v-if="isOkbutton === false" class="flex my-3">
          <Icon class="text-2xl text-orange-400" name="clarity:star-solid" />
          <Icon class="text-2xl text-orange-400" name="clarity:star-solid" />
          <Icon class="text-2xl text-orange-400" name="clarity:star-solid" />
          <Icon class="text-2xl text-orange-400" name="clarity:star-solid" />
          <Icon class="text-2xl text-orange-400" name="clarity:star-solid" />
        </div>
        <div class="flex justify-between items-center">
          <h6 class="text-xl lg:mt-2">${{ imgData.price }}</h6>
          <div class="md:badge-lg p-1 bg-green-400 rounded-lg">
            <p class="text-sm">{{ imgData.rating.rate }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
