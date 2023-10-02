<script setup></script>

<template>
  <div class="flex justify-center bg-neutral w-full lg:h-[663px]">
    <div
      class="flex max-w-[1240px] lg:mx-10 w-full lg:flex-row flex-col-reverse pt-10 justify-center items-center"
    >
      <!-- Heading Part -->
      <div class="w-1/2 mx-5 flex justify-center flex-col items-center m-2">
        <div>
          <div class="flex md:flex justify-center">
            <h4 class="font-extrabold text-center">
              FIND CLOTHES <br />THAT MATCHES<br />
              YOUR STYLE
            </h4>
          </div>
          <p class="lg:text-sm text-[10px] my-10">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div class="flex flex-col md:flex-row justify-center md:flex-wrap">
            <div class="flex flex-col justify-center items-center">
              <h1>200+</h1>
              <p>International Brands</p>
            </div>
            <div class="flex flex-col justify-center items-center">
              <h1>2000+</h1>
              <p>High-Quality Products</p>
            </div>
            <div class="flex flex-col justify-center items-center mt-3">
              <h1>30000+</h1>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
        <div class="lg:m-10 m-10">
          <NuxtLink
            to="/AllProduct"
            class="btn bg-primary-content text-white rounded-xl"
          >
            Shop Now
          </NuxtLink>
        </div>
      </div>
      <!-- Picturepart -->
      <div class="w-1/2 h-full overflow-hidden mr-5">
        <div class="w-full h-full">
          <img
            class="object-cover"
            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
          />
        </div>
      </div>
    </div>
  </div>
</template>
