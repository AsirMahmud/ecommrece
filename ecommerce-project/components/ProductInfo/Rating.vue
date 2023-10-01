<script setup>
const props = defineProps({
  Data: Object,
});
</script>

<template>
  <div class="flex items-center">
    <div class="flex my-3">
      <Icon class="text-2xl text-orange-400" name="clarity:star-solid" />
      <Icon class="text-2xl text-orange-400" name="clarity:star-solid" />
      <Icon class="text-2xl text-orange-400" name="clarity:star-solid" />
      <Icon class="text-2xl text-orange-400" name="clarity:star-solid" />
      <Icon class="text-2xl text-orange-400" name="clarity:star-solid" />
    </div>
    <div class="badge-lg bg-green-400 ml-2">{{ Data.rating.rate }}</div>
  </div>
</template>
