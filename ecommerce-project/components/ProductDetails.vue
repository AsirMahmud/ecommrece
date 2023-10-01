<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "~/stores/counter";

const store = useCounterStore();
const { products, productUpdater } = storeToRefs(store);
const router = useRoute();
const id = router.params.id;
const { data, pending, error } = await useFetch(
  `https://fakestoreapi.com/products/${id}`
);
console.log(data.value);

const productPusher = (i) => {
  products.value.push(i);
  productUpdater();
};
</script>

<template>
  <div class="m-10 mt-[100px] h-2/3 flex justify-center items-center">
    <div class="h-1/2 flex justify-center md:flex-row flex-col">
      <div
        class="md:w-1/2 w-[40vh] h-2/3 overflow-hidden border shadow rounded-xl flex items-center justify-center"
      >
        <img :src="data.image" class="w-auto h-2/3 object-contain" />
      </div>
      <div class="md:mx-10 mt-10 flex flex-col">
        <h6 class="md:text-4xl sm:text-2xl">{{ data.title }}</h6>
        <ProductInfoRating :Data="data"></ProductInfoRating>
        <h1 class="mt-2">${{ data.price }}</h1>
        <button
          @click="productPusher(data)"
          class="btn bg-primary-content text-white my-3"
        >
          Add to cart
        </button>
        <P class="text-xs text-gray-500 md:text-lg w-[50vh]">{{
          data.description
        }}</P>

        <p class="md:text-xl">
          Category: <span class="text-bold">{{ data.category }}</span>
        </p>
        <p class="md:text-xl">
          Stock Available:
          <span class="text-bold">{{ data.rating.count }}</span>
        </p>
      </div>
    </div>
  </div>
  <div class="flex justify-center">
    <ProductInfoSimilarCategory></ProductInfoSimilarCategory>
  </div>
</template>
