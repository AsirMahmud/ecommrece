<script setup></script>
<template>
  <div
    class="flex items-center justify-center relative shadow bg-white mx-auto border"
  >
    <div
      class="navbar top-0 fixed px-10 bg-white font-[poppins] md:flex justify-between hidden"
    >
      <div @click="" class="cursor-pointer">
        <NuxtLink
          to="/"
          class="btn btn-ghost normal-case text-4xl font-extrabold"
          >Redstone</NuxtLink
        >
      </div>
      <div class="flex justify-between">
        <NuxtLink to="/AllProduct">
          <p class="m-2 lg:text-xl md:text-sm">All Products</p></NuxtLink
        >
        <NuxtLink to="/TopSelling">
          <p class="m-2 lg:text-xl md:text-sm">Top Selling</p></NuxtLink
        >
        <NuxtLink to="/newArrival"
          ><p class="m-2 lg:text-xl md:text-sm">New Arrival</p></NuxtLink
        >
        <NuxtLink to="/Categories">
          <p class="m-2 lg:text-xl md:text-sm">All categories</p></NuxtLink
        >
      </div>
      <div class="bg-neutral rounded-xl">
        <input type="text" class="input bg-neutral rounded-xl w-49 h-10" />
        <Icon class="text-2xl m-1" name="material-symbols:search" />
      </div>
      <div class="flex-none"><ResposiveDropDown></ResposiveDropDown></div>
    </div>
  </div>
  <div
    class="navbar fixed bg-neutral text-neutral-content md:hidden font-[poppins] z-10"
  >
    <div class="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-row items-center justify-between">
        <!-- Page content here -->
        <div class="flex justify-center items-center">
          <label for="my-drawer-2" class="">
            <Icon name="quill:hamburger" class="text-4xl mx-4"></Icon>
          </label>
          <div @click="" class="cursor-pointer">
            <NuxtLink
              to="/"
              class="btn btn-ghost normal-case text-3xl font-extrabold"
              >Redstone</NuxtLink
            >
          </div>
        </div>
        <div><ResposiveDropDown></ResposiveDropDown></div>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <div class="flex flex-col first-letter:">
            <NuxtLink to="/AllProduct"><p class="m-2">All product</p></NuxtLink>
            <NuxtLink to="/TopSelling">
              <p class="m-2">Top Selling</p></NuxtLink
            >
            <NuxtLink to="/newArrival">
              <p class="m-2">New Arrival</p></NuxtLink
            >
            <NuxtLink to="/categories" class="m-2">All categories</NuxtLink>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>
