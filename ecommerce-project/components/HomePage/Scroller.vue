<script setup>
const { data, error, pending } = await useFetch(
  "https://api.escuelajs.co/api/v1/categories/1/products"
);
const a = data.value;
</script>

<template>
  <div class="flex justify-center rounded-xl">
    <div class="m-10 bg-neutral rounded-2xl p-2 md:w-[80%]">
      <div class="md:p-10">
        <div>
          <Swiper
            :modules="[SwiperPagination, SwiperAutoplay]"
            :slides-per-view="3"
            :loop="true"
            :effect="'pagination'"
            :autoplay="{
              delay: 1000,
              disableOnInteraction: true,
            }"
            :creative-effect="{
              prev: {
                shadow: false,
                translate: ['-70%', 5, -1],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }"
            :spaceBetween="2"
            :centeredSlides="true"
            :pagination="{
              clickable: true,
            }"
            class="flex flex-shrink"
          >
            <SwiperSlide v-for="(image, index) in a" :key="index">
              <HomePageCard :productData="image"></HomePageCard>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Swiper {
  overflow: visible;
}
</style>
