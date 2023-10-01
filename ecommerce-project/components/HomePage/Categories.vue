<script setup></script>

<template>
  <div
    class="flex flex-col justify-center items-center m-10 bg-neutral rounded-xl"
  >
    <div class="flex justify-center m-4"><h4>What we provide</h4></div>
    <div class="md:w-[1240px] grid grid-cols-3 gap-2 m-4">
      <div class="col-span-1 relative">
        <h5 class="absolute z-20 text-xl m-4 text-white">Shirt</h5>
        <img
          class="w-full h-[50vh] object-cover"
          src="https://content.moss.co.uk/images/original/966785502_04.webp?xl-lazy"
        />
      </div>
      <div class="col-span-2 relative">
        <h5 class="absolute z-20 text-xl m-4 text-white">T Shirt</h5>
        <img
          class="w-full h-[50vh] object-cover"
          src="https://img.freepik.com/premium-photo/fashion-mockup-sky-blue-tshirt-blank_856660-9069.jpg?w=740"
        />
      </div>
      <div class="col-span-2 relative">
        <h5 class="absolute z-20 text-xl m-4 text-white">Jacket</h5>
        <img
          class="w-full h-[50vh] object-cover"
          src="https://content.moss.co.uk/images/original/be7fc632-dbf3-4782-b33f-3e5ec9fa060d.jpg"
        />
      </div>
      <div class="col-span-1 relative">
        <h5 class="absolute z-20 text-xl m-4 text-white">Jeans</h5>
        <img
          class="w-full h-[50vh] object-cover"
          src="https://static.bershka.net/4/photos2/2023/I/0/2/p/0305/666/433/ca703f4a5f0803b3e719cedb03ef73b7-0305666433_2_4_0.jpg?cropfixwidth=2052&imwidth=750&impolicy=bershka-crop-fix-width-itxmediumhigh&imformat=generic"
        />
      </div>
    </div>
    <NuxtLink to="/categories"
      ><button class="btn bg-black m-5 rounded-xl text-white">
        View All categories
      </button></NuxtLink
    >
  </div>
</template>
