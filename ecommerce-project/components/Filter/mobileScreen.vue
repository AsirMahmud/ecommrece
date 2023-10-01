<script setup></script>
<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex justify-start">
      <!-- Page content here -->
      <label for="my-drawer" class="btn btn-primary drawer-button"
        ><Icon class="text-2xl m-1" name="lucide:filter" /> <P>filter</P></label
      >
    </div>
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <!-- Sidebar content here -->
        <FilterCategory class="mt-40"></FilterCategory>
      </ul>
    </div>
  </div>
</template>
